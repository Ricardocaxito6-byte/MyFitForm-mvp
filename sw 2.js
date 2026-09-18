// ============================================================
// SERVICE WORKER — desativado.
// Esta versão remove-se a si própria e limpa todo o cache antigo,
// para eliminar problemas de versões desatualizadas presas no
// telefone durante esta fase de testes do MVP.
// ============================================================
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
