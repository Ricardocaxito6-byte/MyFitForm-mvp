/* ============================================================
   MyFitForm — análise de postura no dispositivo
   ------------------------------------------------------------
   • Usa o MediaPipe Pose Landmarker (modelo "lite") a correr no
     próprio browser: as fotografias NÃO saem do telemóvel para
     esta análise (só se descarrega a biblioteca e o modelo).
   • Calcula medidas simples a partir dos pontos do corpo
     (ombros, bacia, cabeça, tronco, joelhos) nas 4 fotografias.
   • É uma ESTIMATIVA indicativa, não um diagnóstico. O
     MediaPipe não vê a coluna: não mede cifose, lordose nem
     escoliose.
   • Os limiares (TH) são heurísticos e devem ser afinados com
     testes em fotografias reais.

   Como se liga ao app: este ficheiro carrega DEPOIS de app.js
   (ver <script> no index.html) e, quando a página termina de
   carregar, substitui/envolve algumas funções do app.js:
     startAssessment, handlePhotoCapture, finishAssessmentPhotos,
     startProcessing, screenPosture, screenResults, screenDashboard
   ============================================================ */
(function(){
'use strict';

/* ---------- Configuração ---------- */
const MP_VERSION = '0.10.22-rc.20250304';
const MP_BASE    = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@' + MP_VERSION;
const MODEL_URL  = 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task';
const VIS_MIN    = 0.5;    // visibilidade mínima de um ponto para o usarmos
const MAX_SIDE   = 1024;   // as fotos são reduzidas a este lado máximo (poupa memória no iPhone)

// Limiares heurísticos (graus, exceto legs = % do comprimento da perna)
const TH = {
  shoulders: { mild: 2,   strong: 4  },
  hips:      { mild: 2,   strong: 4  },
  head:      { mild: 3,   strong: 6  },
  trunk:     { mild: 2.5, strong: 5  },
  legs:      { flag: 4 },
  headFwd:   { mild: 10,  strong: 18 },
  trunkFwd:  { mild: 6,   strong: 10 },
};

/* ---------- Geometria ---------- */
const rad2deg = r => r * 180 / Math.PI;
const mid  = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const r1   = n => Math.round(n * 10) / 10;
const fmt  = n => String(r1(n)).replace('.', ',');

function pts(lm, w, h){
  return lm.map(p => ({
    x: p.x * w, y: p.y * h,
    v: (p.visibility == null ? 1 : p.visibility),
    nx: p.x, ny: p.y,
  }));
}
// todos os pontos visíveis e dentro do enquadramento?
function usable(P, ids){
  return ids.every(i => {
    const p = P[i];
    return p && p.v >= VIS_MIN && p.nx > -0.02 && p.nx < 1.02 && p.ny > -0.02 && p.ny < 1.02;
  });
}
// ângulo (graus) da linha entre dois pontos face à horizontal.
// > 0  quando o ponto da DIREITA da imagem está mais baixo.
function lineTilt(p, q){
  const a = p.x <= q.x ? p : q;
  const b = p.x <= q.x ? q : p;
  return rad2deg(Math.atan2(b.y - a.y, b.x - a.x));
}

/* ---------- Medidas: frente / costas ----------
   Convenção "anatómica": valor > 0 = lado ESQUERDO da pessoa.
   Na foto de frente, o lado esquerdo da pessoa aparece à direita
   da imagem; nas costas, à esquerda. Não dependemos dos rótulos
   left/right do modelo (que podem trocar nas costas): usamos a
   posição x dos pontos.                                          */
function frontBackMetrics(lm, w, h, view){
  const P = pts(lm, w, h);
  const flip = view === 'front' ? 1 : -1;
  const m = { view, shoulders: null, hips: null, head: null, trunk: null, legs: null };

  if(usable(P, [11, 12])) m.shoulders = flip * lineTilt(P[11], P[12]);  // > 0: ombro esquerdo mais baixo
  if(usable(P, [23, 24])) m.hips      = flip * lineTilt(P[23], P[24]);  // > 0: lado esquerdo da bacia mais baixo
  if(usable(P, [7, 8]))   m.head      = flip * lineTilt(P[7], P[8]);    // > 0: orelha esquerda mais baixa

  if(usable(P, [11, 12, 23, 24])){
    const sm = mid(P[11], P[12]);
    const hm = mid(P[23], P[24]);
    // > 0: ombros deslocados para o lado esquerdo relativamente à bacia
    m.trunk = flip * rad2deg(Math.atan2(sm.x - hm.x, hm.y - sm.y));
  }

  // Joelhos (só na foto de frente): desvio do joelho face à linha anca→tornozelo,
  // em % do comprimento da perna. > 0 = joelho para dentro (tendência valgo).
  if(view === 'front' && usable(P, [23, 24, 25, 26, 27, 28])){
    const legs = {};
    const defs = [['left', 23, 25, 27], ['right', 24, 26, 28]];
    for(const [side, hi, ki, ai] of defs){
      const H = P[hi], K = P[ki], A = P[ai];
      const dy = A.y - H.y;
      if(dy < 1) continue;
      const xLine = H.x + (K.y - H.y) * (A.x - H.x) / dy;
      const off = (K.x - xLine) / dist(H, A) * 100;   // > 0: joelho para a direita da imagem
      // na foto de frente a perna esquerda fica à direita da imagem
      legs[side] = r1(side === 'left' ? -off : off);
    }
    if(legs.left != null && legs.right != null) m.legs = legs;
  }

  const any = m.shoulders != null || m.hips != null || m.head != null || m.trunk != null || m.legs != null;
  return any ? m : null;
}

/* ---------- Medidas: perfil (esquerda / direita) ---------- */
function sideMetrics(lm, w, h){
  const P = pts(lm, w, h);
  const L = { ear: 7, sh: 11, hip: 23, knee: 25, ank: 27, heel: 29, toe: 31 };
  const R = { ear: 8, sh: 12, hip: 24, knee: 26, ank: 28, heel: 30, toe: 32 };
  const score = s => [s.ear, s.sh, s.hip, s.knee, s.ank].reduce((t, i) => t + P[i].v, 0);
  const S = score(L) >= score(R) ? L : R;                 // lado mais visível

  if(!usable(P, [S.ear, S.sh, S.hip])) return null;
  const ear = P[S.ear], sh = P[S.sh], hip = P[S.hip];
  if(sh.y - ear.y <= 0 || hip.y - sh.y <= 0) return null; // geometria implausível

  // para que lado a pessoa está virada (+1 = direita da imagem)
  let facing = 0;
  if(P[0].v >= VIS_MIN) facing = Math.sign(P[0].x - ear.x);
  if(!facing && usable(P, [S.toe, S.heel])) facing = Math.sign(P[S.toe].x - P[S.heel].x);
  if(!facing) return null;

  return {
    // > 0: orelha à frente da linha do ombro (cabeça projetada à frente)
    headFwd:  rad2deg(Math.atan2((ear.x - sh.x) * facing, sh.y - ear.y)),
    // > 0: ombro à frente da linha da anca (ombros protraídos / tronco inclinado à frente)
    trunkFwd: rad2deg(Math.atan2((sh.x - hip.x) * facing, hip.y - sh.y)),
  };
}

/* ---------- Construção das observações ---------- */
const avg = arr => {
  const v = arr.filter(x => x != null && isFinite(x));
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
};
// junta frente + costas; se discordarem claramente (sinais opostos) → inconclusivo
function combine(a, b){
  const vals = [a, b].filter(x => x != null);
  if(!vals.length) return { value: null, inconsistent: false };
  if(vals.length === 2 && Math.sign(vals[0]) !== Math.sign(vals[1]) && Math.abs(vals[0]) >= 1.5 && Math.abs(vals[1]) >= 1.5){
    return { value: null, inconsistent: true };
  }
  return { value: avg(vals), inconsistent: false };
}
const intensity = (abs, t) => abs >= t.strong ? 'acentuada' : 'ligeira';
const sideName  = v => v > 0 ? 'esquerdo' : 'direito';

function buildObservations(m){
  const obs = [];
  const F = m.front || {}, B = m.back || {};
  const RT = m.right || null, LT = m.left || null;

  // Ombros
  {
    const c = combine(F.shoulders, B.shoulders);
    if(c.inconsistent){
      obs.push({ label: 'Ombros: resultado inconclusivo', severity: 'info',
        description: 'As fotografias de frente e de costas dão resultados diferentes. Repita com o telemóvel bem nivelado (na vertical, à altura do peito).' });
    } else if(c.value != null){
      const a = Math.abs(c.value);
      if(a >= TH.shoulders.mild){
        obs.push({ label: 'Possível assimetria dos ombros', severity: 'attention',
          description: `O ombro ${sideName(c.value)} aparenta estar mais baixo (diferença ${intensity(a, TH.shoulders)}, ≈ ${fmt(a)}°).` });
      } else {
        obs.push({ label: 'Ombros nivelados', severity: 'info',
          description: `Sem diferença relevante de altura entre os ombros (≈ ${fmt(a)}°).` });
      }
    }
  }

  // Bacia
  {
    const c = combine(F.hips, B.hips);
    if(!c.inconsistent && c.value != null){
      const a = Math.abs(c.value);
      if(a >= TH.hips.mild){
        obs.push({ label: 'Possível assimetria da bacia', severity: 'attention',
          description: `O lado ${sideName(c.value)} da bacia aparenta estar mais baixo (diferença ${intensity(a, TH.hips)}, ≈ ${fmt(a)}°).` });
      } else {
        obs.push({ label: 'Bacia nivelada', severity: 'info',
          description: `Sem diferença relevante de altura entre os dois lados da bacia (≈ ${fmt(a)}°).` });
      }
    }
  }

  // Inclinação lateral do tronco (só aparece se houver desvio)
  {
    const c = combine(F.trunk, B.trunk);
    if(!c.inconsistent && c.value != null && Math.abs(c.value) >= TH.trunk.mild){
      const a = Math.abs(c.value);
      obs.push({ label: 'Possível inclinação do tronco', severity: 'attention',
        description: `Os ombros aparentam estar deslocados para o lado ${sideName(c.value)} em relação à bacia (inclinação ${intensity(a, TH.trunk)}, ≈ ${fmt(a)}°).` });
    }
  }

  // Inclinação lateral da cabeça (só aparece se houver desvio)
  {
    const c = combine(F.head, B.head);
    if(!c.inconsistent && c.value != null && Math.abs(c.value) >= TH.head.mild){
      const a = Math.abs(c.value);
      obs.push({ label: 'Possível inclinação lateral da cabeça', severity: 'attention',
        description: `A cabeça aparenta estar inclinada para o lado ${sideName(c.value)} (inclinação ${intensity(a, TH.head)}, ≈ ${fmt(a)}°).` });
    }
  }

  // Pernas (frente)
  if(F.legs){
    const flag = TH.legs.flag;
    const l = F.legs.left, r = F.legs.right;
    const dir = v => v >= flag ? 'dentro' : (v <= -flag ? 'fora' : null);
    const dl = dir(l), dr = dir(r);
    if(dl && dr && dl === dr){
      obs.push({ label: `Possível tendência dos joelhos para ${dl}`, severity: 'attention',
        description: `Nos dois joelhos, a linha anca-joelho-tornozelo aparenta desviar-se para ${dl}.` });
    } else if(dl || dr){
      const lado = dl ? 'esquerdo' : 'direito';
      const d = dl || dr;
      obs.push({ label: `Possível desvio do joelho ${lado}`, severity: 'attention',
        description: `O joelho ${lado} aparenta desviar-se para ${d} em relação à linha anca-tornozelo.` });
    } else {
      obs.push({ label: 'Alinhamento das pernas', severity: 'info',
        description: 'Nenhum desvio relevante dos joelhos identificado na fotografia de frente.' });
    }
  }

  // Perfil (média das fotografias laterais disponíveis)
  const sides = [RT, LT].filter(Boolean);
  if(sides.length){
    const hf = avg(sides.map(s => s.headFwd));
    const tf = avg(sides.map(s => s.trunkFwd));

    if(hf != null){
      if(hf >= TH.headFwd.mild){
        obs.push({ label: 'Possível projeção da cabeça à frente', severity: 'attention',
          description: `A orelha aparenta estar à frente da linha do ombro (${intensity(hf, TH.headFwd)}, ≈ ${fmt(hf)}°).` });
      } else {
        obs.push({ label: 'Cabeça alinhada com os ombros', severity: 'info',
          description: `Vista de lado, a cabeça aparenta estar alinhada com os ombros (≈ ${fmt(Math.max(hf, 0))}°).` });
      }
    }
    if(tf != null){
      if(tf >= TH.trunkFwd.mild){
        obs.push({ label: 'Possíveis ombros à frente da linha da anca', severity: 'attention',
          description: `Vistos de lado, os ombros aparentam estar à frente da linha da anca (${intensity(tf, TH.trunkFwd)}, ≈ ${fmt(tf)}°), o que pode indicar ombros protraídos ou tronco inclinado à frente.` });
      } else if(tf <= -TH.trunkFwd.mild){
        obs.push({ label: 'Possível inclinação do tronco para trás', severity: 'attention',
          description: `Vistos de lado, os ombros aparentam estar atrás da linha da anca (≈ ${fmt(Math.abs(tf))}°).` });
      } else {
        obs.push({ label: 'Tronco alinhado (perfil)', severity: 'info',
          description: `Vistos de lado, ombros e anca aparentam estar alinhados (≈ ${fmt(Math.abs(tf))}°).` });
      }
    }
  }

  // primeiro o que merece atenção (ordenação estável)
  return obs
    .map((o, i) => ({ o, i }))
    .sort((a, b) => (a.o.severity === 'attention' ? 0 : 1) - (b.o.severity === 'attention' ? 0 : 1) || a.i - b.i)
    .map(x => x.o);
}

/* ---------- MediaPipe (carregado sob pedido) ---------- */
let landmarkerPromise = null;
function getLandmarker(){
  if(!landmarkerPromise){
    landmarkerPromise = (async () => {
      const mod = await import(MP_BASE + '/vision_bundle.mjs');
      const fileset = await mod.FilesetResolver.forVisionTasks(MP_BASE + '/wasm');
      return mod.PoseLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: MODEL_URL, delegate: 'CPU' },
        runningMode: 'IMAGE',
        numPoses: 1,
      });
    })();
    landmarkerPromise.catch(() => { landmarkerPromise = null; });  // permite nova tentativa
  }
  return landmarkerPromise;
}
function preload(){ return getLandmarker().catch(() => null); }

