'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "4b18860f80904914dfe4a5c3e09cac87",
"/manifest.json": "ef6238f94f800b63d71579301c170041",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/image_two.jpg": "205ed4c5b35b2c24ac2e358c66dea12f",
"/assets/assets/image_one.jpg": "e3b528efd8bf4376f9a9769bae07ae4f",
"/assets/assets/image_three.jpg": "0283b20753f058049d7c03a52925fa6c",
"/assets/assets/profile.jpg": "c7e3f10a4033a79f06ab7ee73852421d",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "b214eb7364d8362745fd19e6842985e7",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "165d1d3a22ad4073b96db9c18242136c",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
