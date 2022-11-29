const cacheNAME = 'offline';
const casheASSETS = [
    'offline.php',
    './offline/offline.css',
    './offline/bootstrap.min.css',
    './offline/jquery.js',
    './offline/offline.js',
];
self.addEventListener('install',(event)=>{
    console.log('service worker: installed');
    event.waitUntil(
        caches
        .open(cacheNAME)
        .then(cache=>{
            console.log('service worker: cashing files');
            cache.addAll(casheASSETS);
            
        })
        .then(()=>self.skipWaiting())
    );
});
self.addEventListener('activate',(event)=>{
    console.log('service worker: activated');
    event.waitUntil(
        caches.keys().then(cacheNAMEs =>{ 
             return Promise.all(
                cacheNAMEs.map(cache =>{
                    if(cache !== cacheNAME){
                        console.log('service worker: delete old cache');
                        return caches.delete(cache);
                    }
                })
             )
        })
    );
});

self.addEventListener('fetch', event=>{
    console.log('service worker: fetching');
    event.respondWith(
        fetch(event.request).catch(()=> caches.match(event.request))
    )
});