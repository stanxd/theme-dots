(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function i(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(s,t);var e,c,a,f,l=(a=s,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(a);if(f){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return i(this,t)});function s(){return n(this,s),l.apply(this,arguments)}return e=s,(c=[{key:"onReady",value:function(){this.initiateLoadingMore()}},{key:"initiateLoadingMore",value:function(){salla.infiniteScroll.initiate(".orders-container",".order-row",{history:!1,scrollThreshold:!1})}}])&&r(e.prototype,c),s}(function(){function e(){var t=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),window.page=this,document.addEventListener("DOMContentLoaded",(function(){return t.loadApp().then((function(){return t.onReady()||t.registerEvents()}))}))}var n,r;return n=e,(r=[{key:"loadApp",value:function(){var t=0;return new Promise((function(e,n){return setInterval((function(){window.app&&window.app.isThemeApp&&(e(!0),clearInterval(this)),t>10&&(n("Failed to Find `window.app`😢"),clearInterval(this)),t++}),100)}))}},{key:"onReady",value:function(){}},{key:"registerEvents",value:function(){}}])&&t(n.prototype,r),e}()))})();