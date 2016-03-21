!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxXImg=e():t.vuxXImg=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var s=o[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(6)},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(3),i=n(s),r=o(7),a=n(r),c=o(2),l=n(c);e["default"]={mixins:[l["default"]],compiled:function(){(0,a["default"])()&&this.src&&this.webpSrc&&(this.src=this.webpSrc)},ready:function(){var t=this,e="vux-ximg-"+this.uuid;this.$el.setAttribute("id",e),this.$el.setAttribute("data-src",this.src),this.blazy=new i["default"]({selector:"#"+e,offset:t.offset,errorClass:t.errorClass,successClass:t.successClass,success:function(e){t.$dispatch("success",t.src,e)},error:function(e,o){t.$dispatch("error",t.src,e,o)}})},props:{src:{type:String},webpSrc:{type:String},defaultSrc:{type:String,"default":"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},errorClass:String,successClass:String,offset:{type:Number,defaut:100},"class":{type:String}},beforeDestroy:function(){this.blazy&&this.blazy.destroy()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{required:{type:Boolean,"default":!0}},created:function(){this.uuid=Math.random().toString(36).substring(3,8),this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$dispatch("change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(t,e,o){var n,s;!function(i,r){n=r,s="function"==typeof n?n.call(e,o,e,t):n,!(void 0!==s&&(t.exports=s))}(this,function(){"use strict";function t(t){var o=t._util;o.elements=r(t.options.selector),o.count=o.elements.length,o.destroyed&&(o.destroyed=!1,t.options.container&&u(t.options.container,function(t){c(t,"scroll",o.validateT)}),c(window,"resize",o.saveViewportOffsetT),c(window,"resize",o.validateT),c(window,"scroll",o.validateT)),e(t)}function e(t){for(var e=t._util,n=0;n<e.count;n++){var i=e.elements[n];(o(i)||s(i,t.options.successClass))&&(t.load(i),e.elements.splice(n,1),e.count--,n--)}0===e.count&&t.destroy()}function o(t){var e=t.getBoundingClientRect();return e.right>=p.left&&e.bottom>=p.top&&e.left<=p.right&&e.top<=p.bottom}function n(t,e,o){if(!s(t,o.successClass)&&(e||o.loadInvisible||t.offsetWidth>0&&t.offsetHeight>0)){var n=t.getAttribute(d)||t.getAttribute(o.src);if(n){var r=n.split(o.separator),a=r[A&&r.length>1?1:0],c="img"===t.nodeName.toLowerCase();if(u(o.breakpoints,function(e){t.removeAttribute(e.src)}),t.removeAttribute(o.src),c||void 0===t.src){var l=new Image;l.onerror=function(){o.error&&o.error(t,"invalid"),i(t,o.errorClass)},l.onload=function(){c?t.src=a:t.style.backgroundImage='url("'+a+'")',i(t,o.successClass),o.success&&o.success(t)},l.src=a}else t.src=a,i(t,o.successClass)}else o.error&&o.error(t,"missing"),s(t,o.errorClass)||i(t,o.errorClass)}}function s(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")}function i(t,e){t.className=t.className+" "+e}function r(t){for(var e=[],o=document.querySelectorAll(t),n=o.length;n--;e.unshift(o[n]));return e}function a(t){p.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,p.right=(window.innerWidth||document.documentElement.clientWidth)+t}function c(t,e,o){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,o):t.addEventListener(e,o,!1)}function l(t,e,o){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,o):t.removeEventListener(e,o,!1)}function u(t,e){if(t&&e)for(var o=t.length,n=0;o>n&&e(t[n],n)!==!1;n++);}function f(t,e,o){var n=0;return function(){var s=+new Date;e>s-n||(n=s,t.apply(o,arguments))}}var d,p,A;return function(o){if(!document.querySelectorAll){var s=document.createStyleSheet();document.querySelectorAll=function(t,e,o,n,i){for(i=document.all,e=[],t=t.replace(/\[for\b/gi,"[htmlFor").split(","),o=t.length;o--;){for(s.addRule(t[o],"k:v"),n=i.length;n--;)i[n].currentStyle.k&&e.push(i[n]);s.removeRule(0)}return e}}var i=this,r=i._util={};r.elements=[],r.destroyed=!0,i.options=o||{},i.options.error=i.options.error||!1,i.options.offset=i.options.offset||100,i.options.success=i.options.success||!1,i.options.selector=i.options.selector||".b-lazy",i.options.separator=i.options.separator||"|",i.options.container=i.options.container?document.querySelectorAll(i.options.container):!1,i.options.errorClass=i.options.errorClass||"b-error",i.options.breakpoints=i.options.breakpoints||!1,i.options.loadInvisible=i.options.loadInvisible||!1,i.options.successClass=i.options.successClass||"b-loaded",i.options.validateDelay=i.options.validateDelay||25,i.options.saveViewportOffsetDelay=i.options.saveViewportOffsetDelay||50,i.options.src=d=i.options.src||"data-src",A=window.devicePixelRatio>1,p={},p.top=0-i.options.offset,p.left=0-i.options.offset,i.revalidate=function(){t(this)},i.load=function(t,e){var o=this.options;void 0===t.length?n(t,e,o):u(t,function(t){n(t,e,o)})},i.destroy=function(){var t=this,e=t._util;t.options.container&&u(t.options.container,function(t){l(t,"scroll",e.validateT)}),l(window,"scroll",e.validateT),l(window,"resize",e.validateT),l(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},r.validateT=f(function(){e(i)},i.options.validateDelay,i),r.saveViewportOffsetT=f(function(){a(i.options.offset)},i.options.saveViewportOffsetDelay,i),a(i.options.offset),u(i.options.breakpoints,function(t){return t.width>=window.screen.width?(d=t.src,!1):void 0}),t(i)}})},function(t,e){},function(t,e){t.exports="<img :src=defaultSrc :class=class />"},function(t,e,o){var n,s;o(4),n=o(1),s=o(5),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e){function o(){if(window.localStorage&&"object"==typeof localStorage&&(!localStorage.getItem(n)||"available"!==localStorage.getItem(n)&&"disable"!==localStorage.getItem(n))){var t=document.createElement("img");t.onload=function(){try{localStorage.setItem(n,"available")}catch(t){}},t.onerror=function(){try{localStorage.setItem(n,"disable")}catch(t){}},t.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA=="}}var n="can_use_webp";o(),t.exports=function(){return!!window.localStorage&&"available"===window.localStorage.getItem(n)}}])});