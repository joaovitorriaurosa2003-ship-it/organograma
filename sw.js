/* Service worker do Organograma Meia Noite.
   Busca sempre a versão mais nova na internet; usa a cópia guardada só se estiver sem conexão.
   Não guarda nada do Firebase: os dados dos funcionários nunca ficam no cache. */
const CACHE = "organograma-v1";
const ARQUIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icones/icon-192.png", "./icones/icon-512.png", "./icones/apple-touch-icon.png", "./icones/favicon-32.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
      return res;
    }).catch(() => caches.match(req).then(r => r || (req.mode === "navigate" ? caches.match("./index.html") : undefined)))
  );
});
