/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "31803ec7229f8e8e84f4a4e7d9922db5"
  },
  {
    "url": "api/index.html",
    "revision": "2506273022c73e7d679fa32a3d7ddc28"
  },
  {
    "url": "assets/css/0.styles.48e8e2bb.css",
    "revision": "ef823d7451e7e646b0185fa4f940f3f2"
  },
  {
    "url": "assets/img/gotify-example.60f15769.png",
    "revision": "60f15769f81ec8cd3236591f6dc84529"
  },
  {
    "url": "assets/img/octoprint-cors.9615af97.png",
    "revision": "9615af97e5caaac9ad2195545ead330a"
  },
  {
    "url": "assets/img/power-psucontrol.4bc2814f.png",
    "revision": "4bc2814f821c75f31d945f0c49a0ebd7"
  },
  {
    "url": "assets/img/power-tasmota.56cf72cb.png",
    "revision": "56cf72cb12e8d84e404305a6960198b5"
  },
  {
    "url": "assets/img/power-tplink.03283c4e.png",
    "revision": "03283c4e61a6178cb57337c282191ac1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.261f954b.js",
    "revision": "1153d8ca73d80c297ad815af94b9083f"
  },
  {
    "url": "assets/js/11.a44fc9fd.js",
    "revision": "4d29b8b289c2c14bdfcbc42179e582e3"
  },
  {
    "url": "assets/js/12.e22832b5.js",
    "revision": "552977cce4c933a544413ed0f0dd278b"
  },
  {
    "url": "assets/js/13.73ec3a66.js",
    "revision": "313699d6b95260cdb7b9c1cf83d3cc0f"
  },
  {
    "url": "assets/js/14.daa3f4a0.js",
    "revision": "c8ce426f2657bf4249e48a15ac0ee436"
  },
  {
    "url": "assets/js/15.6a45dbd6.js",
    "revision": "b61fb723fec1c5a5f7d069a2841ff7a7"
  },
  {
    "url": "assets/js/16.955128cb.js",
    "revision": "13f09aac88cca7eaddb4a5a7495efbc1"
  },
  {
    "url": "assets/js/17.19f24dc8.js",
    "revision": "0d7f9383c83d42a1feddcab7c55c1883"
  },
  {
    "url": "assets/js/18.b6d39cc0.js",
    "revision": "7fa5d9c94d7efd160e99564e374022de"
  },
  {
    "url": "assets/js/19.5c66b6cf.js",
    "revision": "75b1292261fe7cb843bcd7d8e7acdb86"
  },
  {
    "url": "assets/js/2.965b894a.js",
    "revision": "f504031d64ab18c8c83edb62aaa17c32"
  },
  {
    "url": "assets/js/20.5c3d0d74.js",
    "revision": "08e31addf036394cb0dc4ec470d962f1"
  },
  {
    "url": "assets/js/21.3e9335c4.js",
    "revision": "c76abec8099e927e5791e099b123657c"
  },
  {
    "url": "assets/js/22.a5b45674.js",
    "revision": "446a7f438923ec23afea93a588774c5f"
  },
  {
    "url": "assets/js/23.4a886ec7.js",
    "revision": "a61b8fc1c4810f4954e41db8c85d033b"
  },
  {
    "url": "assets/js/24.9f054d29.js",
    "revision": "01c79a8adb9f0891610996770519fd44"
  },
  {
    "url": "assets/js/25.c5fa7f4d.js",
    "revision": "aae33c335e09e16ea13a0c0584afda82"
  },
  {
    "url": "assets/js/26.6c8c8ba1.js",
    "revision": "bb6b1f807490f19e731adf335aa52f7c"
  },
  {
    "url": "assets/js/27.6a8ac579.js",
    "revision": "81f1ae229dd60e157045f3ea3592276e"
  },
  {
    "url": "assets/js/28.f94721e7.js",
    "revision": "07c9608dd38eab2701abb16200e2ecb6"
  },
  {
    "url": "assets/js/29.3ab3567c.js",
    "revision": "d508987d7c59d565748249574f14817d"
  },
  {
    "url": "assets/js/3.307549ba.js",
    "revision": "c6dcf7e1633f7935b701deb92a1d7fcc"
  },
  {
    "url": "assets/js/30.c63a3834.js",
    "revision": "ed5ecbe8925f7c28ee1578b2cb61e4a8"
  },
  {
    "url": "assets/js/31.ca5d273e.js",
    "revision": "80fd222157c3482553fdeea07143d98e"
  },
  {
    "url": "assets/js/4.c8c44e52.js",
    "revision": "a5aaf9a70dc6b94b790182c68edefeb0"
  },
  {
    "url": "assets/js/5.35354b5a.js",
    "revision": "c1d261aff56bc1e49725f166d9d1df4b"
  },
  {
    "url": "assets/js/6.e55b13fa.js",
    "revision": "7c7e1147a50e6820eb1964608aee6c85"
  },
  {
    "url": "assets/js/7.4abc5fac.js",
    "revision": "71326cb021fb1b4923b18adf4fc27720"
  },
  {
    "url": "assets/js/8.2eeeb5ce.js",
    "revision": "d0276410ab70cef8049c96c90d9bae8f"
  },
  {
    "url": "assets/js/9.e3a3c066.js",
    "revision": "0a7ca676412ba88c6fcfe334e217421f"
  },
  {
    "url": "assets/js/app.e235703f.js",
    "revision": "3fb48b56d0da5d89df6ed5ca4f2aa467"
  },
  {
    "url": "contributing/index.html",
    "revision": "9734fc3669c7c7a30fb1dc4ba4c96cd0"
  },
  {
    "url": "getting-started/index.html",
    "revision": "460ee6973d73ed88a2e6bdd0e2ec647d"
  },
  {
    "url": "getting-started/octofarm-cli.html",
    "revision": "cbb1302b2bad2666f1423ddb27aa346b"
  },
  {
    "url": "getting-started/octofarm-faq.html",
    "revision": "efb033e4049cf9437f014a389202d032"
  },
  {
    "url": "getting-started/octofarm-remote-access.html",
    "revision": "f116bc5ddbf47b976f3c4592f451895e"
  },
  {
    "url": "getting-started/octofarm-requirements.html",
    "revision": "c8045c5bf66bc89c92b8b56608026cd2"
  },
  {
    "url": "getting-started/octofarm-updating.html",
    "revision": "d3e69f638250c7ad9144c8f3616f7db3"
  },
  {
    "url": "getting-started/octoprint-setup.html",
    "revision": "6600dc9174991532d637c9793f1a7d89"
  },
  {
    "url": "guides/index.html",
    "revision": "ef8c69b253d07666a16d2b13fe54133e"
  },
  {
    "url": "guides/octofarm-scripts-gotify.html",
    "revision": "768afea403eb27ae49d606c7448efdf8"
  },
  {
    "url": "guides/octoprint-supported-plugins.html",
    "revision": "be9cc82d28e916c1d9585339d735d82e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5017e7e33ca7c617bf40f4c449803354"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0fc1d956b26dfd6d81b992882ed8cfec"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dd34c21efa1fd560c76c84bd1f8c0e85"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "175295be99cd023090875a8fe8de9cff"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "39939dc9e24b73c478026c5850ac8a4d"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "510c6b26f256ec09d2d8ab82fe713283"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "1f6c689ebef2033c87b211b9f6971826"
  },
  {
    "url": "index.html",
    "revision": "15f8239d9770ccbf733ac940f00e95af"
  },
  {
    "url": "installation/index.html",
    "revision": "5366fdc3bd63baba3e8a6905e93bc4ab"
  },
  {
    "url": "installation/install-docker.html",
    "revision": "8e8645354e0796805862958466f9b20d"
  },
  {
    "url": "installation/install-linux-debian.html",
    "revision": "18bf1e0f317fe08e72e88544ab0da539"
  },
  {
    "url": "installation/install-linux-ubuntu.html",
    "revision": "09df6ea4f6285c39bda90ff7f61a36a6"
  },
  {
    "url": "installation/install-raspberry-pi.html",
    "revision": "bc0024b76c361155f827805452b831f2"
  },
  {
    "url": "installation/setup-environment.html",
    "revision": "2d38b156497850f5908719d5f4a00c42"
  },
  {
    "url": "installation/setup-service.html",
    "revision": "2028cac51de89b8ce89a587e1ac8a66c"
  },
  {
    "url": "logo.png",
    "revision": "cafa45e7ede7e3888e08e8640cb7d92d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
