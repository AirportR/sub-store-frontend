if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const o=e=>n(e,c),t={module:{uri:c},exports:d,require:o};s[c]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-1bc7d4d5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"98561baf21710a1438f042ebabbc0359"},{url:"index.js",revision:"c6abaed9bd5d2101c3bbf4c73b75a653"},{url:"main.css",revision:"59a5b116aae0f82483e75ebdf6cd8286"},{url:"main.js",revision:"6c47a49bdeb4bbfdac1a5e53bc4ca0ad"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"144x144.png",revision:"da1fc237f28bf24ce23a3882613413c2"},{url:"168x168.png",revision:"e1391dcf388bbba84b9b04812cf0ea47"},{url:"192x192.png",revision:"8d85b04575c35c9f8e1e6bba0ea11b64"},{url:"256x256.png",revision:"bc8ab0651e3debb4e73835a9de05d5ca"},{url:"512x512.png",revision:"b294d15079f018bf82b6fdad29b97718"},{url:"manifest.webmanifest",revision:"8dd5346f2eb45558e109dbc5f30327e3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/(^|\/.+)\/(api|download)\/.+/]})),e.registerRoute(/.*\.(?:js|css|gz|html|json)/i,new e.CacheFirst({cacheName:"sub-store-js-cache",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/.*\.(?:png|svg|ico|woff|ttf|eot)/i,new e.CacheFirst({cacheName:"sub-store-res-cache",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));