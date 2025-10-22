import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
plugins: [
react(),
VitePWA({
registerType: "autoUpdate",
includeAssets: [
"icons/icon-192.png",
"icons/icon-512.png",
"icons/maskable-512.png",
"icons/shortcut-learning.png",
"icons/shortcut-lesson.png",
"icons/shortcut-playground.png"
],
manifest: false, // gunakan manifest.webmanifest manual di public/
workbox: {
globPatterns: ["**/*.{js,css,html,png,svg,ico,webmanifest}"],
runtimeCaching: [
// HTML pages
{
urlPattern: ({ request }) => request.destination === "document",
handler: "NetworkFirst",
options: {
cacheName: "pages",
expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 }
}
},
// Static assets
{
urlPattern: ({ request }) => ["style", "script", "worker"].includes(request.destination),
handler: "StaleWhileRevalidate",
options: { cacheName: "assets" }
},
// Images
{
urlPattern: ({ request }) => request.destination === "image",
handler: "CacheFirst",
options: {
cacheName: "images",
expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 }
}
},
// Pyodide CDN (function matcher to avoid regex pitfalls)
{
urlPattern: ({ url }) =>
url.origin === "https://cdn.jsdelivr.net" &&
url.pathname.startsWith("/pyodide/") &&
url.pathname.includes("/full/"),
handler: "CacheFirst",
options: {
cacheName: "pyodide-cdn",
expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 30 }
}
}
]
},
devOptions: {
enabled: false
}
})
]
});