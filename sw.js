const C="miniso-v1";
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url),st=u.pathname.includes("/sprites/");
  e.respondWith(st?caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const c=x.clone();caches.open(C).then(k=>k.put(e.request,c));return x})):
    fetch(e.request).then(x=>{if(u.origin===location.origin){const c=x.clone();caches.open(C).then(k=>k.put(e.request,c))}return x}).catch(()=>caches.match(e.request)));
});
