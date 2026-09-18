/* ============ ICONS ============ */
const ic = {
  logoMark: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 17 V13 L8 8 L12 12 L21 3" stroke="#c6ff3d" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="21" cy="3" r="2" fill="#c6ff3d"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z"/></svg>`,
  dumbbell: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8 V16 M18 8 V16 M2 10 V14 M22 10 V14 M6 12 H18"/></svg>`,
  plate: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3 V12 L18 15"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 V10 M12 20 V4 M20 20 V14"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20 C4 15.5 7.5 13 12 13 C16.5 13 20 15.5 20 20"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2 L14 9 L21 11 L14 13 L12 20 L10 13 L3 11 L10 9 Z" fill="#0a0b0c"/></svg>`,
  sparkGreen: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2 L14 9 L21 11 L14 13 L12 20 L10 13 L3 11 L10 9 Z" fill="#c6ff3d"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18 L9 12 L15 6"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6 L18 18 M18 6 L6 18"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="#0a0b0c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12 L9 17 L20 6"/></svg>`,
  checkThin: `<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12 L9 17 L20 6"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="#0a0b0c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8 H7 L9 5 H15 L17 8 H20 V19 H4 Z"/><circle cx="12" cy="13" r="3.5"/></svg>`,
  corner: `<svg viewBox="0 0 26 26" fill="none" stroke="#c6ff3d" stroke-width="2.5" stroke-linecap="round"><path d="M2 14 V4 H12"/></svg>`,
  bodyFront: `<svg viewBox="0 0 100 220" fill="none" stroke="#3a3d34" stroke-width="2"><ellipse cx="50" cy="20" rx="14" ry="16"/><path d="M50 36 V95 M50 44 L20 90 M50 44 L80 90 M50 95 L30 190 M50 95 L70 190" stroke-linecap="round"/><path d="M28 55 Q50 40 72 55 L68 100 Q50 108 32 100 Z"/></svg>`,
  bodySide: `<svg viewBox="0 0 100 220" fill="none" stroke="#3a3d34" stroke-width="2"><ellipse cx="52" cy="20" rx="13" ry="16"/><path d="M52 36 Q60 60 55 95 M55 95 L45 190 M55 95 L65 185" stroke-linecap="round"/><path d="M40 50 Q56 44 64 60 Q60 90 55 98 Q42 92 40 60 Z"/></svg>`,
  bodyBack: `<svg viewBox="0 0 100 220" fill="none" stroke="#3a3d34" stroke-width="2"><ellipse cx="50" cy="20" rx="14" ry="16"/><path d="M50 36 V95 M50 44 L22 88 M50 44 L78 88 M50 95 L30 190 M50 95 L70 190" stroke-linecap="round"/><path d="M27 54 Q50 42 73 54 L67 100 Q50 106 33 100 Z"/></svg>`,
  dot: `<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round"><path d="M4 12 L9 17 L20 6"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  meal: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7 V12 L15 14"/></svg>`,
};

/* ============ STATE ============ */
const state = {
  screen: 'welcome',
  profile: { name:'', age:'', sex:'Feminino', height:'', weight:'' },
  activity: null,
  experience: null,
  goals: [],
  location: null,
  equipment: [],
  photoIndex: 0,
  photosDone: [false,false,false,false],
  photoChecksReady: [false,false,false,false],
  photoTip: '',
  currentAssessmentId: null,
  photoUploading: false,
  mealPhotoPath: null,
  mealUploading: false,
  mealSaving: false,
  processingDone: false,
  workoutsCompleted: 14,
  consistency: 86,
  weightHistory: [64.6, 62.8],
  fatHistory: [36, 33],
  muscleHistory: [38.9, 39.2],
  exercisesDone: [false,false,false,false,false,false],
  chat: [],
  showExplain: false,
  explainMetric: null,
  showMealResult: false,
  showPortionEditor: false,
  user: null,          // utilizador Supabase autenticado (null = sem sessão)
  authEmail: '',
  authError: '',
  authLoading: false,
  mealItems: [
    { emoji:'🍚', name:'Arroz', qty:1, kcal:200, protein:5, carbs:45, fat:1, fiber:1 },
    { emoji:'🍗', name:'Frango', qty:1, kcal:250, protein:30, carbs:0, fat:12, fiber:0 },
    { emoji:'🥗', name:'Salada', qty:1, kcal:70, protein:2, carbs:8, fat:3, fiber:3 },
    { emoji:'🫘', name:'Feijão', qty:1, kcal:100, protein:5, carbs:12, fat:2, fiber:4 },
  ],
};

function mealTotals(){
  return state.mealItems.reduce((acc,i)=>{
    acc.kcal += i.kcal*i.qty; acc.protein += i.protein*i.qty; acc.carbs += i.carbs*i.qty;
    acc.fat += i.fat*i.qty; acc.fiber += i.fiber*i.qty;
    return acc;
  }, {kcal:0, protein:0, carbs:0, fat:0, fiber:0});
}

const photoSteps = [
  { title:'Foto 1 de 4', instruction:'Fique de frente para a câmera.', body: ic.bodyFront },
  { title:'Foto 2 de 4', instruction:'Vire-se para o lado direito.', body: ic.bodySide },
  { title:'Foto 3 de 4', instruction:'Vire-se para o lado esquerdo.', body: ic.bodySide },
  { title:'Foto 4 de 4', instruction:'Agora fique de costas para a câmera.', body: ic.bodyBack },
];

const goalOptions = [
  {k:'perder', emoji:'🔥', t:'Perder gordura', s:'Reduzir percentagem de gordura corporal'},
  {k:'ganhar', emoji:'💪', t:'Ganhar massa muscular', s:'Aumentar volume e força muscular'},
  {k:'recomp', emoji:'⚖️', t:'Recomposição corporal', s:'Perder gordura e ganhar músculo em simultâneo'},
  {k:'postura', emoji:'🧘', t:'Melhorar postura e mobilidade', s:'Corrigir desequilíbrios e ganhar amplitude'},
  {k:'condic', emoji:'🏃', t:'Melhorar condicionamento', s:'Aumentar resistência cardiovascular'},
  {k:'saude', emoji:'❤️', t:'Melhorar saúde e qualidade de vida', s:'Hábitos mais saudáveis no dia a dia'},
];

const equipOptions = ['Nenhum','Halteres','Elásticos','Banco','Barra','Outros'];

const exercises = [
  { name:'Agachamento', sets:'3 × 12', rest:'60s descanso', level:'Iniciante', muscles:'Pernas, glúteos', instr:'Pés à largura dos ombros, desça controlando o joelho alinhado com o pé.' },
  { name:'Flexão', sets:'3 × 10', rest:'60s descanso', level:'Intermédio', muscles:'Peito, tríceps, core', instr:'Mantenha o corpo alinhado do ombro ao calcanhar durante todo o movimento.' },
  { name:'Ponte de glúteos', sets:'3 × 15', rest:'45s descanso', level:'Iniciante', muscles:'Glúteos, isquiotibiais', instr:'Eleve a bacia contraindo os glúteos no topo do movimento.' },
  { name:'Remada com elástico', sets:'3 × 12', rest:'45s descanso', level:'Iniciante', muscles:'Costas, bíceps', instr:'Puxe o elástico em direção ao abdómen, cotovelos junto ao corpo.' },
  { name:'Prancha', sets:'3 × 30s', rest:'30s descanso', level:'Iniciante', muscles:'Core, lombar', instr:'Mantenha o corpo reto, sem deixar a bacia cair.' },
  { name:'Exercício complementar', sets:'3 × 12', rest:'45s descanso', level:'Intermédio', muscles:'Corpo inteiro', instr:'Movimento adaptado ao seu nível e equipamento disponível.' },
];

const aiResponses = {
  "O que devo treinar hoje?": "Hoje está previsto Full Body — 32 minutos, sem equipamento. É um ótimo dia para focar na técnica do agachamento, já que é a base do seu treino desta semana.",
  "Adapte meu treino para os equipamentos que tenho.": "Como selecionou treino sem equipamento, já ajustei os exercícios para usarem apenas o peso do corpo e elásticos. Se adquirir halteres, posso aumentar a intensidade progressivamente.",
  "Analise esta refeição.": "Claro — toque em '📸 Fotografar refeição' na secção de Nutrição e eu identifico os alimentos e estimo as calorias e macronutrientes por si.",
  "Quero ganhar massa muscular.": "Vou priorizar exercícios de força com progressão de carga e sugerir um ligeiro aumento calórico. Quer que ajuste o seu plano atual para este novo foco?",
  "Como posso melhorar minha consistência?": "Está em 86% de consistência — muito bom! Treinar sempre ao mesmo horário e preparar a roupa de treino no dia anterior costuma ajudar a manter o hábito.",
};

/* ============ NAV HELPERS ============ */
const mainScreens = ['dashboard','workoutToday','nutrition','progress','profile'];

