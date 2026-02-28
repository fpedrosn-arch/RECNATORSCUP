const CACHE = "recnatorscup-v1";
const ASSETS = [
  "/RECNATORSCUP/",
  "/RECNATORSCUP/index.html",
  "/RECNATORSCUP/Manifest.webmanifest",
  "/RECNATORSCUP/icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
