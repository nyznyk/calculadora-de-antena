const CACHE_NAME = 'calc-antena-v2';
const ASSETS = [
  'index.html',
  'app.js',
  'manifest.json',
  'icone.png'
];

// Instala o app no armazenamento local
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Busca os arquivos direto do celular (sem precisar de internet)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});