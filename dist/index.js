!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("woerd",[],t):"object"==typeof exports?exports.woerd=t():e.woerd=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={tag:"div",index:t,content:"",children:[]},r=0,i=n;for(e=e.trim(),"<"===e[0]&&(r=e.indexOf(">"),n.tag=e.slice(1,r++));r<e.length;){var c=e[r++],s=e[r],a=r;if("<"===c&&"/"!==s){r=e.indexOf(">",a);var f=e.slice(a,r++),u={},d=f.indexOf(" "),l=d+1,p=void 0,x=void 0,v=3;if(d<0)x=f;else for(x=f.slice(0,d);v--&&!((p=f.indexOf("=",l))<0);){var g=f.slice(l,p);l=p+2,p=f.indexOf('"',l),u[g]=f.slice(l,p),l=p+2}var h=i;i={tag:x,attrs:u,index:i.content.length,content:"",children:[]},i.parent=h,h.children.push(i),o.indexOf(x)>=0&&(i=h)}else if("<"===c&&"/"===s){r=e.indexOf(">",a);var m=e.slice(a+1,r++);m!==i.tag?console.warn("Malformed HTML! Expected",i.tag,"but got",m):i=i.parent}else r=e.indexOf("<",r),i.content+=c+e.slice(a,r),-1===r&&(r=e.length)}return n}var o=["img","br"];t.a=r},function(e,t,n){"use strict";function r(e,t){for(var n=t.content,o=[],i=0,c=0;c<t.children.length;c++){var s=t.children[c];o.push(n.slice(i,s.index)),o.push(r(e,s)),i=s.index}return o.push(n.slice(i)),e(t.tag,{attrs:t.attrs},o)}var o=n(0);t.a={functional:!0,name:"woerd",props:{content:{type:String,default:'<p>Hello <i>World</i>. This <s class="foo">was</s><b>is</b> a <i>test</i>.<img src="foo.svg" alt="some image"></p>'}},methods:{},render:function(e,t){return r(e,n.i(o.a)(t.props.content))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0);t.default={Woerd:r.a,HTMLParser:o.a}}])});