function nav(screen){
  state.screen = screen;
  render();
  document.getElementById('viewport').scrollTop = 0;
}

function toggle(arr, val){
  const i = arr.indexOf(val);
  if(i>-1) arr.splice(i,1); else arr.push(val);
}

/* ============ RENDER PIECES ============ */
function logoRow(size){
  return `<div class="logo-row">
    <div class="logo-mark">${ic.logoMark}</div>
    <span class="wordmark">MY<b>FIT</b>FORM</span>
  </div>`;
}

function progressDots(step, total){
  let html = '<div class="progress-dots">';
  for(let i=0;i<total;i++) html += `<span class="${i<step?'done':''}"></span>`;
  return html + '</div>';
}

function topBar(title, backScreen){
  return `<div class="top-row">
    <div class="icon-btn" onclick="nav('${backScreen}')">${ic.back}</div>
    <span class="h3">${title||''}</span>
    <div style="width:38px"></div>
  </div>`;
}

function bottomNav(active){
  const items = [
    {k:'dashboard', icon:ic.home, label:'Início'},
    {k:'workoutToday', icon:ic.dumbbell, label:'Treino'},
    {k:'__ai__', icon:null, label:''},
    {k:'nutrition', icon:ic.plate, label:'Nutrição'},
    {k:'progress', icon:ic.chart, label:'Progresso'},
  ];
  let html = `<div class="bottom-nav">`;
  html += navItem('dashboard', ic.home, 'Início', active);
  html += navItem('workoutToday', ic.dumbbell, 'Treino', active);
  html += `<div style="flex:1"></div>`;
  html += navItem('nutrition', ic.plate, 'Nutrição', active);
  html += navItem('profile', ic.user, 'Perfil', active);
  html += `</div>`;
  html += `<div class="fab-ai" onclick="nav('aiAssistant')">${ic.sparkGreen}</div>`;
  return html;
}
function navItem(k, icon, label, active){
  return `<div class="nav-item ${active===k?'active':''}" onclick="nav('${k}')">${icon}<span>${label}</span></div>`;
}

/* ============ SCREENS ============ */

function screenWelcome(){
  return `
  <div class="screen no-pad-bottom" style="display:flex; flex-direction:column; min-height:100%; justify-content:space-between; padding-top:40px;">
    <div class="center" style="margin-top:10px;">
      <div class="logo-mark" style="margin:0 auto 18px auto; width:56px; height:56px; border-radius:16px;">
        <svg viewBox="0 0 24 24" fill="none" style="width:30px;height:30px;"><path d="M3 17 V13 L8 8 L12 12 L21 3" stroke="#c6ff3d" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="21" cy="3" r="2" fill="#c6ff3d"/></svg>
      </div>
      <div class="wordmark" style="font-size:26px;">MY<b>FIT</b>FORM</div>
    </div>

    <div class="silhouette-frame" style="height:280px; margin:24px 0; background:linear-gradient(180deg, #14150f 0%, #0c0d0a 100%); border:1px solid var(--border);">
      <svg viewBox="0 0 200 260" width="150" height="195" fill="none">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c6ff3d" stop-opacity=".9"/><stop offset="1" stop-color="#c6ff3d" stop-opacity=".15"/></linearGradient></defs>
        <ellipse cx="100" cy="34" rx="26" ry="30" stroke="url(#g1)" stroke-width="2"/>
        <path d="M100 64 V150 M100 78 L45 130 M100 78 L155 130 M100 150 L60 250 M100 150 L140 250" stroke="url(#g1)" stroke-width="2" stroke-linecap="round"/>
        <path d="M58 90 Q100 66 142 90 L134 160 Q100 174 66 160 Z" stroke="url(#g1)" stroke-width="2"/>
        <circle cx="45" cy="130" r="3" fill="#c6ff3d"/><circle cx="155" cy="130" r="3" fill="#c6ff3d"/><circle cx="60" cy="250" r="3" fill="#c6ff3d"/><circle cx="140" cy="250" r="3" fill="#c6ff3d"/>
      </svg>
    </div>

    <div class="center stack" style="margin-bottom:6px;">
      <h1 class="h1">Conheça o seu corpo.<br>Melhore a sua forma.</h1>
      <p class="lede" style="padding:0 10px; font-weight:700; color:var(--text);">Seu corpo. Sua alimentação. Seu treino.<br>Tudo em um só lugar.</p>
      <p class="lede" style="padding:0 4px;">A MyFitForm usa inteligência artificial para analisar os seus dados e fotografias, identificar padrões corporais, personalizar os seus treinos e ajudá-lo a acompanhar a sua evolução.</p>
    </div>

    <div class="stack" style="margin-top:22px;">
      <button class="btn btn-primary" onclick="state.authError=''; nav('signup')">Criar conta</button>
      <button class="btn btn-secondary" onclick="state.authError=''; nav('login')">Entrar</button>
    </div>
  </div>`;
}

function authErrorBox(){
  if(!state.authError) return '';
  return `<div class="card" style="background:rgba(255,90,90,.1); border-color:rgba(255,90,90,.3); margin-bottom:14px;">
    <p style="color:#ff8a8a; font-size:13.5px;">${state.authError}</p>
  </div>`;
}

function screenSignup(){
  return `
  <div class="screen">
    ${topBar('', 'welcome')}
    <h2 class="h2">Criar a sua conta</h2>
    <p class="lede" style="margin:8px 0 20px 0;">Precisamos apenas do seu email e de uma password.</p>
    ${authErrorBox()}
    <div class="field"><label>Email</label><input id="auth-email" type="email" placeholder="o.seu@email.com"></div>
    <div class="field"><label>Password</label><input id="auth-password" type="password" placeholder="Mínimo 6 caracteres"></div>
    <div style="height:8px"></div>
    <button class="btn btn-primary" ${state.authLoading?'disabled':''} onclick="handleSignUp()">${state.authLoading?'A criar conta…':'Criar conta'}</button>
    <div style="height:14px"></div>
    <p class="muted center">Já tem conta? <span class="link-btn" style="display:inline; color:var(--accent); text-decoration:none;" onclick="state.authError=''; nav('login')">Entrar</span></p>
  </div>`;
}

function screenLogin(){
  return `
  <div class="screen">
    ${topBar('', 'welcome')}
    <h2 class="h2">Entrar</h2>
    <p class="lede" style="margin:8px 0 20px 0;">Introduza os seus dados de acesso.</p>
    ${authErrorBox()}
    <div class="field"><label>Email</label><input id="auth-email" type="email" placeholder="o.seu@email.com"></div>
    <div class="field"><label>Password</label><input id="auth-password" type="password" placeholder="A sua password"></div>
    <div style="height:8px"></div>
    <button class="btn btn-primary" ${state.authLoading?'disabled':''} onclick="handleSignIn()">${state.authLoading?'A entrar…':'Entrar'}</button>
    <div style="height:14px"></div>
    <p class="muted center">Ainda não tem conta? <span class="link-btn" style="display:inline; color:var(--accent); text-decoration:none;" onclick="state.authError=''; nav('signup')">Criar conta</span></p>
  </div>`;
}

async function handleSignUp(){
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  if(!email || password.length < 6){
    state.authError = 'Introduza um email válido e uma password com pelo menos 6 caracteres.';
    render(); return;
  }
  state.authLoading = true; state.authError=''; render();
  const { data, error } = await authSignUp(email, password);
  state.authLoading = false;
  if(error){ state.authError = error.message; render(); return; }
  // A trigger on_auth_user_created já criou a linha em profiles.
  state.user = data.user;
  nav('profileForm');
}

async function handleSignIn(){
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  if(!email || !password){
    state.authError = 'Introduza o seu email e password.';
    render(); return;
  }
  state.authLoading = true; state.authError=''; render();
  const { data, error } = await authSignIn(email, password);
  state.authLoading = false;
  if(error){ state.authError = 'Email ou password incorretos.'; render(); return; }
  state.user = data.user;
  await loadProfileIntoState();
  nav(state.profile.name ? 'dashboard' : 'profileForm');
}

async function loadProfileIntoState(){
  if(!state.user) return;
  const { data } = await dataGetProfile(state.user.id);
  if(!data) return;
  state.profile.name = data.name || '';
  state.profile.age = data.age || '';
  state.profile.sex = data.sex || 'Feminino';
  state.profile.height = data.height_cm || '';
  state.profile.weight = data.weight_kg || '';
  state.activity = data.activity_level || null;
  state.experience = data.experience || null;
  if(data.goals) state.goals = data.goals.map(g=>g.goal_key);
  if(data.training_setup){
    state.location = data.training_setup.location || null;
    state.equipment = data.training_setup.equipment || [];
  }
}