async function loadToCanvas(file){
  const url = URL.createObjectURL(file);
  try{
    const img = new Image();
    img.src = url;
    await img.decode();
    const scale = Math.min(1, MAX_SIDE / Math.max(img.naturalWidth, img.naturalHeight));
    const w = Math.round(img.naturalWidth * scale);
    const h = Math.round(img.naturalHeight * scale);
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
    return canvas;
  } finally {
    URL.revokeObjectURL(url);
  }
}

// miniatura com os pontos/linhas por cima (fica só no dispositivo)
function drawOverlay(canvas, lm, view){
  const scale = Math.min(1, 480 / canvas.width);
  const out = document.createElement('canvas');
  out.width = Math.round(canvas.width * scale);
  out.height = Math.round(canvas.height * scale);
  const ctx = out.getContext('2d');
  ctx.drawImage(canvas, 0, 0, out.width, out.height);
  const P = lm.map(p => ({ x: p.x * out.width, y: p.y * out.height, v: p.visibility == null ? 1 : p.visibility }));
  const segs = (view === 'front' || view === 'back')
    ? [[11,12],[23,24],[11,23],[12,24],[7,8],[23,25],[25,27],[24,26],[26,28]]
    : [[7,11],[11,23],[23,25],[25,27],[8,12],[12,24],[24,26],[26,28]];
  ctx.lineWidth = Math.max(2, out.width / 160);
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c6ff3d';
  ctx.fillStyle = '#c6ff3d';
  const seen = new Set();
  for(const [a, b] of segs){
    if(P[a].v < 0.3 || P[b].v < 0.3) continue;
    ctx.beginPath(); ctx.moveTo(P[a].x, P[a].y); ctx.lineTo(P[b].x, P[b].y); ctx.stroke();
    seen.add(a); seen.add(b);
  }
  const r = Math.max(3, out.width / 110);
  seen.forEach(i => { ctx.beginPath(); ctx.arc(P[i].x, P[i].y, r, 0, Math.PI * 2); ctx.fill(); });
  return out.toDataURL('image/jpeg', 0.75);
}

