var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,e,m){a!=Array.prototype&&a!=Object.prototype&&(a[e]=m.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var e=0;return $jscomp.iteratorPrototype(function(){return e<a.length?{done:!1,value:a[e++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,e){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var m=0,g={next:function(){if(m<a.length){var n=m++;return{value:e(n,a[n]),done:!1}}g.next=function(){return{done:!0,value:void 0}};return g.next()}};g[Symbol.iterator]=function(){return g};return g};
$jscomp.polyfill=function(a,e,m,g){if(e){m=$jscomp.global;a=a.split(".");for(g=0;g<a.length-1;g++){var n=a[g];n in m||(m[n]={});m=m[n]}a=a[a.length-1];g=m[a];e=e(g);e!=g&&null!=e&&$jscomp.defineProperty(m,a,{configurable:!0,writable:!0,value:e})}};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");var module$Input_0={};
(function(a,e){"object"===typeof module$Input_0&&"undefined"!==typeof module?module$Input_0=e():"function"===typeof define&&define.amd?define(e):a.woerd=e()})(this,function(){function a(h){for(var k=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,l=h.tag,c="",f=[],b=0;b<h.children.length;b++){var d=h.children[b];d.text?c+=d.text:d.tag&&f.push(a(d,c.length))}return{tag:l,index:k,content:c,children:f}}function e(a,k){for(var h=k.content,c=[],f=0,b=0;b<k.children.length;b++){var d=k.children[b];
c.push(h.slice(f,d.index));c.push(e(a,d));f=d.index}c.push(h.slice(f));return a(k.tag,{attrs:k.attrs},c)}function m(a){for(var h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,l=a.tagName,c="",f=[],b=0;b<a.children.length;b++){var d=a.children[b];d.nodeType===d.TEXT_NODE?c+=d.textContent:d.nodeType===d.ELEMENT_NODE&&f.push(m(d,c.length))}return{tag:l,index:h,content:c,children:f}}function g(a,k){for(var h=a.createTextNode,c=k.content,f=[],b=0,d=0;d<k.children.length;d++){var e=k.children[d];
f.push(h(c.slice(b,e.index)));f.push(g(a,e));b=e.index}f.push(c.slice(b));h=k.attrs;a=a.createElement(k.tag);k=Object.keys(h);c=0;for(b=k[c];c<k.length;c++)a.setAttribute(b,h[b]);for(k=0;k<f.length;k++)a.appendChild(f[k]);return a}var n=["img","br"];return{HTMLParser:function(a){var e={tag:"div",index:1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,content:"",children:[]},l=0,c=e;a=a.trim();"\x3c"===a[0]&&(l=a.indexOf("\x3e"),e.tag=a.slice(1,l++));for(;l<a.length;){var f=a[l++],b=a[l],d=
l;if("\x3c"===f&&"/"!==b){l=a.indexOf("\x3e",d);b=a.slice(d,l++);f={};var g=b.indexOf(" ");d=g+1;var m=3;if(0>g)g=b;else for(g=b.slice(0,g);m--;){var h=b.indexOf("\x3d",d);if(0>h)break;var p=b.slice(d,h);d=h+2;h=b.indexOf('"',d);f[p]=b.slice(d,h);d=h+2}b=c;c={tag:g,attrs:f,index:c.content.length,content:"",children:[]};c.parent=b;b.children.push(c);0<=n.indexOf(g)&&(c=b)}else"\x3c"===f&&"/"===b?(l=a.indexOf("\x3e",d),f=a.slice(d+1,l++),f!==c.tag?console.warn("Malformed HTML! Expected",c.tag,"but got",
f):c=c.parent):(l=a.indexOf("\x3c",l),c.content+=f+a.slice(d,l),-1===l&&(l=a.length))}return e},fromVDOM:a,toVDOM:e,fromNative:m,toNative:g}});
//# sourceMappingURL=index.js.map
