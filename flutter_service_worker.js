'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "78db350eae79ec36f4e8d0717d9a7601",
"assets/assets/fonts/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/segoepr.ttf": "32442207adcaa9247104cf2fce48e73e",
"assets/assets/fonts/segoeprb.ttf": "07ae95ea3bc6f15f78ee51c2f3542110",
"assets/assets/images/00.jpg": "3034a29484fd5ccdbd1abe5b13f8d1d8",
"assets/assets/images/01.jpg": "43e3e91df9634905ac177e58aca831e2",
"assets/assets/images/02.jpg": "43e3e91df9634905ac177e58aca831e2",
"assets/assets/images/03.jpg": "c8e27eaf7a2c79fbad3d5169720a66ed",
"assets/assets/images/04.jpg": "853bcfbd2a0da7739723261fa9219ab8",
"assets/assets/images/About_Us/01.jpg": "169ec038a088ee5780a1e626557a84d9",
"assets/assets/images/adatar.jpg": "8fc3ec90037a44f75df09b287aedaf4b",
"assets/assets/images/avatar.jpg": "5d98313ad5de17a31156e33916e76b1e",
"assets/assets/images/avatar1.png": "39a2ba3b338ad8eaf311474b91d24f0d",
"assets/assets/images/call_block.png": "42cd3aed7144369c457d441eaf73ae2b",
"assets/assets/images/chatbot_icon.png": "ae17e6810e5f64dcdfe1719abc529b3e",
"assets/assets/images/chatbot_icon_white.png": "75438d6825a8b61f49bf12069b0597c1",
"assets/assets/images/download/Picture1.png": "edc55a9c57b22ea5aad052ef1acedabe",
"assets/assets/images/E-mail.png": "49f65cc75b6e38a8bb3dde1fa9d85ea3",
"assets/assets/images/E-wallet.png": "b96ad7516c036e627c9e2fde044665c6",
"assets/assets/images/editprofilepicture.jpg": "b62667d763d1d4d6701609b5e160ed5b",
"assets/assets/images/login-view.jpg": "dce204017106cddb54adb5939c0b02d2",
"assets/assets/images/Logo.png": "9c51e9e1290ec07efc4bf52ba94a0521",
"assets/assets/images/Picture1.png": "edc55a9c57b22ea5aad052ef1acedabe",
"assets/assets/images/privacy_logo.png": "a15c48677cb3b486e5fa1f8dee6c67d5",
"assets/assets/images/privacy_logo_black.png": "b5f316e9478d8531a0079752a07d297d",
"assets/assets/images/Scam%2520Alert.png": "6fa867390eca32ceb849617c08079b22",
"assets/assets/images/scenery.jpg": "2d8df271a7a2c8bcc34d864e37c6e040",
"assets/assets/images/T-DNS.png": "dd30cab83e6fece58a5a31a48e8e680a",
"assets/assets/images/Unknown%2520Call.png": "6bd9615dd373e18095e75b2dcc672700",
"assets/assets/images/Unknown_Call.png": "6bd9615dd373e18095e75b2dcc672700",
"assets/assets/translations/de.json": "64c01cdb64c2d3509483a2eeb838bbd3",
"assets/assets/translations/en.json": "ff5ce15a1a13fd9f0f1c12f75f5e7940",
"assets/assets/translations/es.json": "bc8f8d9919b65def240ff3ee6d1faa22",
"assets/assets/translations/fr.json": "578bbd77aa66bf06ffea15d08adc3b0c",
"assets/assets/translations/hi.json": "1fa0cca60db91d6986455baffaa6d948",
"assets/assets/translations/id.json": "aac510ada406c956273e7ad6a5393d0d",
"assets/assets/translations/ja.json": "9aa04e68ed8e4329762fbe5d1ea203cb",
"assets/assets/translations/ko.json": "cd9a0bc81b7dce6f08e235ea952cb08f",
"assets/assets/translations/ms.json": "67af4ac68bb3afacf0b6b8d070b11b56",
"assets/assets/translations/ru.json": "415de177b827d9ec817578a3a0f43a5a",
"assets/assets/translations/ta.json": "5d5b39d3ca683c6fcdd840c094d72d27",
"assets/assets/translations/te.json": "f47dfc2bd401fa1797f4db43d1bc0b65",
"assets/assets/translations/vi.json": "370ba53401b9701855bde2e5cc11feae",
"assets/assets/translations/zh.json": "0360248b3dc5856a2e2f1b38f01d424a",
"assets/assets/videos/bbk_news.mp4": "e07e74082faa09c1e1ffd88d656d6646",
"assets/assets/videos/IncepXion_TelephonyDNS.mp4": "c3284d779310e602bc849b727001e653",
"assets/assets/videos/videoplayback.mp4": "d7bcb509db977c4c536fc13e60de2404",
"assets/FontManifest.json": "9af41bd08d5a66e9a643d399f20c8678",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/fonts/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/fonts/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/fonts/segoepr.ttf": "32442207adcaa9247104cf2fce48e73e",
"assets/fonts/segoeprb.ttf": "07ae95ea3bc6f15f78ee51c2f3542110",
"assets/images/00.jpg": "3034a29484fd5ccdbd1abe5b13f8d1d8",
"assets/images/01.jpg": "43e3e91df9634905ac177e58aca831e2",
"assets/images/02.jpg": "43e3e91df9634905ac177e58aca831e2",
"assets/images/03.jpg": "c8e27eaf7a2c79fbad3d5169720a66ed",
"assets/images/04.jpg": "853bcfbd2a0da7739723261fa9219ab8",
"assets/images/About_Us/01.jpg": "169ec038a088ee5780a1e626557a84d9",
"assets/images/About_Us/banner.jpg": "315997592a85b45e23a3ee19182f59c8",
"assets/images/About_Us/c2.gif": "6effcb5e0f720ec904eefb2551fd84ab",
"assets/images/About_Us/cover.gif": "451280b69b2f3b548d9bc19d1ec80a48",
"assets/images/About_Us/images9.png": "c60210a37ffe5a7ae6a3eb4304dd26fc",
"assets/images/adatar.jpg": "8fc3ec90037a44f75df09b287aedaf4b",
"assets/images/app/Privacy_Lite.png": "65178d497ca6bbd3944834258425c1ba",
"assets/images/app/Privacy_Max.png": "0a07cb9dcaaef83b5f010630ba08b971",
"assets/images/app/Privacy_pro.png": "c07f8a0a09d808154e0c16942ab98c12",
"assets/images/app/Privacy_RCS.png": "3046d98ec453c1942dff659e21b3d537",
"assets/images/avatar.jpg": "5d98313ad5de17a31156e33916e76b1e",
"assets/images/avatar1.png": "39a2ba3b338ad8eaf311474b91d24f0d",
"assets/images/banner/About-Us.png": "a8323b01b7aca005faed9bd38bea908f",
"assets/images/banner/download_page_img.png": "edc55a9c57b22ea5aad052ef1acedabe",
"assets/images/banner/faq_page.png": "e12fb57bded4d4badcbf22db3c3f9f90",
"assets/images/banner/home_page_img.png": "4a284555550ac751ce4c7e2b318d2243",
"assets/images/call_block.png": "42cd3aed7144369c457d441eaf73ae2b",
"assets/images/chatbot_icon.png": "ae17e6810e5f64dcdfe1719abc529b3e",
"assets/images/chatbot_icon_white.png": "75438d6825a8b61f49bf12069b0597c1",
"assets/images/download/android_logo.png": "1647386aefed7dc5697044a16b206ea4",
"assets/images/download/apple_logo.png": "8f7a653603243e991bf76cf51b94d3a6",
"assets/images/download/harmonyos_logo.png": "b757e231f30fd5d1a877b718dd7b249d",
"assets/images/download/linux_logo.png": "09ce136f901aeb1e8c66b927edea8086",
"assets/images/download/macos_logo.png": "554f7ea40300994e38e3bf0480311776",
"assets/images/download/Picture1.png": "edc55a9c57b22ea5aad052ef1acedabe",
"assets/images/download/window_logo.png": "b80294ecbc517e3160ecdb23235ae2a3",
"assets/images/E-mail.png": "49f65cc75b6e38a8bb3dde1fa9d85ea3",
"assets/images/E-wallet.png": "b96ad7516c036e627c9e2fde044665c6",
"assets/images/editprofilepicture.jpg": "b62667d763d1d4d6701609b5e160ed5b",
"assets/images/homepage/about_us_img.png": "9dc7fcae380e752e6e71164b18d292b1",
"assets/images/homepage/privacy-app-800x1200.png": "9b3ca874ad9130497ecb0bc610d08cbf",
"assets/images/homepage/privacy_logo2.png": "b5f316e9478d8531a0079752a07d297d",
"assets/images/homepage/What_Is_Privacy.png": "74644b8424fa572e319b991c76cdef76",
"assets/images/login-view.jpg": "dce204017106cddb54adb5939c0b02d2",
"assets/images/Logo.png": "9c51e9e1290ec07efc4bf52ba94a0521",
"assets/images/Picture1.png": "edc55a9c57b22ea5aad052ef1acedabe",
"assets/images/privacy_logo.png": "a15c48677cb3b486e5fa1f8dee6c67d5",
"assets/images/privacy_logo_black.png": "b5f316e9478d8531a0079752a07d297d",
"assets/images/Scam%20Alert.png": "6fa867390eca32ceb849617c08079b22",
"assets/images/scenery.jpg": "2d8df271a7a2c8bcc34d864e37c6e040",
"assets/images/T-DNS.png": "dd30cab83e6fece58a5a31a48e8e680a",
"assets/images/Unknown%20Call.png": "6bd9615dd373e18095e75b2dcc672700",
"assets/images/Unknown_Call.png": "6bd9615dd373e18095e75b2dcc672700",
"assets/NOTICES": "b80562f1c645c2b0737ef724fdb0a0fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/privacyapp/Privacy_pro_release_0.11.apk": "aa4798c3af0edbc9030d1bdffdbce3ee",
"assets/translations/de.json": "64c01cdb64c2d3509483a2eeb838bbd3",
"assets/translations/en.json": "ff5ce15a1a13fd9f0f1c12f75f5e7940",
"assets/translations/es.json": "bc8f8d9919b65def240ff3ee6d1faa22",
"assets/translations/fr.json": "578bbd77aa66bf06ffea15d08adc3b0c",
"assets/translations/hi.json": "1fa0cca60db91d6986455baffaa6d948",
"assets/translations/id.json": "aac510ada406c956273e7ad6a5393d0d",
"assets/translations/ja.json": "9aa04e68ed8e4329762fbe5d1ea203cb",
"assets/translations/ko.json": "cd9a0bc81b7dce6f08e235ea952cb08f",
"assets/translations/ms.json": "67af4ac68bb3afacf0b6b8d070b11b56",
"assets/translations/ru.json": "415de177b827d9ec817578a3a0f43a5a",
"assets/translations/ta.json": "5d5b39d3ca683c6fcdd840c094d72d27",
"assets/translations/te.json": "f47dfc2bd401fa1797f4db43d1bc0b65",
"assets/translations/vi.json": "370ba53401b9701855bde2e5cc11feae",
"assets/translations/zh.json": "0360248b3dc5856a2e2f1b38f01d424a",
"assets/videos/bbk_news.mp4": "e07e74082faa09c1e1ffd88d656d6646",
"assets/videos/IncepXion_TelephonyDNS.mp4": "c3284d779310e602bc849b727001e653",
"assets/videos/videoplayback.mp4": "d7bcb509db977c4c536fc13e60de2404",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8e64c3033b54b74412c3467ddf49c859",
"/": "8e64c3033b54b74412c3467ddf49c859",
"main.dart.js": "b25fdc6a9d6edd4d3bd7ed73d0e4ccc0",
"manifest.json": "cb8d59574cb0855d9f676c951a8b0368",
"version.json": "3fc67dae01d1a4ea3f9bd2e2b629a362",
"web.zip": "104fa1dd84d357895733086ffd2eae46"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