/* files: [frente, direita, esquerda, costas] (mesma ordem do app) */
async function analyzePhotos(files){
  const landmarker = await getLandmarker();
  const views = ['front', 'right', 'left', 'back'];
  const metrics = { front: null, right: null, left: null, back: null };
  const overlays = [null, null, null, null];
  const photoStatus = [];

  for(let i = 0; i < 4; i++){
    const f = files && files[i];
    if(!f){ photoStatus.push({ ok: false, reason: 'sem fotografia' }); continue; }
    try{
      const canvas = await loadToCanvas(f);
      const res = landmarker.detect(canvas);
      const lm = res && res.landmarks && res.landmarks[0];
      if(!lm){ photoStatus.push({ ok: false, reason: 'corpo não detetado' }); continue; }
      const v = views[i];
      overlays[i] = drawOverlay(canvas, lm, v);
      const m = (v === 'front' || v === 'back')
        ? frontBackMetrics(lm, canvas.width, canvas.height, v)
        : sideMetrics(lm, canvas.width, canvas.height);
      if(!m){ photoStatus.push({ ok: false, reason: 'corpo não totalmente visível' }); continue; }
      metrics[v] = m;
      photoStatus.push({ ok: true });
    } catch(err){
      photoStatus.push({ ok: false, reason: 'erro ao processar (' + (err && err.message || err) + ')' });
    }
  }
  const observations = buildObservations(metrics);
  return { ok: observations.length > 0, observations, overlays, photoStatus, metrics };
}