function screenProfileForm(){
  return `
  <div class="screen">
    ${topBar('', 'welcome')}
    ${progressDots(1,6)}
    <h2 class="h2">Vamos criar o seu perfil.</h2>
    <p class="lede" style="margin-top:6px; margin-bottom:22px;">Estes dados ajudam-nos a personalizar toda a sua experiência.</p>

    <div class="field"><label>Nome</label><input id="p-name" type="text" placeholder="O seu nome" value="${state.profile.name}"></div>
    <div class="field-row">
      <div class="field"><label>Idade</label><input id="p-age" type="number" placeholder="28" value="${state.profile.age}"></div>
      <div class="field"><label>Sexo</label>
        <select id="p-sex">
          <option ${state.profile.sex==='Feminino'?'selected':''}>Feminino</option>
          <option ${state.profile.sex==='Masculino'?'selected':''}>Masculino</option>
          <option ${state.profile.sex==='Prefiro não dizer'?'selected':''}>Prefiro não dizer</option>
        </select>
      </div>
    </div>
    <div class="field-row">
      <div class="field"><label>Altura (cm)</label><input id="p-height" type="number" placeholder="170" value="${state.profile.height}"></div>
      <div class="field"><label>Peso (kg)</label><input id="p-weight" type="number" placeholder="64.6" value="${state.profile.weight}"></div>
    </div>

    <div class="divider"></div>
    <label>Nível de atividade</label>
    <div class="stack" style="margin-bottom:18px;">
      ${['Sedentário','Pouco ativo','Moderadamente ativo','Muito ativo'].map(a=>`
        <div class="option-card ${state.activity===a?'selected':''}" onclick="state.activity='${a}'; render();">
          <div class="option-text"><b>${a}</b></div>
          <div class="check-dot">${ic.dot}</div>
        </div>`).join('')}
    </div>

    <label>Experiência de treino</label>
    <div class="stack" style="margin-bottom:8px;">
      ${['Iniciante','Intermediário','Avançado'].map(a=>`
        <div class="option-card ${state.experience===a?'selected':''}" onclick="state.experience='${a}'; render();">
          <div class="option-text"><b>${a}</b></div>
          <div class="check-dot">${ic.dot}</div>
        </div>`).join('')}
    </div>

    <div style="height:20px"></div>
    <button class="btn btn-primary" onclick="saveProfile()">Continuar</button>
  </div>`;
}

async function saveProfile(){
  state.profile.name = document.getElementById('p-name').value || 'Ricardo';
  state.profile.age = document.getElementById('p-age').value || '28';
  state.profile.sex = document.getElementById('p-sex').value;
  state.profile.height = document.getElementById('p-height').value || '178';
  state.profile.weight = document.getElementById('p-weight').value || '64.6';
  if(state.user){
    await dataSaveProfile(state.user.id, {
      name: state.profile.name,
      age: Number(state.profile.age) || null,
      sex: state.profile.sex,
      height_cm: Number(state.profile.height) || null,
      weight_kg: Number(state.profile.weight) || null,
      activity_level: state.activity,
      experience: state.experience,
    });
  }
  nav('goals');
}

async function saveGoalsAndContinue(){
  if(state.user) await dataSaveGoals(state.user.id, state.goals);
  nav('location');
}

async function saveEquipmentAndContinue(){
  if(state.user){
    await dataSaveTrainingSetup(state.user.id, state.location, state.equipment);
    await dataMarkOnboardingComplete(state.user.id);
  }
  nav('assessmentIntro');
}

function screenGoals(){
  return `
  <div class="screen">
    ${topBar('', 'profileForm')}
    ${progressDots(2,6)}
    <h2 class="h2">O que você quer alcançar?</h2>
    <p class="lede" style="margin:6px 0 20px 0;">Pode selecionar um ou mais objetivos.</p>
    <div class="stack">
      ${goalOptions.map(g=>`
        <div class="option-card ${state.goals.includes(g.k)?'selected':''}" onclick="toggle(state.goals,'${g.k}'); render();">
          <div class="option-emoji">${g.emoji}</div>
          <div class="option-text"><b>${g.t}</b><span>${g.s}</span></div>
          <div class="check-dot">${ic.dot}</div>
        </div>`).join('')}
    </div>
    <div style="height:20px"></div>
    <button class="btn btn-primary" ${state.goals.length? '' : 'disabled'} onclick="saveGoalsAndContinue()">Continuar</button>
  </div>`;
}

function screenLocation(){
  const opts = [{k:'casa',e:'🏠',t:'Em casa'},{k:'ginasio',e:'🏋️',t:'Ginásio'},{k:'exterior',e:'🌳',t:'Ao ar livre'}];
  return `
  <div class="screen">
    ${topBar('', 'goals')}
    ${progressDots(3,6)}
    <h2 class="h2">Onde você vai treinar?</h2>
    <p class="lede" style="margin:6px 0 20px 0;">Vamos adaptar os exercícios ao seu espaço.</p>
    <div class="stack">
      ${opts.map(o=>`
        <div class="option-card ${state.location===o.k?'selected':''}" onclick="state.location='${o.k}'; render();">
          <div class="option-emoji">${o.e}</div>
          <div class="option-text"><b>${o.t}</b></div>
          <div class="check-dot">${ic.dot}</div>
        </div>`).join('')}
    </div>
    <div style="height:20px"></div>
    <button class="btn btn-primary" ${state.location? '' : 'disabled'} onclick="nav('equipment')">Continuar</button>
  </div>`;
}

function screenEquipment(){
  return `
  <div class="screen">
    ${topBar('', 'location')}
    ${progressDots(4,6)}
    <h2 class="h2">Que equipamentos você possui?</h2>
    <p class="lede" style="margin:6px 0 20px 0;">Selecione tudo o que tem disponível.</p>
    <div class="stack">
      ${equipOptions.map(e=>`
        <div class="option-card ${state.equipment.includes(e)?'selected':''}" onclick="toggle(state.equipment,'${e}'); render();">
          <div class="option-text"><b>${e}</b></div>
          <div class="check-dot">${ic.dot}</div>
        </div>`).join('')}
    </div>
    <div style="height:20px"></div>
    <button class="btn btn-primary" ${state.equipment.length? '' : 'disabled'} onclick="saveEquipmentAndContinue()">Continuar</button>
  </div>`;
}

function screenAssessmentIntro(){
  const items = ['Composição corporal estimada','Postura','Possíveis assimetrias','Indicadores corporais','Recomendações personalizadas'];
  return `
  <div class="screen">
    ${topBar('', 'equipment')}
    ${progressDots(5,6)}
    <span class="eyebrow">AVALIAÇÃO CORPORAL</span>
    <h2 class="h2" style="margin-top:8px;">Conheça o seu corpo antes de começar o seu plano.</h2>
    <p class="lede" style="margin:10px 0 22px 0;">A MyFitForm utiliza as suas informações e fotografias corporais para gerar uma análise visual e estimativas de alguns indicadores corporais.</p>
    <div class="card">
      ${items.map(i=>`<div class="checklist-item done"><div class="tick">${ic.checkThin}</div><span>${i}</span></div>`).join('')}
    </div>
    <div class="card" style="margin-top:14px; background:var(--card-2);">
      <p class="muted" style="line-height:1.6;">Os resultados de composição corporal são estimativas e não substituem uma avaliação clínica, BIA ou outro método de medição profissional.</p>
    </div>
    <div style="height:20px"></div>
    <button class="btn btn-primary" onclick="nav('photoPrep')">Começar avaliação</button>
  </div>`;
}

function screenPhotoPrep(){
  const rules = ['Fique em pé','Mantenha uma postura natural','Fique descalço','Use roupas que permitam visualizar o contorno corporal','Procure boa iluminação','Deixe o corpo inteiro visível','Mantenha distância adequada da câmera'];
  return `
  <div class="screen">
    ${topBar('Preparação', 'assessmentIntro')}
    <div class="silhouette-frame" style="height:190px; margin-bottom:20px;">
      <svg viewBox="0 0 100 220" width="90" height="180">${ic.bodyFront}</svg>
    </div>
    <h2 class="h2">Antes de começar</h2>
    <div class="stack" style="margin:14px 0 18px 0;">
      ${rules.map(r=>`<div style="display:flex; gap:10px; align-items:flex-start;"><span style="color:var(--accent); font-size:14px;">—</span><span style="font-size:14px; color:var(--text-2); line-height:1.5;">${r}</span></div>`).join('')}
    </div>
    <div class="card">
      <div class="checklist-item done"><div class="tick">${ic.checkThin}</div><span>Boa iluminação</span></div>
      <div class="checklist-item done"><div class="tick">${ic.checkThin}</div><span>Corpo inteiro visível</span></div>
      <div class="checklist-item done"><div class="tick">${ic.checkThin}</div><span>Posição correta</span></div>
    </div>
    <div style="height:20px"></div>
    <button class="btn btn-primary" onclick="startAssessment()">Estou pronto</button>
  </div>`;
}

