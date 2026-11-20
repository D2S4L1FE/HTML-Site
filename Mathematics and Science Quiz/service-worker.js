const CACHE_NAME = 'you-matter-v26';
const APP_FILES = [
  './',
  './index.html',
  './D2S.html',
  './support.html',
  './20250915_070503.jpg',
  './20251222_145605.jpg',
  './20251222_145714.jpg',
  './20251222_145742.jpg',
  './20251222_145803.jpg',
  './20251222_150037.jpg',
  './New folder/119672183_3713734505304624_782488471232849998_n.jpg',
  './New folder/20250702_135608.jpg',
  './New folder/20251015_135524.jpg',
  './New folder/20260118_105245.jpg',
  './New folder/482223021_9872894529388560_3268861719223735398_n.jpg',
  './New folder/482341567_18449894104077189_9206114585399908400_n.jpg',
  './New folder/510121607_24393964223521683_6430517927207668478_n.jpg',
  './New folder/513252538_24448696324715139_7081551167270172136_n.jpg',
  './New folder/513826944_24448696614715110_7284246900594705920_n.jpg',
  './New folder/514326657_24450154434569328_9089355597791629010_n.jpg',
  './New folder/514565390_24490792297172208_7124853209198083438_n.jpg',
  './New folder/515259741_24490792093838895_8370519060890587112_n.jpg',
  './New folder/51543321_2378409202170501_2474976523522670592_n.jpg',
  './New folder/515444242_24511059755145462_5880155016665812923_n.jpg',
  './New folder/515702817_24511059781812126_404205867430389078_n.jpg',
  './New folder/51584484_2378409395503815_2626304370437783552_n.jpg',
  './New folder/515947395_24518811681036936_6086755612314635518_n.jpg',
  './New folder/516191297_24518811564370281_4395396715131234259_n.jpg',
  './New folder/516351510_24518811747703596_5501336566301859677_n.jpg',
  './New folder/516608378_24518811581036946_2524091334612039560_n.jpg',
  './New folder/51668562_2378409058837182_2765396040210186240_n.jpg',
  './New folder/517018679_24518811697703601_3507012649391739732_n.jpg',
  './New folder/517123125_24518811751036929_3316152467966325622_n.jpg',
  './New folder/517181450_24518811621036942_8997928066455699957_n.jpg',
  './New folder/517346435_24511059735145464_1284955449581485394_n.jpg',
  './New folder/51899392_2378408788837209_3869394976802603008_n.jpg',
  './New folder/60796341_2525697760774977_6153966039496392704_n.jpg',
  './New folder/IMG-20251222-WA0026.jpg',
  './New folder/IMG_20230214_110033.jpg',
  './styles.css',
  './exam-extractor/question-bank.generated.js',
  './question-bank/nigeria-jss1-mathematics.md',
  './question-bank/nigeria-jss1-basic-science.md',
  './question-bank/nigeria-jss1-english-studies.md',
  './script.js',
  './manifest.webmanifest',
  './icons/app-icon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => (cacheName.startsWith('you-matter-') || cacheName.startsWith('distinct-youngsters-')) && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', copy));
          return response;
        })
        .catch(async () => (await caches.match(event.request)) || caches.match('./index.html')),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
    }),
  );
});
