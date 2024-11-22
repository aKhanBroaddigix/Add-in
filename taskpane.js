/*! For license information please see taskpane.js.LICENSE.txt */
!function(){var e={60947:function(e,t,r){"use strict";e.exports=r.p+"bab9fa07d3a67b2478ef.js"},58394:function(e,t,r){"use strict";e.exports=r.p+"27fa78f032a95c64dbe8.css"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),r.b=document.baseURI||self.location.href,function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";t=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(r){f=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof w?t:w,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:O(e,r,c)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=p;var g="suspendedStart",h="suspendedYield",y="executing",m="completed",v={};function w(){}function b(){}function E(){}var x={};f(x,u,(function(){return this}));var I=Object.getPrototypeOf,S=I&&I(I(R([])));S&&S!==o&&a.call(S,u)&&(x=S);var k=E.prototype=w.prototype=Object.create(x);function B(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function L(t,r){function n(o,i,c,u){var s=d(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==e(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,c,u)}),(function(e){n("throw",e,c,u)})):r.resolve(f).then((function(e){l.value=e,c(l)}),(function(e){return n("throw",e,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(a,a):a()}})}function O(e,t,n){var o=g;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===g)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=d(e,t,n);if("normal"===s.type){if(o=n.done?m:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function T(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,T(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=d(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,v;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function R(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=E,i(k,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:b,configurable:!0}),b.displayName=f(E,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,f(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},n.awrap=function(e){return{__await:e}},B(L.prototype),f(L.prototype,s,(function(){return this})),n.AsyncIterator=L,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new L(p(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},B(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=R,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:R(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,u,"next",e)}function u(e){r(i,o,a,c,u,"throw",e)}c(void 0)}))}}Office.onReady((function(e){if(e.host===Office.HostType.Excel){var r=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];p.textContent=e,f.style.backgroundColor=t?"#f8d7da":"#d4edda",f.style.color=t?"#721c24":"#155724",f.style.display="block",setTimeout((function(){f.style.display="none"}),5e3)},o=document.getElementById("settingsButton"),a=document.getElementById("settingsModal"),i=document.getElementById("closeSettings"),c=document.getElementById("settingsForm"),u=document.getElementById("classificationForm"),s=document.getElementById("selectRangeButton"),l=document.getElementById("selectCategoriesButton"),f=document.getElementById("notification"),p=document.getElementById("notificationMessage"),d=document.getElementById("result"),g=function(e){return!e||e.length<=4?"****":"********"+e.slice(-4)};o.onclick=function(){var e;e=localStorage.getItem("apiKey"),document.getElementById("apiKey").value=e?g(e):"",document.getElementById("model").value=localStorage.getItem("model")||"gpt-4",document.getElementById("maxTokens").value=localStorage.getItem("maxTokens")||"50",document.getElementById("temperature").value=localStorage.getItem("temperature")||"0.5",a.style.display="block"},i.onclick=function(){a.style.display="none"},c.onsubmit=function(e){var t,n;e.preventDefault(),t=document.getElementById("apiKey").value.trim(),n=localStorage.getItem("apiKey"),t&&t!==g(n)&&localStorage.setItem("apiKey",t),localStorage.setItem("model",document.getElementById("model").value.trim()),localStorage.setItem("maxTokens",document.getElementById("maxTokens").value.trim()),localStorage.setItem("temperature",document.getElementById("temperature").value.trim()),r("Settings saved successfully!",!1),a.style.display="none"},s&&(s.onclick=n(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Excel.run(function(){var e=n(t().mark((function e(n){var o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=n.workbook.getSelectedRange()).load(["address","values"]),e.next=4,n.sync();case 4:document.getElementById("inputRange").value=o.address,document.getElementById("inputRange").dataset.values=JSON.stringify(o.values),console.log("Selected input range:",o.values),r("Range selected successfully!",!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Error selecting range:",e.t0),r("Error selecting range: "+e.t0.message,!0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))),l&&(l.onclick=n(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Excel.run(function(){var e=n(t().mark((function e(n){var o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=n.workbook.getSelectedRange()).load(["address","values"]),e.next=4,n.sync();case 4:document.getElementById("categories").value=o.address,document.getElementById("categories").dataset.values=JSON.stringify(o.values),console.log("Selected categories:",o.values),r("Categories selected successfully!",!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Error selecting categories:",e.t0),r("Error selecting categories: "+e.t0.message,!0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))),u.onsubmit=function(){var e=n(t().mark((function e(n){var o,a,i,c,u,s,l,f,p,g,h,y;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o=localStorage.getItem("apiKey"),a=localStorage.getItem("model"),i=parseInt(localStorage.getItem("maxTokens"),10),c=parseFloat(localStorage.getItem("temperature")),o){e.next=8;break}return r("Please set your API key in the settings.",!0),e.abrupt("return");case 8:if(u=document.getElementById("inputRange").value,s=document.getElementById("categories").value,l=document.getElementById("instructions").value,f=JSON.parse(document.getElementById("inputRange").dataset.values||"[]"),p=JSON.parse(document.getElementById("categories").dataset.values||"[]"),u&&s){e.next=16;break}return r("Please fill in all required fields!",!0),e.abrupt("return");case 16:return e.prev=16,g={apiKey:o,model:a,maxTokens:i,temperature:c,inputRange:u,inputData:f,categories:p.flat(),instructions:l},console.log("Payload being sent to backend:",g),r("Processing your request...",!1),e.next=22,fetch("http://localhost:5000/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});case 22:return h=e.sent,e.next=25,h.json();case 25:y=e.sent,h.ok?(console.log("Response from backend:",y),d.textContent=JSON.stringify(y,null,2),r("Analysis completed successfully!",!1)):(console.error("Error from server:",y.error),r("Error: "+y.error,!0)),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(16),console.error("Error during fetch:",e.t0),r("An error occurred while connecting to the server.",!0);case 33:case"end":return e.stop()}}),e,null,[[16,29]])})));return function(t){return e.apply(this,arguments)}}(),localStorage.getItem("apiKey")||(a.style.display="block")}}))}(),function(){"use strict";new URL(r(58394),r.b),new URL(r(60947),r.b)}()}();
//# sourceMappingURL=taskpane.js.map