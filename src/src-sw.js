import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import { ExpirationPlugin } from "workbox-expiration";

import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import { CacheFirst } from "workbox-strategies";

import { CacheableResponsePlugin } from "workbox-cacheable-response";

// This clientsClaim() should be at the top level
// of your service worker, not inside of, e.g.,
// an event handler.
clientsClaim();

// https://developer.chrome.com/docs/workbox/modules/workbox-core/#the-skipwaiting-wrapper-is-deprecated
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

//  https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#pattern-5
const sheetCacheName = "google-fonts-stylesheets";
const fontCacheName = "google-fonts-webfonts";
const maxAgeSeconds = 60 * 60 * 24 * 365;
const maxEntries = 30;

registerRoute(
  ({ url }) => url.origin === "https://fonts.googleapis.com",
  new StaleWhileRevalidate({
    cacheName: sheetCacheName,
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
  ({ url }) => url.origin === "https://fonts.gstatic.com",
  new CacheFirst({
    cacheName: fontCacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds,
        maxEntries,
      }),
    ],
  })
);

// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#image-cache
// https://developer.chrome.com/docs/workbox/modules/workbox-routing/#how-routing-is-performed
registerRoute(
  matchCallback,
  new CacheFirst({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries,
        maxAgeSeconds,
      }),
    ],
  })
);

// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#static-resources-cache
const cacheName = "static-resources";
const matchCallback = ({ request }) =>
  // CSS
  request.destination === "style" ||
  // JavaScript
  request.destination === "script" ||
  // Web Workers
  request.destination === "worker";

registerRoute(
  matchCallback,
  new StaleWhileRevalidate({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// cache the API response
/**
 * Move api.
 *
 * Caches at: runtime
 */
registerRoute(
  ({ url }) =>
    url.origin === "https://api.themoviedb.org" &&
    url.pathname.startsWith("/3/discover/tv"),
  new StaleWhileRevalidate({
    cacheName: "movie-api-response",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({ maxEntries: 1 }), // Will cache maximum 1 requests.
    ],
  })
);
