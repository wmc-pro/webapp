if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let c={};const d=e=>i(e,o),f={module:{uri:o},exports:c,require:d};a[o]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_expo/static/js/web/entry-bf3ef2ac81c1c79777a1a16f07794673.js",revision:"889397de98395e963938049a4e351f0a"},{url:"_sitemap.html",revision:"62984f491f4f82e13967938330fc5df6"},{url:"(tabs)/index.html",revision:"83036c8c074c758bfcf39b166b9c1715"},{url:"(tabs)/two.html",revision:"22709a26e73547072a0f13dfaaabd2de"},{url:"+not-found.html",revision:"98d9b079d5b23860a193c3c0198b8777"},{url:"android-icon-144x144.png",revision:"97d4e535ae1ab8a8459c7be5a7f18eee"},{url:"android-icon-192x192.png",revision:"8622b2a9cb06e137e83a206e695b000d"},{url:"android-icon-36x36.png",revision:"aee6417902aeb09d33937c3a56b5ab0b"},{url:"android-icon-48x48.png",revision:"bfd84e4c913e3bee455fdf8681b9030a"},{url:"android-icon-512x512.png",revision:"1af11d5a43e107bff6790bebe0b00ee1"},{url:"android-icon-72x72.png",revision:"8a59ec095cfa15a84f36aa1dd52da4a5"},{url:"android-icon-96x96.png",revision:"00c2756a99ae6235a807f7ef9a2eb085"},{url:"apple-icon-114x114.png",revision:"448f1dee9836d9961f6c4be3899416d9"},{url:"apple-icon-120x120.png",revision:"e6e459c8dba4a38708148c9feaec5a34"},{url:"apple-icon-144x144.png",revision:"97d4e535ae1ab8a8459c7be5a7f18eee"},{url:"apple-icon-152x152.png",revision:"a15f4a9c1d1b08ab38c480374f278f39"},{url:"apple-icon-180x180.png",revision:"23a63fdbd0ef0b4ff5ef89d157bb5af9"},{url:"apple-icon-57x57.png",revision:"e6caca22d1482b605073f3b9eaee79a7"},{url:"apple-icon-60x60.png",revision:"a823715253b49ef5ad2b72fa67fff2ea"},{url:"apple-icon-72x72.png",revision:"8a59ec095cfa15a84f36aa1dd52da4a5"},{url:"apple-icon-76x76.png",revision:"b87e009b1aa0ee89a3619a5475f5d99a"},{url:"apple-icon-precomposed.png",revision:"8622b2a9cb06e137e83a206e695b000d"},{url:"apple-icon.png",revision:"8622b2a9cb06e137e83a206e695b000d"},{url:"assets/assets/fonts/SpaceMono-Regular.49a79d66bdea2debf1832bf4d7aca127.ttf",revision:"49a79d66bdea2debf1832bf4d7aca127"},{url:"browserconfig.xml",revision:"d43d3f60224dc9e8d788d0b48a3a74fb"},{url:"favicon-16x16.png",revision:"d315a25404bd28e3cb71ad2b60874a6a"},{url:"favicon-32x32.png",revision:"84f7a1bc10470aea22217ee8fa8d3127"},{url:"favicon-96x96.png",revision:"00c2756a99ae6235a807f7ef9a2eb085"},{url:"favicon.ico",revision:"35fd098e057af83a4bc9b9e3c6c02692"},{url:"index.html",revision:"83036c8c074c758bfcf39b166b9c1715"},{url:"manifest.json",revision:"7350c22d59c901b64f9251386da923d2"},{url:"modal.html",revision:"8f95b7104f5324af9f61d3fe0e8d559f"},{url:"ms-icon-144x144.png",revision:"97d4e535ae1ab8a8459c7be5a7f18eee"},{url:"ms-icon-150x150.png",revision:"8c4c9acafa4176273455ca1e72a2d98a"},{url:"ms-icon-310x310.png",revision:"0a306d9061ec78f4f742bade33629568"},{url:"ms-icon-70x70.png",revision:"7a60b99ee9f62a9b5c0501fb3b03aec3"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"summary_large_image.jpeg",revision:"7543dd7a6d17de6a1198e284f7c5ac7f"},{url:"two.html",revision:"22709a26e73547072a0f13dfaaabd2de"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/,/^ignore1/]})}));
//# sourceMappingURL=sw.js.map