const api = { analyzePhotos, preload, buildObservations, frontBackMetrics, sideMetrics, combine, TH };

/* ============================================================
   Integração com o app (só no browser)
   ============================================================ */
if(typeof window !== 'undefined' && typeof document !== 'undefined'){
  window.MFPosture = api;

  const install = () => {
    const needed = ['startAssessment','handlePhotoCapture','finishAssessmentPhotos','startProcessing','screenPosture','screenResults','screenDashboard'];
    if(typeof state === 'undefined' || needed.some(n => typeof window[n] !== 'function')){
      console.warn('posture.js: app.js não foi encontrado — integração ignorada.');
      return;
    }
    if(window.__mfPostureInstalled) return;
    window.__mfPostureInstalled = true;

    const resetPosture = () => {
      state.photoFiles = [null, null, null, null];
      state.postureObservations = null;
      state.postureOverlays = [null, null, null, null];
      state.postureStatus = null;
      state.postureError = '';
      state.postureJob = null;
    };
    resetPosture();

    /* 1) início da avaliação: limpa e começa a descarregar o modelo em segundo plano */
    const _startAssessment = window.startAssessment;
    window.startAssessment = async function(){
      resetPosture();
      preload();
      return _startAssessment.apply(this, arguments);
    };

    /* 2) guarda o ficheiro de cada fotografia para a análise (o upload original continua igual) */
    const _handlePhotoCapture = window.handlePhotoCapture;
    window.handlePhotoCapture = function(event){
      const f = event && event.target && event.target.files && event.target.files[0];
      if(f) state.photoFiles[state.photoIndex] = f;
      return _handlePhotoCapture.apply(this, arguments);
    };

    /* 3) fim das fotos: estimativas por fórmula (como antes) + postura medida a sério.
          Já não se grava o texto fixo de postura. */
    async function runPostureAnalysis(){
      try{
        const r = await analyzePhotos(state.photoFiles);
        state.postureObservations = r.observations;
        state.postureOverlays = r.overlays;
        state.postureStatus = r.photoStatus;
        if(r.ok && state.user && state.currentAssessmentId){
          try{ await dataSavePostureObservations(state.currentAssessmentId, r.observations); }
          catch(e){ console.warn('Não foi possível guardar a postura:', e); }
        }
      } catch(err){
        console.warn('Análise de postura falhou:', err);
        state.postureObservations = [];
        state.postureError = String(err && err.message || err);
      }
    }
    window.finishAssessmentPhotos = async function(){
      state.postureJob = runPostureAnalysis();     // arranca já, em paralelo
      if(state.user && state.currentAssessmentId){
        // Estimativa do MVP — calculada por fórmula a partir do perfil, nunca uma medição BIA real.
        const est = computeBodyEstimates(state.profile);
        await dataSaveAssessmentEstimates(state.currentAssessmentId, {
          ...est,
          estimate_source: 'mvp_estimate',
          is_estimate: true,
        });
      }
      nav('processing'); startProcessing();
    };

    /* 4) o botão "Ver minha avaliação" só ativa quando a análise de postura terminar */
    window.startProcessing = function(){
      if(state.processingDone) return;
      const items = document.querySelectorAll('#proc-list .checklist-item');
      let idx = 0;
      const interval = setInterval(() => {
        if(idx >= items.length){
          clearInterval(interval);
          Promise.resolve(state.postureJob).catch(() => {}).then(() => {
            state.processingDone = true;
            const btn = document.getElementById('proc-btn');
            const title = document.getElementById('proc-title');
            if(btn){ btn.style.opacity = 1; btn.style.pointerEvents = 'auto'; }
            if(title) title.textContent = 'Análise concluída.';
          });
          return;
        }
        const el = items[idx];
        if(el){ el.classList.remove('pending'); el.classList.add('done'); el.querySelector('.tick').innerHTML = ic.checkThin; }
        idx++;
      }, 550);
    };

    /* 5) ecrã de postura com resultados reais */
    window.screenPosture = function(){
      const obs = state.postureObservations || [];
      const overlays = state.postureOverlays || [];
      const status = state.postureStatus || [];
      const names = ['Frente', 'Direita', 'Esquerda', 'Costas'];

      const thumbs = overlays.some(Boolean) ? `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
          ${names.map((n, i) => `
            <div>
              <div style="border-radius:14px; overflow:hidden; border:1px solid var(--border); background:#0c0d0a;">
                ${overlays[i]
                  ? `<img src="${overlays[i]}" alt="${n}" style="display:block; width:100%; height:auto;">`
                  : `<div style="padding:26px 8px; text-align:center; font-size:12px; color:var(--text-3);">${(status[i] && status[i].reason) || 'sem imagem'}</div>`}
              </div>
              <span class="muted" style="display:block; text-align:center; margin-top:4px;">${n}${status[i] && !status[i].ok ? ' · não analisada' : ''}</span>
            </div>`).join('')}
        </div>` : '';

      const cards = obs.length
        ? obs.map(o => `
            <div class="card">
              <p style="font-size:14px;">${o.severity === 'attention' ? '🟡' : '🟢'} <b>${o.label}</b></p>
              <p class="lede" style="margin-top:6px;">${o.description}</p>
            </div>`).join('')
        : `<div class="card">
             <p style="font-size:14px;">⚪ <b>Não foi possível analisar a postura</b></p>
             <p class="lede" style="margin-top:6px;">Não conseguimos detetar o corpo inteiro nas fotografias. Repita a avaliação com o corpo todo visível, boa iluminação e o telemóvel na vertical.</p>
             ${state.postureError ? `<p class="muted" style="margin-top:8px;">Detalhe técnico: ${state.postureError}</p>` : ''}
           </div>`;

      return `
      <div class="screen">
        ${topBar('Postura e simetria', 'results')}
        <p class="muted center" style="margin-bottom:14px;">Pontos do corpo detetados nas suas fotografias. A análise é feita no seu telemóvel.</p>
        ${thumbs}
        <div class="stack">${cards}</div>
        <div style="height:16px"></div>
        <p class="muted" style="line-height:1.6;">Estimativa indicativa a partir das fotografias. Não vê a coluna vertebral e não constitui diagnóstico médico.</p>
        <div style="height:18px"></div>
        ${obs.length ? '' : `<button class="btn btn-secondary" onclick="nav('photoPrep')">Repetir fotografias</button><div style="height:10px"></div>`}
        <button class="btn btn-primary" onclick="nav('diagnosis')">Ver recomendações</button>
      </div>`;
    };

    /* 6) pequenas correções em ecrãs existentes (por substituição de texto) */
    const _screenResults = window.screenResults;
    window.screenResults = function(){
      const o = state.postureObservations;
      const label = (!o || !o.length) ? 'sem análise'
                  : (o.some(x => x.severity === 'attention') ? 'atenção' : 'sem desvios relevantes');
      return _screenResults.apply(this, arguments).replace('<span>Postura — atenção</span>', `<span>Postura — ${label}</span>`);
    };

    const _screenDashboard = window.screenDashboard;
    window.screenDashboard = function(){
      const est = computeBodyEstimates(state.profile);
      return _screenDashboard.apply(this, arguments)
        .replace('>36%</div><span class="lbl">Gordura estimada</span>', `>${fmtPt(est.body_fat_pct)}%</div><span class="lbl">Gordura estimada</span>`);
    };
  };

  if(document.readyState === 'complete') install();
  else window.addEventListener('load', install);
}

if(typeof module !== 'undefined' && module.exports) module.exports = api;
})();