async function startAssessment(){
  state.photoIndex=0; state.photosDone=[false,false,false,false]; state.photoChecksReady=[false,false,false,false]; state.processingDone=false;
  if(state.user){
    const { data, error } = await dataCreateAssessment(state.user.id);
    if(!error && data) state.currentAssessmentId = data.id;
  }
  nav('photoCapture');
}

const photoAngles = ['front','right','left','back'];

const photoChecks = ['Corpo inteiro visível','Boa iluminação','Distância adequada','Posição correta'];
const photoTips = ['A procurar o seu corpo…','Melhore a iluminação.','Afaste um pouco o telefone.','Boa posição.'];

function screenPhotoCapture(){
  const i = state.photoIndex;
  const step = photoSteps[i];
  const done = state.photosDone[i];
  const ready = state.photoChecksReady[i];
  return `
  <div class="screen">
    ${topBar(step.title, i===0?'photoPrep':'photoCapture')}
    <p class="lede center" style="margin-bottom:18px;">${step.instruction}</p>
    <div class="silhouette-frame ${done?'captured':''}">
      <div class="corner tl">${ic.corner}</div><div class="corner tr">${ic.corner}</div>
      <div class="corner bl">${ic.corner}</div><div class="corner br">${ic.corner}</div>
      <svg viewBox="0 0 100 220" width="120" height="240">${step.body}</svg>
    </div>
    <div style="height:16px"></div>
    ${!done ? `
      <div class="card" id="check-card" style="margin-bottom:16px;">
        ${photoChecks.map((c,idx)=>`<div class="checklist-item ${ready?'done':'pending'}" id="pcheck-${idx}"><div class="tick">${ic.checkThin}</div><span>${c}</span></div>`).join('')}
      </div>
      <p class="lede center" id="photo-tip" style="margin-bottom:14px; color:var(--accent); font-weight:600;">${ready?'Boa posição.':'A verificar o enquadramento…'}</p>
    ` : ''}
    ${done ? `
      <div class="chip accent" style="width:100%; justify-content:center; padding:12px; gap:6px; box-sizing:border-box;">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#c6ff3d" stroke-width="3"><path d="M4 12 L9 17 L20 6"/></svg>
        Fotografia aprovada
      </div>
      <div style="height:14px"></div>
      <button class="btn btn-primary" ${state.photoUploading?'disabled':''} onclick="nextPhoto()">${state.photoUploading?'A guardar…':(i<3?'Próxima':'Analisar meu corpo')}</button>
    ` : `
      <input type="file" accept="image/*" capture="environment" id="camera-input" style="display:none" onchange="handlePhotoCapture(event)">
      <button class="btn btn-primary" ${ready?'':'disabled'} onclick="document.getElementById('camera-input').click()">${ic.camera} ${ready?'Tirar fotografia':'A verificar…'}</button>
    `}
  </div>`;
}
function startPhotoCheck(){
  const i = state.photoIndex;
  if(state.photoChecksReady[i] || state.photosDone[i]) return;
  const items = document.querySelectorAll('#check-card .checklist-item');
  let idx = 0;
  const interval = setInterval(()=>{
    if(idx >= items.length){
      clearInterval(interval);
      state.photoChecksReady[i] = true;
      render();
      return;
    }
    const el = items[idx];
    if(el){ el.classList.remove('pending'); el.classList.add('done'); el.querySelector('.tick').innerHTML = ic.checkThin; }
    const tip = document.getElementById('photo-tip');
    if(tip) tip.textContent = photoTips[idx];
    idx++;
  }, 420);
}
async function handlePhotoCapture(event){
  const file = event.target.files && event.target.files[0];
  if(!file) return;
  const i = state.photoIndex;
  const angle = photoAngles[i];
  if(state.user && state.currentAssessmentId){
    state.photoUploading = true; render();
    const { path, error } = await dataUploadBodyPhoto(state.user.id, state.currentAssessmentId, angle, file);
    if(!error) await dataSaveAssessmentPhoto(state.currentAssessmentId, angle, path);
    state.photoUploading = false;
  }
  state.photosDone[i] = true;
  render();
}
function nextPhoto(){
  if(state.photoIndex < 3){ state.photoIndex++; render(); document.getElementById('viewport').scrollTop=0; }
  else { finishAssessmentPhotos(); }
}
async function finishAssessmentPhotos(){
  if(state.user && state.currentAssessmentId){
    // Estimativa do MVP — calculada por fórmula a partir do perfil, nunca uma medição BIA real.
    const est = computeBodyEstimates(state.profile);
    await dataSaveAssessmentEstimates(state.currentAssessmentId, {
      ...est,
      estimate_source: 'mvp_estimate',
      is_estimate: true,
    });
    await dataSavePostureObservations(state.currentAssessmentId, [
      { label:'Possível assimetria dos ombros', severity:'attention', description:'O ombro direito aparenta estar ligeiramente mais baixo que o esquerdo.' },
      { label:'Possível inclinação do tronco', severity:'attention', description:'Foi observado um possível padrão de inclinação lateral.' },
      { label:'Alinhamento das pernas', severity:'info', description:'Nenhuma assimetria visual relevante identificada.' },
    ]);
  }
  nav('processing'); startProcessing();
}

function screenProcessing(){
  const steps = ['Identificando contorno corporal','Analisando proporções','Estimando composição corporal','Analisando postura','Verificando possíveis assimetrias','Preparando o seu plano personalizado'];
  return `
  <div class="screen no-pad-bottom" style="display:flex; flex-direction:column; justify-content:center; min-height:100%;">
    <div class="center" style="margin-bottom:26px;">
      <div class="logo-mark" style="margin:0 auto 16px auto; width:64px; height:64px; border-radius:20px;" id="proc-spinner">
        <svg viewBox="0 0 24 24" fill="none" style="width:32px;height:32px;"><path d="M3 17 V13 L8 8 L12 12 L21 3" stroke="#c6ff3d" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="21" cy="3" r="2" fill="#c6ff3d"/></svg>
      </div>
      <h2 class="h2" id="proc-title">${state.processingDone?'Análise concluída.':'Analisando o seu corpo...'}</h2>
    </div>
    <div class="card" id="proc-list">
      ${steps.map((s,idx)=>`<div class="checklist-item pending" id="proc-item-${idx}"><div class="tick">${ic.checkThin}</div><span>${s}</span></div>`).join('')}
    </div>
    <div style="height:22px"></div>
    <button class="btn btn-primary" id="proc-btn" style="${state.processingDone?'':'opacity:.35; pointer-events:none;'}" onclick="nav('results')">Ver minha avaliação</button>
  </div>`;
}
function startProcessing(){
  if(state.processingDone) return;
  const items = document.querySelectorAll('#proc-list .checklist-item');
  let idx = 0;
  const interval = setInterval(()=>{
    if(idx >= items.length){
      clearInterval(interval);
      state.processingDone = true;
      const btn = document.getElementById('proc-btn');
      const title = document.getElementById('proc-title');
      if(btn){ btn.style.opacity=1; btn.style.pointerEvents='auto'; }
      if(title) title.textContent = 'Análise concluída.';
      return;
    }
    const el = items[idx];
    if(el){ el.classList.remove('pending'); el.classList.add('done'); el.querySelector('.tick').innerHTML = ic.checkThin; }
    idx++;
  }, 550);
}

