// ============================================================
// SERVICE WORKER — cache simples do "app shell"
// Não faz cache de chamadas ao Supabase (dados têm de estar
// sempre atualizados); apenas dos ficheiros estáticos da app.
// ============================================================
const CACHE_NAME = 'myfitform-shell-v2';
const APP_SHELL = [
  './',
  './index.html',
  './css/styles.css',
  './js/config.js',
  './js/supabaseClient.js',
  './js/auth.js',
  './js/data.js',
  './js/app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Nunca fazer cache de pedidos ao Supabase — dados têm de ser sempre frescos.
  if (url.hostname.includes('supabase.co')) return;

  // Rede primeiro (para apanhar sempre a versão mais recente da app);
  // só usa a cópia em cache se não houver ligação à internet.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
