!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("woerd",[],t):"object"==typeof exports?exports.woerd=t():e.woerd=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={tag:"div",index:t,content:"",children:[]},r=0,o=n;for(e=e.trim(),"<"===e[0]&&(r=e.indexOf(">"),n.tag=e.slice(1,r++));r<e.length;){var i=e[r++],c=e[r],u=r;if("<"===i&&"/"!==c){r=e.indexOf(">",u);var l=e.slice(u,r++),a=o;o={tag:l,index:o.content.length,content:"",children:[]},o.parent=a,a.children.push(o)}else if("<"===i&&"/"===c){r=e.indexOf(">",u);var s=e.slice(u+1,r++);s!==o.tag?console.warn("Malformed HTML! Expected",o.tag,"but got",s):o=o.parent}else r=e.indexOf("<",r),o.content+=i+e.slice(u,r),-1===r&&(r=e.length)}return n}t.a=r},function(e,t,n){"use strict";var r=n(0);t.a={name:"woerd",props:{},data:function(){return{content:"<p>Hello <i>World</i>. This <s>was</s><b>is</b> a <i>test</i>.</p>"}},methods:{fromEl:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.tag,r="",o=[],i=0;i<e.children.length;i++){var c=e.children[i];c.text?r+=c.text:c.tag&&o.push(this.fromEl(c,r.length))}return{tag:n,index:t,content:r,children:o}},toEl:function(e,t){for(var n=t.content,r=[],o=0,i=0;i<t.children.length;i++){var c=t.children[i];r.push(n.slice(o,c.index)),r.push(this.toEl(e,c)),o=c.index}return r.push(n.slice(o)),e(t.tag,r)}},render:function(e){var t=n.i(r.a)(this.content);return this.toEl(e,t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0);t.default={Woerd:r.a,HTMLParser:o.a}}])});