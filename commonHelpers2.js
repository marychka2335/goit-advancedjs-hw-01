import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as r,l as s}from"./assets/vendor-78be7656.js";const t=new r("vimeo-player");t.on("timeupdate",s(a,1e3));try{const e=localStorage.getItem("videoplayer-current-time"),o=JSON.parse(e).seconds;t.setCurrentTime(o)}catch(e){console.log(e.message)}function a(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}
//# sourceMappingURL=commonHelpers2.js.map