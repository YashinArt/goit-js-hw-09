parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GyVV":[function(require,module,exports) {
var o=document.querySelector(".form"),e=addEventListener("submit",n);function n(o){o.preventDefault();for(var e=Number(o.target.delay.value),n=Number(o.target.step.value),c=Number(o.target.amount.value),a=1;a<=c;a+=1)t(a,e).then(function(o){var e=o.position,n=o.delay;setTimeout(function(){console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")),console.log(n)},n)}).catch(function(o){var e=o.position,n=o.delay;setTimeout(function(){console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))},n)}),e+=n}function t(o,e){var n=Math.random()>.3,t={position:o,delay:e};return new Promise(function(o,e){n&&o(t),e(t)})}t(2,1500).then(function(o){var e=o.position,n=o.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))}).catch(function(o){var e=o.position,n=o.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))});
},{}]},{},["GyVV"], null)
//# sourceMappingURL=/goit-js-hw-09/03-promises.e7abaac8.js.map