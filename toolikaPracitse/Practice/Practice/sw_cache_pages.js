const cacheName = 'v1';
const asset = [
    'tab.html',
    'tab.css',
    'tab.js'
]

self.addEventListener('install', (e)=> {
    console.log('Installed')
    e.waitUtil(
        caches.open(cacheName)
        .then((cache)=> cache.addAll(asset))
        .then(()=> self.skipWaiting())
    )

})

self.addEventListener('activate', (e)=> {
    console.log('activated')
    // removing old version of cache

    caches.keys().then((cacheList)=> {
        return Promise.all(
           cacheList.map((cache)=>
           {
           if(cache != cacheName){
               caches.delete(cache)
           }
           }
           )
        )
    })
})

self.addEventListener('fetch', (e)=> {
    e.respondWith(
        fetch(e.request).catch(caches.match(e.request))
    )
})