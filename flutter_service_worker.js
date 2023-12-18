'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "14854b5868cba50ce66ac9b31358058e",
"assets/AssetManifest.json": "a291e537946bef13436f7f6d7f2e6332",
"assets/assets/images/accessories/hairstyles.png": "fb5248743bcd7be19c469277545801d6",
"assets/assets/images/accessories/hats.png": "56594b7614acf58bacf63df3395d5570",
"assets/assets/images/accessories/pants.png": "9cc499bec1146a18c9df0c206d185c98",
"assets/assets/images/accessories/shirts.png": "d4e2fb96322ef0373462e86a00bb2329",
"assets/assets/images/accessories/shoeColors.png": "a5435e1f5447dbea0ca8b4ce491eb443",
"assets/assets/images/accessories/skinColors.png": "d0e3cf9fcba7f321cd6a01541dde0d1c",
"assets/assets/images/characters/ChickWhiteBig.png": "dd35fa329892653161c250542c0c17e6",
"assets/assets/images/characters/Dick.png": "27437a053aaf870e11623e19e92d0a89",
"assets/assets/images/enviroment/Flooring.png": "ef4eb2e06f623e79f022f3fd1b897cce",
"assets/assets/images/enviroment/hoeDirt.png": "d1ab84ab631288bf862fe1a541241a55",
"assets/assets/images/enviroment/samshowtiles.png": "f869c12c6c204d70c723dbefee12426a",
"assets/assets/images/enviroment/Sky.png": "9172091b707de12b1810fe7cbf31fb40",
"assets/assets/images/enviroment/spring_outdoorsTileSheet.png": "5c07ee888630043af03967290c152970",
"assets/assets/images/enviroment/spring_town.png": "d1ccced21d62f4aed550c01df3fa3842",
"assets/assets/images/enviroment/springobjects.png": "b6a5f1fe3382bfa044451ddbbb85bde3",
"assets/assets/images/enviroment/summer_extra3.png": "8d3a62a916065cc34bebdc4d7485d5f3",
"assets/assets/images/interiors/coopTiles.png": "bb60aad2d6a74a6f2c206ce337b5c964",
"assets/assets/images/interiors/farmhouse_tiles.png": "cae7376e420e7c3932cc11d4a546aa09",
"assets/assets/images/interiors/townInterior.png": "64ec77b5a6a2817c79d7ed05b94d0d1c",
"assets/assets/images/interiors/walls_and_floors.png": "5f4a75ea3881097d59e370dec7299e04",
"assets/assets/images/maps/Barn.json": "916efb21900f8ee74b659c36c1a8f0fc",
"assets/assets/images/maps/PlayerHome1.json": "1bde9ad8f01cbc8a98e5cb8506bc8e25",
"assets/assets/images/maps/PlayerHomeOutdoor1.json": "bd94b9724643f6a8a9d54b24dd9945b5",
"assets/assets/images/player/player.png": "98ed8f7e71e227a2abcf457fbc4ee977",
"assets/assets/images/player/player2.png": "27437a053aaf870e11623e19e92d0a89",
"assets/assets/images/ui/emerald.png": "2577f56e424d78997c46a162fd936a39",
"assets/assets/images/ui/emojis.png": "719e7e7951d4f3b66856549f959a7520",
"assets/assets/images/ui/textBox.png": "f30378f82343e8d167003f5230f0d2ec",
"assets/assets/images/ui/transparent.png": "fa94e9bcd9d8193d72cee784096e4089",
"assets/assets/images/ui/ui.png": "458943981ec67a631aac4353d7fa861f",
"assets/assets/images/ui/ui2.png": "b9608c26a1e084eff57dbd8729a4075e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "03edf840541bfdfc2a2cb988bff0195a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0dfed25cfdedeb623986b4f06c1847c",
"/": "e0dfed25cfdedeb623986b4f06c1847c",
"main.dart.js": "80b01748434caf86a8616266c35c11b7",
"manifest.json": "5cc5649fc59c2d8784575f76cf397cb9",
"version.json": "f3ed00ad85102010ebe47b4c854b9d02"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
