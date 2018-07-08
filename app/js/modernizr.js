/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-animation-backgroundsize-bgsizecover-bloburls-cookies-datachannel-datauri-eventlistener-exiforientation-flash-flexbox-forcetouch-fullscreen-gamepads-geolocation-hashchange-htmlimports-ie8compat-inlinesvg-json-overflowscrolling-peerconnection-smil-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-urlparser-userdata-websockets-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in B)if(B.hasOwnProperty(l)){if(e=[],t=B[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),w.push((o?"":"no-")+s.join("-"))}}function i(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?T.className.baseVal=t:T.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function l(e,t){if("object"==typeof e)for(var n in e)x(e,n)&&l(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return!!~(""+e).indexOf(t)}function d(e,t){return function(){return e.apply(t,arguments)}}function A(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?d(o,n||t):o);return!1}function f(e,n,r,o){var i,l,c,u,d="modernizr",A=a("div"),f=s();if(parseInt(r,10))for(;r--;)c=a("div"),c.id=o?o[r]:d+(r+1),A.appendChild(c);return i=a("style"),i.type="text/css",i.id="s"+d,(f.fake?f:A).appendChild(i),f.appendChild(A),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),A.id=d,f.fake&&(f.style.background="",f.style.overflow="hidden",u=T.style.overflow,T.style.overflow="hidden",T.appendChild(f)),l=n(A,e),f.fake?(f.parentNode.removeChild(f),T.style.overflow=u,T.offsetHeight):A.parentNode.removeChild(A),!!l}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function g(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+r+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return n}function v(e,t,o,i){function s(){d&&(delete I.style,delete I.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=g(e,o);if(!r(l,"undefined"))return l}for(var d,A,f,p,h,v=["modernizr","tspan","samp"];!I.style&&v.length;)d=!0,I.modElem=a(v.shift()),I.style=I.modElem.style;for(f=e.length,A=0;f>A;A++)if(p=e[A],h=I.style[p],u(p,"-")&&(p=c(p)),I.style[p]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?p:!0;try{I.style[p]=o}catch(E){}if(I.style[p]!=h)return s(),"pfx"==t?p:!0}return s(),!1}function E(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+O.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,i):(s=(e+" "+_.join(a+" ")+a).split(" "),A(s,t,n))}function m(e,t,r){return E(e,n,n,t,r)}var w=[],B=[],Q={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){B.push({name:e,fn:t,options:n})},addAsyncTest:function(e){B.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=Q,Modernizr=new Modernizr,Modernizr.addTest("eventlistener","addEventListener"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var y=!1;try{y="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(S){}Modernizr.addTest("websockets",y),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t}),Modernizr.addTest("urlparser",function(){var e;try{return e=new URL("http://modernizr.com/"),"http://modernizr.com/"===e.href}catch(t){return!1}}),Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}});var T=t.documentElement,C="svg"===T.nodeName.toLowerCase();Modernizr.addTest("userdata",!!a("div").addBehavior),Modernizr.addTest("webanimations","animate"in a("div")),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var b=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();Q.hasEvent=b,Modernizr.addTest("hashchange",function(){return b("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7});var k={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(k.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(k.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(k.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var x;!function(){var e={}.hasOwnProperty;x=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),Q._l={},Q.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},Q._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){Q.addTest=l}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){l("exiforientation",!1,{aliases:["exif-orientation"]})},e.onload=function(){l("exiforientation",2!==e.width,{aliases:["exif-orientation"]})},e.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="}),Modernizr.addAsyncTest(function(){var n,r,o=function(e){T.contains(e)||T.appendChild(e)},i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},c=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),l("flash",function(){return n}),t&&p.contains(t)){for(;t.parentNode!==p;)t=t.parentNode;p.removeChild(t)}};try{r="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){}if(n=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||r),n||C)c(!1);else{var d,A,f=a("embed"),p=s();if(f.type="application/x-shockwave-flash",p.appendChild(f),!("Pan"in f||r))return o(p),c("blocked",f),void i(p);d=function(){return o(p),T.contains(p)?(T.contains(f)?(A=f.style.cssText,""!==A?c("blocked",f):c(!0,f)):c("blocked"),void i(p)):(p=t.body||p,f=a("embed"),f.type="application/x-shockwave-flash",p.appendChild(f),setTimeout(d,1e3))},setTimeout(d,10)}}),l("htmlimports","import"in a("link")),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){l("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=!1},e.onload=function(){l("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=1==e.width&&1==e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){l("datauri",!1)},10);var t=new Image;t.onerror=function(){l("datauri",!1)},t.onload=function(){1==t.width&&1==t.height?e():l("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="});var R="Moz O ms Webkit",_=Q._config.usePrefixes?R.toLowerCase().split(" "):[];Q._domPrefixes=_;var O=Q._config.usePrefixes?R.split(" "):[];Q._cssomPrefixes=O;var N=function(t){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=prefixes[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};Q.atRule=N;var P={elem:a("modernizr")};Modernizr._q.push(function(){delete P.elem});var I={style:P.elem.style};Modernizr._q.unshift(function(){delete I.style}),Q.testAllProps=E;var U=Q.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=c(e)),t?E(e,t,n):E(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return b(U("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),Modernizr.addTest("fullscreen",!(!U("exitFullscreen",t,!1)&&!U("cancelFullScreen",t,!1))),Modernizr.addTest("gamepads",!!U("getGamepads",navigator));var j=U("URL",e,!1);j=j&&e[j],Modernizr.addTest("bloburls",j&&"revokeObjectURL"in j&&"createObjectURL"in j),Modernizr.addTest("peerconnection",!!U("RTCPeerConnection",e)),Modernizr.addTest("datachannel",function(){if(!Modernizr.peerconnection)return!1;for(var t=0,n=_.length;n>t;t++){var r=e[_[t]+"RTCPeerConnection"];if(r){var o=new r(null);return"createDataChannel"in o}}return!1}),Q.testAllProps=m,Modernizr.addTest("overflowscrolling",m("overflowScrolling","touch",!0)),Modernizr.addTest("backgroundsize",m("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",m("backgroundSize","cover")),Modernizr.addTest("flexbox",m("flexBasis","1px",!0)),o(),i(w),delete Q.addTest,delete Q.addAsyncTest;for(var F=0;F<Modernizr._q.length;F++)Modernizr._q[F]();e.Modernizr=Modernizr}(window,document);