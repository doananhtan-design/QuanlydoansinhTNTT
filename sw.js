importScripts('./config.js');
const VERSION='tntt-chau-thuy-v'+(self.TNTT_APP_VERSION||'3.2.5');
const APP_SHELL=['./','./index.html','./config.js','./manifest.webmanifest','./assets/logo.png','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  const url=new URL(req.url);
  if(url.origin!==location.origin) return;
  if(req.mode==='navigate' || req.destination==='document'){
    event.respondWith(fetch(req).then(res=>{
      const copy=res.clone();
      caches.open(VERSION).then(c=>c.put('./index.html',copy));
      return res;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{
    const copy=res.clone();
    caches.open(VERSION).then(c=>c.put(req,copy));
    return res;
  }).catch(()=>caches.match('./index.html'))));
});