/* ============ CÁLCULO DE ESTIMATIVAS (fórmulas de referência — não usa IA nem fotografias) ============ */
function sexFactor(sex){
  if(sex === 'Masculino') return 1;
  if(sex === 'Feminino') return 0;
  return 0.5;
}
function fmtPt(num){
  return String(num).replace('.', ',');
}
function fmtKcal(num){
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
function computeBodyEstimates(profile){
  const weight = Number(profile.weight) || 64.6;
  const heightCm = Number(profile.height) || 170;
  const age = Number(profile.age) || 30;
  const heightM = heightCm / 100;
  const sexVal = sexFactor(profile.sex);

  const imc = weight / (heightM * heightM);

  const bmrMale = 10*weight + 6.25*heightCm - 5*age + 5;
  const bmrFemale = 10*weight + 6.25*heightCm - 5*age - 161;
  const bmr = sexVal===1 ? bmrMale : sexVal===0 ? bmrFemale : (bmrMale+bmrFemale)/2;

  // Fórmula de Deurenberg (estimativa geral a partir do IMC, idade e sexo)
  let bodyFat = 1.20*imc + 0.23*age - 10.8*sexVal - 5.4;
  bodyFat = Math.min(50, Math.max(5, bodyFat));

  const leanMass = weight * (1 - bodyFat/100);
  const muscleMass = leanMass * 0.5;
  const skeletalMusclePct = (muscleMass/weight) * 100;

  let visceral;
  if(imc < 18.5) visceral = 4;
  else if(imc < 25) visceral = 7;
  else if(imc < 30) visceral = 10;
  else if(imc < 35) visceral = 13;
  else visceral = 16;

  // Fórmula de Watson (água corporal total estimada)
  const tbwMale = 2.447 - 0.09156*age + 0.1074*heightCm + 0.3362*weight;
  const tbwFemale = -2.097 + 0.1069*heightCm + 0.2466*weight;
  const tbw = sexVal===1 ? tbwMale : sexVal===0 ? tbwFemale : (tbwMale+tbwFemale)/2;
  let bodyWaterPct = (tbw/weight) * 100;
  bodyWaterPct = Math.min(65, Math.max(35, bodyWaterPct));

  return {
    weight_kg: Math.round(weight*10)/10,
    imc: Math.round(imc*10)/10,
    body_fat_pct: Math.round(bodyFat*10)/10,
    muscle_mass_kg: Math.round(muscleMass*10)/10,
    skeletal_muscle_pct: Math.round(skeletalMusclePct*10)/10,
    bmr_kcal: Math.round(bmr),
    visceral_fat: visceral,
    body_water_pct: Math.round(bodyWaterPct*10)/10,
  };
}
function fatStatus(bf, sexVal){
  let lowT, highT;
  if(sexVal===1){ lowT=10; highT=20; }
  else if(sexVal===0){ lowT=18; highT=28; }
  else { lowT=14; highT=24; }
  if(bf < lowT) return 'baixa';
  if(bf <= highT) return 'saudável';
  return 'atenção';
}
function muscleStatus(pct){
  if(pct < 30) return 'desenvolver';
  if(pct < 38) return 'manter';
  return 'boa base';
}
function condStatus(activity){
  if(activity==='Sedentário' || activity==='Pouco ativo') return 'melhorar';
  if(activity==='Moderadamente ativo') return 'manter';
  if(activity==='Muito ativo') return 'bom';
  return 'melhorar';
}

const metricExplanations = {
  'Peso': 'Valor introduzido por si no seu perfil, usado como base para os cálculos seguintes.',
  'IMC': 'Calculado a partir do seu peso e altura (fórmula padrão). É um indicador geral e não considera diretamente a sua composição corporal.',
  'Gordura corporal estimada': 'Estimativa calculada a partir do seu IMC, idade e sexo (fórmula de referência). Não corresponde a uma medição direta por BIA nem a uma análise das suas fotografias.',
  'Massa muscular estimada': 'Estimativa calculada a partir do seu peso e da gordura corporal estimada. Não é uma medição laboratorial nem por BIA.',
  'Músculo esquelético estimado': 'Estimativa derivada do cálculo de massa muscular. Valores reais podem variar com o método de medição usado.',
  'Metabolismo basal estimado': 'Calculado a partir do seu perfil (idade, sexo, peso e altura) através de uma fórmula de referência, não de uma medição direta do seu metabolismo.',
  'Gordura visceral estimada': 'Indicador aproximado baseado no seu IMC. Não substitui exames clínicos nem uma medição por BIA.',
  'Água corporal estimada': 'Estimativa calculada a partir do seu perfil através de uma fórmula de referência. Não corresponde a uma medição direta por bioimpedância (BIA).',
};

function screenResults(){
  const est = computeBodyEstimates(state.profile);
  const stats = [
    {v:`${fmtPt(est.weight_kg)} kg`, l:'Peso'},
    {v:fmtPt(est.imc), l:'IMC'},
    {v:`${fmtPt(est.body_fat_pct)}%`, l:'Gordura corporal estimada'},
    {v:`${fmtPt(est.muscle_mass_kg)} kg`, l:'Massa muscular estimada'},
    {v:`${fmtPt(est.skeletal_muscle_pct)}%`, l:'Músculo esquelético estimado'},
    {v:`${fmtKcal(est.bmr_kcal)} kcal`, l:'Metabolismo basal estimado'},
    {v:`${est.visceral_fat}`, l:'Gordura visceral estimada'},
    {v:`${fmtPt(est.body_water_pct)}%`, l:'Água corporal estimada'},
  ];
  const sexVal = sexFactor(state.profile.sex);
  return `
  <div class="screen">
    ${topBar('Sua avaliação corporal', 'assessmentIntro')}
    <div class="card" style="background:var(--card-2); margin-bottom:16px;">
      <p class="muted" style="line-height:1.6;">Estimativa do MVP — calculada a partir do seu perfil através de fórmulas de referência, sem uso de IA de visão computacional nesta fase.</p>
    </div>
    <div class="stat-grid">
      ${stats.map(s=>`
        <div class="stat-card card-tap" onclick="openExplain('${s.l}')">
          <span class="lbl">${s.l}</span>
          <div class="val">${s.v}</div>
          <div class="ai-tag">${ic.sparkGreen} ESTIMATIVA DO MVP</div>
        </div>`).join('')}
    </div>
    <div style="height:8px"></div>
    <p class="muted center" style="margin-bottom:18px;">Toque num cartão para ver como calculámos o valor.</p>

    <div class="eyebrow">VISÃO GERAL</div>
    <h3 class="h3" style="margin:8px 0 12px 0;">Perfil atual</h3>
    <div class="card">
      <div class="checklist-item done"><div class="tick" style="background:transparent;">🔥</div><span>Gordura corporal — ${fatStatus(est.body_fat_pct, sexVal)}</span></div>
      <div class="checklist-item done"><div class="tick" style="background:transparent;">💪</div><span>Massa muscular — ${muscleStatus(est.skeletal_muscle_pct)}</span></div>
      <div class="checklist-item done"><div class="tick" style="background:transparent;">🧍</div><span>Postura — atenção</span></div>
      <div class="checklist-item done"><div class="tick" style="background:transparent;">⚡</div><span>Condicionamento — ${condStatus(state.activity)}</span></div>
    </div>
    <p class="muted" style="margin-top:10px; line-height:1.6;">Esta visão geral não é um diagnóstico médico nem um score de saúde validado cientificamente.</p>

    <div style="height:18px"></div>
    <button class="btn btn-primary" onclick="nav('posture')">Ver recomendações</button>
  </div>
  ${state.showExplain ? explainModal() : ''}`;
}
function openExplain(label){ state.explainMetric = label; state.showExplain = true; render(); }
function explainModal(){
  const label = state.explainMetric || 'Como calculamos isto?';
  const text = metricExplanations[state.explainMetric] || 'Este valor é uma estimativa calculada a partir do seu perfil. Não corresponde a uma medição direta por BIA.';
  return `
  <div class="modal-backdrop" onclick="if(event.target===this){state.showExplain=false; render();}">
    <div class="modal-sheet">
      <div class="sheet-handle"></div>
      <div class="ai-tag" style="margin-bottom:8px;">${ic.sparkGreen} ESTIMATIVA DO MVP</div>
      <h3 class="h3" style="margin-bottom:10px;">${label}</h3>
      <p class="lede" style="line-height:1.6;">${text}</p>
      <div style="height:18px"></div>
      <button class="btn btn-primary" onclick="state.showExplain=false; render();">Entendi</button>
    </div>
  </div>`;
}

function screenPosture(){
  return `
  <div class="screen">
    ${topBar('Postura e simetria', 'results')}
    <div class="silhouette-frame" style="height:230px; margin-bottom:16px; background:linear-gradient(180deg,#141510,#0e0f0c);">
      <svg viewBox="0 0 100 220" width="110" height="215">${ic.bodyFront}</svg>
    </div>
    <p class="muted center" style="margin-bottom:16px;">Observações baseadas em análise visual.</p>
    <div class="stack">
      <div class="card">
        <p style="font-size:14px;">🟡 <b>Possível assimetria dos ombros</b></p>
        <p class="lede" style="margin-top:6px;">O ombro direito aparenta estar ligeiramente mais baixo que o esquerdo.</p>
      </div>
      <div class="card">
        <p style="font-size:14px;">🟡 <b>Possível inclinação do tronco</b></p>
        <p class="lede" style="margin-top:6px;">Foi observado um possível desvio lateral na postura.</p>
      </div>
      <div class="card">
        <p style="font-size:14px;">🟢 <b>Alinhamento das pernas</b></p>
        <p class="lede" style="margin-top:6px;">Nenhuma assimetria visual relevante identificada.</p>
      </div>
    </div>
    <div style="height:16px"></div>
    <p class="muted" style="line-height:1.6;">Esta análise identifica padrões visuais e não constitui diagnóstico médico.</p>
    <div style="height:18px"></div>
    <button class="btn btn-primary" onclick="nav('diagnosis')">Ver recomendações</button>
  </div>`;
}

function computeDiagnosisPriorities(){
  const priorities = [];
  if(state.goals.includes('perder') || state.goals.includes('recomp')) priorities.push({emoji:'🔥', text:'Redução de gordura'});
  if(state.goals.includes('ganhar') || state.goals.includes('recomp')) priorities.push({emoji:'💪', text:'Desenvolvimento muscular'});
  if(state.goals.includes('postura')) priorities.push({emoji:'🧍', text:'Melhoria do alinhamento corporal'});
  if(state.goals.includes('condic')) priorities.push({emoji:'🏃', text:'Melhoria do condicionamento físico'});
  if(state.goals.includes('saude') || !priorities.length) priorities.push({emoji:'❤️', text:'Hábitos mais saudáveis no dia a dia'});
  return priorities;
}

function screenDiagnosis(){
  const priorities = computeDiagnosisPriorities();
  return `
  <div class="screen">
    ${topBar('Diagnóstico', 'posture')}
    <h2 class="h2">O que o seu corpo precisa?</h2>
    <p class="lede" style="margin:14px 0 16px 0; line-height:1.6;">Com base nos seus objetivos e na avaliação realizada, recomendamos priorizar:</p>
    <div class="stack">
      ${priorities.map(p=>`<div class="card" style="display:flex; align-items:center; gap:14px;"><span style="font-size:22px;">${p.emoji}</span><b>${p.text}</b></div>`).join('')}
    </div>
    <p class="lede" style="margin:18px 0 4px 0; line-height:1.6;">O seu plano será adaptado ao seu objetivo, nível de experiência e equipamentos disponíveis.</p>
    <div style="height:16px"></div>
    <button class="btn btn-primary" onclick="nav('plan')">Criar meu plano</button>
  </div>`;
}

function goalsSummaryLabel(){
  const shortLabel = { perder:'Perder gordura', ganhar:'Ganhar massa muscular', recomp:'Recomposição corporal', postura:'Melhorar postura', condic:'Melhorar condicionamento', saude:'Saúde e bem-estar' };
  if(!state.goals.length) return 'Melhorar a forma física';
  return state.goals.slice(0,2).map(k=>shortLabel[k]).join(' + ');
}

function screenPlan(){
  return `
  <div class="screen">
    ${topBar('Seu plano', 'diagnosis')}
    <div class="eyebrow">MYFITFORM · PLANO PERSONALIZADO</div>
    <h2 class="h2" style="margin-top:8px;">${goalsSummaryLabel()}</h2>
    <p class="lede" style="margin-top:6px; color:var(--accent); font-weight:600;">Personalizado para você.</p>
    <div class="stat-grid" style="margin-top:14px;">
      <div class="stat-card"><span class="lbl">Frequência</span><div class="val" style="font-size:18px;">4x / semana</div></div>
      <div class="stat-card"><span class="lbl">Duração</span><div class="val" style="font-size:18px;">30–40 min</div></div>
      <div class="stat-card"><span class="lbl">Local</span><div class="val" style="font-size:18px;">${state.location==='ginasio'?'Ginásio':state.location==='exterior'?'Ao ar livre':'Casa'}</div></div>
      <div class="stat-card"><span class="lbl">Equipamento</span><div class="val" style="font-size:15px;">${state.equipment.includes('Nenhum')||!state.equipment.length ? 'Sem equipamento':state.equipment.join(', ')}</div></div>
    </div>
    <div class="divider"></div>
    <label>Calendário semanal</label>
    <div class="stack">
      ${[['SEG','Full Body'],['TER','Cardio + Core'],['QUI','Full Body'],['SÁB','Força + Condicionamento']].map(d=>`
        <div class="card" style="display:flex; align-items:center; justify-content:space-between;">
          <span class="chip">${d[0]}</span><b style="font-size:14px;">${d[1]}</b>
        </div>`).join('')}
    </div>
    <div style="height:20px"></div>
    <button class="btn btn-primary" onclick="nav('workoutToday')">Ver treino</button>
  </div>`;
}

function screenWorkoutToday(){
  const activeScreen = 'workoutToday';
  return `
  <div class="screen">
    <div class="top-row"><span class="eyebrow">TREINO DE HOJE</span><div class="icon-btn" onclick="nav('plan')">${ic.gear}</div></div>
    <h2 class="h2">Full Body</h2>
    <p class="lede" style="margin:6px 0 20px 0;">32 minutos · ${state.equipment.length && !state.equipment.includes('Nenhum') ? state.equipment.join(', ') : 'sem equipamento'}</p>
    <div class="stack">
      ${exercises.map((e,idx)=>`
        <div class="exercise-row" onclick="openExercise(${idx})">
          <div class="exercise-thumb">${ic.dumbbell}</div>
          <div class="exercise-meta"><b>${e.name}</b><span>${e.sets} · ${e.rest}</span></div>
          <div class="exercise-check ${state.exercisesDone[idx]?'done':''}" onclick="event.stopPropagation(); toggleExercise(${idx});">${ic.checkThin}</div>
        </div>`).join('')}
    </div>
    <div style="height:20px"></div>
    <button class="btn btn-primary" onclick="finishWorkout()">Começar treino</button>
  </div>`;
}
function toggleExercise(i){ state.exercisesDone[i] = !state.exercisesDone[i]; render(); }
function openExercise(i){
  state.exerciseModal = i;
  render();
}
function finishWorkout(){
  state.workoutsCompleted += 1;
  state.exercisesDone = state.exercisesDone.map(()=>true);
  render();
}

function exerciseModal(){
  if(state.exerciseModal===undefined || state.exerciseModal===null) return '';
  const e = exercises[state.exerciseModal];
  return `
  <div class="modal-backdrop" onclick="if(event.target===this){state.exerciseModal=null; render();}">
    <div class="modal-sheet">
      <div class="sheet-handle"></div>
      <div class="silhouette-frame" style="height:150px; margin-bottom:16px;"><div class="exercise-thumb" style="width:70px;height:70px;">${ic.dumbbell}</div></div>
      <h3 class="h3">${e.name}</h3>
      <div style="display:flex; gap:8px; margin:12px 0;">
        <span class="chip">${e.sets}</span><span class="chip">${e.rest}</span><span class="chip">${e.level}</span>
      </div>
      <p class="muted" style="margin-bottom:4px;">MÚSCULOS TRABALHADOS</p>
      <p class="lede" style="margin-bottom:14px;">${e.muscles}</p>
      <p class="muted" style="margin-bottom:4px;">INSTRUÇÕES</p>
      <p class="lede" style="margin-bottom:18px;">${e.instr}</p>
      <button class="btn btn-primary" onclick="state.exerciseModal=null; render();">Fechar</button>
    </div>
  </div>`;
}

function screenNutrition(){
  if(state.showMealResult) return screenMealResult();
  return `
  <div class="screen">
    <div class="eyebrow">NUTRIÇÃO</div>
    <h2 class="h2" style="margin-top:8px;">Fotografe a sua refeição.</h2>
    <p class="lede" style="margin:10px 0 20px 0;">A IA identifica os alimentos e estima calorias e nutrientes.</p>
    <div class="silhouette-frame" style="height:220px; margin-bottom:20px;">
      <div style="text-align:center; color:var(--text-3);">
        <div style="font-size:36px; margin-bottom:8px;">🍽️</div>
        <span style="font-size:13px;">Pré-visualização da câmara</span>
      </div>
    </div>
    <input type="file" accept="image/*" capture="environment" id="meal-camera-input" style="display:none" onchange="handleMealCapture(event)">
    <button class="btn btn-primary" ${state.mealUploading?'disabled':''} onclick="document.getElementById('meal-camera-input').click()">${ic.camera} ${state.mealUploading?'A carregar foto…':'Fotografar refeição'}</button>
    <div class="divider"></div>
    <label>Refeições recentes</label>
    <div class="card" style="display:flex; align-items:center; gap:14px; margin-top:10px;">
      <div class="exercise-thumb">🍚</div>
      <div class="exercise-meta"><b>Arroz, frango e salada</b><span>Hoje, 13:20 · 620 kcal</span></div>
    </div>
  </div>`;
}
function screenMealResult(){
  const t = mealTotals();
  return `
  <div class="screen">
    ${topBar('Refeição analisada', 'nutrition')}
    <div class="silhouette-frame" style="height:180px; margin-bottom:18px; background:linear-gradient(180deg,#181a12,#0f100c);">
      <span style="font-size:52px;">🍽️</span>
    </div>
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px;">
      ${state.mealItems.filter(i=>i.qty>0).map(i=>`<span class="chip">${i.emoji} ${i.name}</span>`).join('')}
    </div>
    <div class="card center" style="margin-bottom:14px;">
      <span class="lbl" style="color:var(--text-2); font-size:12.5px;">TOTAL ESTIMADO</span>
      <div class="val" style="font-size:32px;">${Math.round(t.kcal)} kcal</div>
      <div class="ai-tag" style="justify-content:center;">${ic.sparkGreen} VALORES NUTRICIONAIS ESTIMADOS</div>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><span class="lbl">Proteína</span><div class="val">${Math.round(t.protein)} g</div></div>
      <div class="stat-card"><span class="lbl">Carboidratos</span><div class="val">${Math.round(t.carbs)} g</div></div>
      <div class="stat-card"><span class="lbl">Gordura</span><div class="val">${Math.round(t.fat)} g</div></div>
      <div class="stat-card"><span class="lbl">Fibras</span><div class="val">${Math.round(t.fiber)} g</div></div>
    </div>
    <div style="height:18px"></div>
    <button class="btn btn-secondary" onclick="state.showPortionEditor=true; render();">Corrigir porções</button>
    <div style="height:12px"></div>
    <button class="btn btn-primary" ${state.mealSaving?'disabled':''} onclick="finishMeal()">${state.mealSaving?'A guardar…':'Concluir'}</button>
  </div>
  ${state.showPortionEditor ? portionEditorModal() : ''}`;
}
async function handleMealCapture(event){
  const file = event.target.files && event.target.files[0];
  if(!file) return;
  state.mealUploading = true; render();
  if(state.user){
    const { path, error } = await dataUploadMealPhoto(state.user.id, file);
    if(!error) state.mealPhotoPath = path;
  }
  state.mealUploading = false;
  state.showMealResult = true;
  render();
}
async function finishMeal(){
  if(state.user){
    state.mealSaving = true; render();
    const t = mealTotals();
    await dataSaveMeal(state.user.id, state.mealPhotoPath, t, state.mealItems);
    state.mealSaving = false;
  }
  state.showMealResult = false;
  state.mealPhotoPath = null;
  nav('dashboard');
}
function portionEditorModal(){
  const t = mealTotals();
  return `
  <div class="modal-backdrop" onclick="if(event.target===this){state.showPortionEditor=false; render();}">
    <div class="modal-sheet">
      <div class="sheet-handle"></div>
      <h3 class="h3" style="margin-bottom:4px;">Corrigir porções</h3>
      <p class="muted" style="margin-bottom:16px;">Ajuste os alimentos identificados e as respetivas quantidades.</p>
      <div class="stack" style="margin-bottom:16px;">
        ${state.mealItems.map((item,idx)=>`
          <div class="exercise-row" style="cursor:default;">
            <div class="exercise-thumb" style="font-size:24px;">${item.emoji}</div>
            <div class="exercise-meta"><b>${item.name}</b><span>${Math.round(item.kcal*item.qty)} kcal</span></div>
            <div style="display:flex; align-items:center; gap:10px;">
              <div class="icon-btn" style="width:30px;height:30px;" onclick="adjustPortion(${idx}, -1)">−</div>
              <span style="font-weight:700; font-size:14px; width:18px; text-align:center;">${item.qty}</span>
              <div class="icon-btn" style="width:30px;height:30px;" onclick="adjustPortion(${idx}, 1)">+</div>
            </div>
          </div>`).join('')}
      </div>
      <div class="card center" style="margin-bottom:18px;">
        <span class="lbl">NOVO TOTAL ESTIMADO</span>
        <div class="val" style="font-size:26px;">${Math.round(t.kcal)} kcal</div>
      </div>
      <button class="btn btn-primary" onclick="state.showPortionEditor=false; render();">Guardar alterações</button>
    </div>
  </div>`;
}
function adjustPortion(idx, delta){
  const item = state.mealItems[idx];
  item.qty = Math.max(0, Math.min(4, item.qty + delta));
  render();
}

function screenAIAssistant(){
  return `
  <div class="screen no-pad-bottom" style="display:flex; flex-direction:column; height:calc(100% - 6px);">
    ${topBar('MyFitForm AI', 'dashboard')}
    <p class="muted center" style="margin-bottom:10px;">Assistente pessoal · respostas simuladas nesta demonstração</p>
    <div style="flex:1; display:flex; flex-direction:column; gap:10px; overflow-y:auto; padding-bottom:12px;">
      <div class="chat-bubble ai">Como posso ajudar você hoje?</div>
      ${state.chat.map(m=>`<div class="chat-bubble ${m.role}">${m.text}</div>`).join('')}
    </div>
    <div style="display:flex; gap:8px; overflow-x:auto; padding:10px 0 4px 0;">
      ${Object.keys(aiResponses).map(q=>`<div class="suggestion-chip" onclick="askAI('${q.replace(/'/g,"\\'")}')">${q}</div>`).join('')}
    </div>
  </div>`;
}
function askAI(q){
  state.chat.push({role:'user', text:q});
  state.chat.push({role:'ai', text: aiResponses[q] || 'Vou analisar isso com base no seu perfil e histórico.'});
  render();
  setTimeout(()=>{ const vp=document.getElementById('viewport'); vp.scrollTop = vp.scrollHeight; }, 30);
}

function screenDashboard(){
  const name = state.profile.name || 'Ricardo';
  const goalLabel = state.goals.length ? goalOptions.find(g=>g.k===state.goals[0])?.t : 'Perder gordura';
  return `
  <div class="screen">
    <div class="top-row" style="padding-top:6px;">
      <div>
        <h2 class="h2">Olá, ${name} 👋</h2>
        <p class="lede" style="margin-top:4px;">Está pronto para evoluir hoje?</p>
      </div>
      <div class="icon-btn" onclick="nav('profile')">${ic.user}</div>
    </div>

    <div class="stack">
      <div class="card card-tap" onclick="nav('diagnosis')">
        <span class="eyebrow">🔥 SEU OBJETIVO</span>
        <div class="h3" style="margin-top:8px;">${goalLabel}</div>
      </div>

      <div class="card card-tap" onclick="nav('workoutToday')">
        <span class="eyebrow">🏋️ TREINO DE HOJE</span>
        <div class="h3" style="margin-top:8px;">Full Body · 32 min</div>
        <div style="height:12px"></div>
        <button class="btn btn-primary btn-sm" style="width:100%;" onclick="event.stopPropagation(); nav('workoutToday');">Começar treino</button>
      </div>

      <div class="card card-tap" onclick="nav('results')">
        <span class="eyebrow">🧍 AVALIAÇÃO CORPORAL</span>
        <div style="display:flex; gap:24px; margin-top:10px;">
          <div><div class="val" style="font-family:var(--font-display); font-size:20px; font-weight:700;">36%</div><span class="lbl">Gordura estimada</span></div>
          <div><div class="val" style="font-family:var(--font-display); font-size:20px; font-weight:700;">${state.profile.weight||64.6} kg</div><span class="lbl">Peso</span></div>
        </div>
        <div style="height:12px"></div>
        <button class="btn btn-secondary btn-sm" style="width:100%;" onclick="event.stopPropagation(); nav('results');">Ver avaliação</button>
      </div>

      <div class="card card-tap" onclick="nav('nutrition')">
        <span class="eyebrow">🍽️ NUTRIÇÃO</span>
        <div class="h3" style="margin-top:8px;">O que você está comendo?</div>
        <div style="height:12px"></div>
        <button class="btn btn-primary btn-sm" style="width:100%;" onclick="event.stopPropagation(); nav('nutrition');">Fotografar refeição</button>
      </div>

      <div class="card card-tap" onclick="nav('progress')">
        <span class="eyebrow">📈 SEU PROGRESSO</span>
        <div style="display:flex; gap:24px; margin-top:10px;">
          <div><div class="val" style="font-family:var(--font-display); font-size:20px; font-weight:700;">${state.workoutsCompleted}</div><span class="lbl">Treinos concluídos</span></div>
          <div><div class="val" style="font-family:var(--font-display); font-size:20px; font-weight:700;">${state.consistency}%</div><span class="lbl">Consistência</span></div>
        </div>
        <div style="height:12px"></div>
        <button class="btn btn-secondary btn-sm" style="width:100%;" onclick="event.stopPropagation(); nav('progress');">Ver progresso</button>
      </div>
    </div>
  </div>`;
}

function screenProgress(){
  return `
  <div class="screen">
    <div class="eyebrow">PROGRESSO</div>
    <h2 class="h2" style="margin-top:8px;">Sua evolução</h2>
    <div class="card" style="margin-top:18px;">
      <span class="lbl">PESO</span>
      <div class="bar-compare">
        <div class="bar-col"><div class="bar" style="height:${state.weightHistory[0]*1.4}px;"></div><span class="num">${state.weightHistory[0]} kg</span><span class="lbl">Início</span></div>
        <div class="bar-col"><div class="bar accent" style="height:${state.weightHistory[1]*1.4}px;"></div><span class="num">${state.weightHistory[1]} kg</span><span class="lbl">Agora</span></div>
      </div>
    </div>
    <div class="card" style="margin-top:14px;">
      <span class="lbl">GORDURA CORPORAL ESTIMADA</span>
      <div class="bar-compare">
        <div class="bar-col"><div class="bar" style="height:${state.fatHistory[0]*3}px;"></div><span class="num">${state.fatHistory[0]}%</span><span class="lbl">Início</span></div>
        <div class="bar-col"><div class="bar accent" style="height:${state.fatHistory[1]*3}px;"></div><span class="num">${state.fatHistory[1]}%</span><span class="lbl">Agora</span></div>
      </div>
    </div>
    <div class="card" style="margin-top:14px;">
      <span class="lbl">MASSA MUSCULAR ESTIMADA</span>
      <div class="bar-compare">
        <div class="bar-col"><div class="bar" style="height:${state.muscleHistory[0]*3}px;"></div><span class="num">${state.muscleHistory[0]} kg</span><span class="lbl">Início</span></div>
        <div class="bar-col"><div class="bar accent" style="height:${state.muscleHistory[1]*3}px;"></div><span class="num">${state.muscleHistory[1]} kg</span><span class="lbl">Agora</span></div>
      </div>
    </div>

    <div class="stat-grid" style="margin-top:14px;">
      <div class="stat-card"><span class="lbl">Treinos</span><div class="val">${state.workoutsCompleted}</div></div>
      <div class="stat-card"><span class="lbl">Consistência</span><div class="val">${state.consistency}%</div></div>
    </div>

    <div class="divider"></div>
    <label>Comparação visual</label>
    <div style="display:flex; gap:12px; margin-top:10px;">
      <div style="flex:1; text-align:center;">
        <div class="silhouette-frame" style="height:150px;"><svg viewBox="0 0 100 220" width="60" height="130">${ic.bodyFront}</svg></div>
        <span class="muted">ANTES</span>
      </div>
      <div style="flex:1; text-align:center;">
        <div class="silhouette-frame captured" style="height:150px;"><svg viewBox="0 0 100 220" width="60" height="130">${ic.bodyFront}</svg></div>
        <span class="muted">AGORA</span>
      </div>
    </div>
    <p class="muted" style="margin-top:14px; line-height:1.6;">As comparações de composição corporal também são estimativas.</p>
    <div style="height:14px"></div>
    <p class="lede center" style="margin-bottom:10px;">Faça uma nova avaliação para acompanhar a sua evolução.</p>
    <button class="btn btn-primary" onclick="state.processingDone=false; nav('assessmentIntro')">Nova avaliação</button>
  </div>`;
}

function screenProfile(){
  const p = state.profile;
  const goalLabel = state.goals.length ? state.goals.map(k=>goalOptions.find(g=>g.k===k)?.t).join(', ') : 'Perder gordura';
  const rows = ['Editar perfil','Meu plano','Histórico de avaliações','Privacidade','Notificações','Configurações'];
  return `
  <div class="screen">
    <div class="eyebrow">PERFIL</div>
    <div class="center" style="margin:16px 0 20px 0;">
      <div class="icon-btn" style="width:76px; height:76px; margin:0 auto 12px auto; background:var(--accent-dim); border-color:var(--accent-dim-2);">
        <span style="font-family:var(--font-display); font-weight:700; font-size:26px; color:var(--accent);">${(p.name||'R')[0].toUpperCase()}</span>
      </div>
      <h2 class="h2">${p.name || 'Ricardo'}</h2>
      <p class="muted">${p.age || 28} anos · ${p.sex || 'Masculino'}</p>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><span class="lbl">Altura</span><div class="val" style="font-size:18px;">${p.height||178} cm</div></div>
      <div class="stat-card"><span class="lbl">Peso</span><div class="val" style="font-size:18px;">${p.weight||64.6} kg</div></div>
      <div class="stat-card" style="grid-column:span 2;"><span class="lbl">Objetivo</span><div class="val" style="font-size:16px;">${goalLabel}</div></div>
      <div class="stat-card"><span class="lbl">Atividade</span><div class="val" style="font-size:15px;">${state.activity||'Moderadamente ativo'}</div></div>
      <div class="stat-card"><span class="lbl">Equipamento</span><div class="val" style="font-size:15px;">${state.equipment.length?state.equipment.join(', '):'Nenhum'}</div></div>
    </div>
    <div class="divider"></div>
    <div class="card">
      ${rows.map(r=>`<div class="settings-row" onclick="${r==='Editar perfil'?"nav('profileForm')":r==='Meu plano'?"nav('plan')":r==='Histórico de avaliações'?"nav('progress')":r==='Privacidade'?"nav('privacy')":''}"><span>${r}</span>${ic.back.replace('stroke-linecap="round" stroke-linejoin="round"><path d="M15 18 L9 12 L15 6"/>','stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 L15 12 L9 18"/>')}</div>`).join('')}
    </div>
    <div style="height:16px"></div>
    <button class="btn btn-secondary" onclick="handleSignOut()">Terminar sessão</button>
  </div>`;
}

function screenPrivacy(){
  const rows = [
    {t:'Privacidade', s:'Como os seus dados são utilizados na MyFitForm'},
    {t:'Dados pessoais', s:'Nome, idade, altura, peso e objetivos'},
    {t:'Fotografias', s:'Fotos usadas para a avaliação corporal'},
    {t:'Permissões', s:'Câmara e acesso a galeria'},
  ];
  return `
  <div class="screen">
    ${topBar('Privacidade e dados', 'profile')}
    <div class="card" style="margin-bottom:18px;">
      <p style="font-weight:700; font-size:15px; margin-bottom:6px;">As suas fotos são dados pessoais.</p>
      <p class="lede" style="line-height:1.6;">Você controla como as suas fotografias são utilizadas dentro da MyFitForm.</p>
    </div>
    <div class="card">
      ${rows.map(r=>`
        <div class="settings-row">
          <div><span style="display:block;">${r.t}</span><span class="muted" style="display:block; margin-top:2px;">${r.s}</span></div>
          ${ic.back.replace('M15 18 L9 12 L15 6','M9 6 L15 12 L9 18')}
        </div>`).join('')}
    </div>
    <div style="height:18px"></div>
    <div class="card" style="border-color:rgba(255,90,90,.3);">
      <div class="settings-row" style="border:none; padding:2px;" onclick="state.showDeleteConfirm=true; render();">
        <span style="color:#ff6b6b;">Excluir conta</span>
        ${ic.back.replace('M15 18 L9 12 L15 6','M9 6 L15 12 L9 18').replace('stroke="white"','stroke="#ff6b6b"')}
      </div>
    </div>
  </div>
  ${state.showDeleteConfirm ? deleteConfirmModal() : ''}`;
}
function deleteConfirmModal(){
  return `
  <div class="modal-backdrop" onclick="if(event.target===this){state.showDeleteConfirm=false; render();}">
    <div class="modal-sheet">
      <div class="sheet-handle"></div>
      <h3 class="h3" style="margin-bottom:10px;">Excluir a sua conta?</h3>
      <p class="lede" style="line-height:1.6; margin-bottom:20px;">Isto elimina o seu perfil e todos os dados associados (objetivos, avaliações, treinos, refeições). A conta de acesso é removida numa fase seguinte do MVP.</p>
      <button class="btn btn-secondary" onclick="state.showDeleteConfirm=false; render();">Cancelar</button>
      <div style="height:10px"></div>
      <button class="btn btn-primary" style="background:#ff6b6b; color:#1a0000;" onclick="handleDeleteAccount()">Confirmar exclusão</button>
    </div>
  </div>`;
}

async function handleSignOut(){
  await authSignOut();
  state.user = null;
  nav('welcome');
}

async function handleDeleteAccount(){
  await authDeleteAccount();
  state.showDeleteConfirm = false;
  state.user = null;
  nav('welcome');
}

/* ============ ROUTER ============ */
function render(){
  const map = {
    welcome: screenWelcome, signup: screenSignup, login: screenLogin,
    profileForm: screenProfileForm, goals: screenGoals,
    location: screenLocation, equipment: screenEquipment, assessmentIntro: screenAssessmentIntro,
    photoPrep: screenPhotoPrep, photoCapture: screenPhotoCapture, processing: screenProcessing,
    results: screenResults, posture: screenPosture, diagnosis: screenDiagnosis, plan: screenPlan,
    workoutToday: screenWorkoutToday, nutrition: screenNutrition, aiAssistant: screenAIAssistant,
    dashboard: screenDashboard, progress: screenProgress, profile: screenProfile, privacy: screenPrivacy,
  };
  const fn = map[state.screen] || screenWelcome;
  let html = fn();
  if(state.screen === 'workoutToday') html += exerciseModal();
  document.getElementById('viewport').innerHTML = html;

  // Barra de navegação fixa: fica fora da área com scroll, para nunca se mover com o conteúdo.
  const navEl = document.getElementById('bottom-nav-container');
  if(navEl) navEl.innerHTML = mainScreens.includes(state.screen) ? bottomNav(state.screen) : '';

  if(state.screen === 'processing') startProcessing();
  if(state.screen === 'photoCapture') startPhotoCheck();
}

/* ============ ARRANQUE DA APP — verifica sessão Supabase ============ */
async function bootstrapApp(){
  const session = await authGetSession();
  if(session){
    state.user = session.user;
    await loadProfileIntoState();
    state.screen = state.profile.name ? 'dashboard' : 'profileForm';
  } else {
    state.screen = 'welcome';
  }
  render();
}
bootstrapApp();
