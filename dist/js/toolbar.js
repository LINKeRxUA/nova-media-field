!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=33)}({0:function(e,t,n){"use strict";function o(e,t,n,o,r,i,u,c){var s,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),o&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},a._ssrRegister=s):r&&(s=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),s)if(a.functional){a._injectStyles=s;var l=a.render;a.render=function(e,t){return s.call(t),l(e,t)}}else{var f=a.beforeCreate;a.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:a}}n.d(t,"a",(function(){return o}))},33:function(e,t,n){e.exports=n(34)},34:function(e,t,n){Nova.booting((function(e,t){e.component("custom-index-toolbar",n(37)),e.component("media-index-toolbar",n(53))}))},37:function(e,t,n){"use strict";n.r(t);var o={props:["resourceName","resourceId"],computed:{component:function(){return this.resourceName+"-index-toolbar"},hasComponent:function(){return this.component in this.$options.components}}},r=n(0),i=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex w-full justify-end items-center mx-3"},[this.hasComponent?t(this.component,{tag:"component"}):this._e()],1)}),[],!1,null,null,null);t.default=i.exports},53:function(e,t,n){"use strict";n.r(t);var o={props:["resourceName","resourceId","field"],mounted:function(){var e=document.querySelector(".content").querySelector('[dusk="create-button"]');e&&e.parentNode.removeChild(e)}},r=n(0),i=Object(r.a)(o,void 0,void 0,!1,null,null,null);t.default=i.exports}});