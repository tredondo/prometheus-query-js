/*!
 * prometheus-query v3.0.3
 * github.com/samber/prometheus-query-js
 * (c) 2021 prometheus-query-js Contributors
 * Released under the MIT License
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Prometheus={})}(this,(function(e){"use strict";var t=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},r=Object.prototype.toString;function n(e){return"[object Array]"===r.call(e)}function o(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function a(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function i(e){return"[object Function]"===r.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}var c={isArray:n,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:a,isUndefined:o,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:i,isStream:function(e){return s(e)&&i(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function r(r,o){a(t[o])&&a(r)?t[o]=e(t[o],r):a(r)?t[o]=e({},r):n(r)?t[o]=r.slice():t[o]=r}for(var o=0,s=arguments.length;o<s;o++)u(arguments[o],r);return t},extend:function(e,r,n){return u(r,(function(r,o){e[o]=n&&"function"==typeof r?t(r,n):r})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function f(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var l=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(c.isURLSearchParams(t))n=t.toString();else{var o=[];c.forEach(t,(function(e,t){null!=e&&(c.isArray(e)?t+="[]":e=[e],c.forEach(e,(function(e){c.isDate(e)?e=e.toISOString():c.isObject(e)&&(e=JSON.stringify(e)),o.push(f(t)+"="+f(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function p(){this.handlers=[]}p.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},p.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},p.prototype.forEach=function(e){c.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var h=p,d=function(e,t){c.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},m=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},g=function(e,t,r,n,o){var s=new Error(e);return m(s,t,r,n,o)},y=c.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),c.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),c.isString(n)&&a.push("path="+n),c.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},b=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],v=c.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=c.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},w=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers,s=e.responseType;c.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+u)}var f,p,h=(f=e.baseURL,p=e.url,f&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(p)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(f,p):p);function d(){if(a){var n,o,i,u,f,l="getAllResponseHeaders"in a?(n=a.getAllResponseHeaders(),f={},n?(c.forEach(n.split("\n"),(function(e){if(u=e.indexOf(":"),o=c.trim(e.substr(0,u)).toLowerCase(),i=c.trim(e.substr(u+1)),o){if(f[o]&&b.indexOf(o)>=0)return;f[o]="set-cookie"===o?(f[o]?f[o]:[]).concat([i]):f[o]?f[o]+", "+i:i}})),f):f):null,p={data:s&&"text"!==s&&"json"!==s?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:l,config:e,request:a};!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(g("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,p),a=null}}if(a.open(e.method.toUpperCase(),l(h,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,"onloadend"in a?a.onloadend=d:a.onreadystatechange=function(){a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))&&setTimeout(d)},a.onabort=function(){a&&(r(g("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(g("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(g(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},c.isStandardBrowserEnv()){var m=(e.withCredentials||v(h))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;m&&(o[e.xsrfHeaderName]=m)}"setRequestHeader"in a&&c.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),c.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),s&&"json"!==s&&(a.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},E={"Content-Type":"application/x-www-form-urlencoded"};function T(e,t){!c.isUndefined(e)&&c.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var x,S={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(x=w),x),transformRequest:[function(e,t){return d(t,"Accept"),d(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(T(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&"application/json"===t["Content-Type"]?(T(t,"application/json"),function(e,t,r){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw m(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};S.headers={common:{Accept:"application/json, text/plain, */*"}},c.forEach(["delete","get","head"],(function(e){S.headers[e]={}})),c.forEach(["post","put","patch"],(function(e){S.headers[e]=c.merge(E)}));var j=S,O=function(e,t,r){var n=this||j;return c.forEach(r,(function(r){e=r.call(n,e,t)})),e},N=function(e){return!(!e||!e.__CANCEL__)};function R(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var k=function(e){return R(e),e.headers=e.headers||{},e.data=O.call(e,e.data,e.headers,e.transformRequest),e.headers=c.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),c.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||j.adapter)(e).then((function(t){return R(e),t.data=O.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return N(t)||(R(e),t&&t.response&&(t.response.data=O.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},A=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function i(e,t){return c.isPlainObject(e)&&c.isPlainObject(t)?c.merge(e,t):c.isPlainObject(t)?c.merge({},t):c.isArray(t)?t.slice():t}function u(n){c.isUndefined(t[n])?c.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}c.forEach(n,(function(e){c.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),c.forEach(o,u),c.forEach(s,(function(n){c.isUndefined(t[n])?c.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),c.forEach(a,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var f=n.concat(o).concat(s).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return c.forEach(l,u),r},C={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},U={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){U[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var P={},q=C.version.split(".");function D(e,t){for(var r=t?t.split("."):q,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}U.transitional=function(e,t,r){var n=t&&D(t);function o(e,t){return"[Axios v"+C.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,s,a){if(!1===e)throw new Error(o(s," has been removed in "+t));return n&&!P[s]&&(P[s]=!0,console.warn(o(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,s,a)}};var J={isOlderVersion:D,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var s=n[o],a=t[s];if(a){var i=e[s],u=void 0===i||a(i,s,e);if(!0!==u)throw new TypeError("option "+s+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+s)}},validators:U},G=J.validators;function L(e){this.defaults=e,this.interceptors={request:new h,response:new h}}L.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=A(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&J.assertOptions(t,{silentJSONParsing:G.transitional(G.boolean,"1.0.0"),forcedJSONParsing:G.transitional(G.boolean,"1.0.0"),clarifyTimeoutError:G.transitional(G.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var o,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!n){var a=[k,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(s),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var i=e;r.length;){var u=r.shift(),c=r.shift();try{i=u(i)}catch(e){c(e);break}}try{o=k(i)}catch(e){return Promise.reject(e)}for(;s.length;)o=o.then(s.shift(),s.shift());return o},L.prototype.getUri=function(e){return e=A(this.defaults,e),l(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},c.forEach(["delete","get","head","options"],(function(e){L.prototype[e]=function(t,r){return this.request(A(r||{},{method:e,url:t,data:(r||{}).data}))}})),c.forEach(["post","put","patch"],(function(e){L.prototype[e]=function(t,r,n){return this.request(A(n||{},{method:e,url:t,data:r}))}}));var B=L;function _(e){this.message=e}_.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},_.prototype.__CANCEL__=!0;var $=_;function F(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new $(e),t(r.reason))}))}F.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},F.source=function(){var e;return{token:new F((function(t){e=t})),cancel:e}};var I=F;function M(e){var r=new B(e),n=t(B.prototype.request,r);return c.extend(n,B.prototype,r),c.extend(n,r),n}var H=M(j);H.Axios=B,H.create=function(e){return M(A(H.defaults,e))},H.Cancel=$,H.CancelToken=I,H.isCancel=N,H.all=function(e){return Promise.all(e)},H.spread=function(e){return function(t){return e.apply(null,t)}},H.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var V=H,z=H;V.default=z;var W,X=V;e.ResponseType=void 0,(W=e.ResponseType||(e.ResponseType={})).MATRIX="matrix",W.VECTOR="vector",W.SCALAR="scalar",W.STRING="string";class Q{constructor(e,t){if(e&&"string"!=typeof e)throw new Error("Wrong name format. Expected string.");if(t&&"object"!=typeof t)throw new Error("Wrong labels format. Expected object.");this.name=e,this.labels=t}static fromJSON(e){const t=e.__name__,r=Object.assign({},e);return delete r.__name__,new Q(t,r)}toString(){return(this.name?this.name:"")+"{"+Object.keys(this.labels).map((e=>e+'="'+this.labels[e]+'"')).join(", ")+"}"}}class K{constructor(e,t){if("object"!=typeof e||"Date"!=e.constructor.name)throw new Error("Wrong time format. Expected Date.");if("number"!=typeof t)throw new Error("Wrong value format. Expected float.");this.time=e,this.value=t}static fromJSON(e){const t=new Date(1e3*e[0]),r=parseFloat(e[1]);return new K(t,r)}toString(){return this.time+": "+this.value}}class Z{constructor(e,t){this.metric=e,this.values=t}static fromJSON(e){const t=e.metric?Q.fromJSON(e.metric):null,r=e.values.map(K.fromJSON);return new Z(t,r)}}class Y{constructor(e,t){this.metric=e,this.value=t}static fromJSON(e){const t=e.metric?Q.fromJSON(e.metric):null,r=K.fromJSON(e.value);return new Y(t,r)}}class ee{constructor(e,t){this.resultType=e,this.result=t}static fromJSON(t){const r=t.resultType;let n=null;switch(r){case e.ResponseType.MATRIX:n=t.result.map(Z.fromJSON);break;case e.ResponseType.VECTOR:n=t.result.map(Y.fromJSON);break;case e.ResponseType.SCALAR:case e.ResponseType.STRING:n=t.result;break;default:throw new Error(`Unexpected resultType: ${r}`)}return new ee(r,n)}}class te{constructor(e,t,r,n,o,s,a,i){if(e&&"object"!=typeof e)throw new Error(`Unexpected format for discoveredLabels. Got ${typeof e} instead of object`);if(t&&"object"!=typeof t)throw new Error(`Unexpected format for labels. Got ${typeof t} instead of object`);if(r&&"string"!=typeof r)throw new Error(`Unexpected format for scrapePool. Got ${typeof r} instead of string`);if(n&&"string"!=typeof n)throw new Error(`Unexpected format for scrapeUrl. Got ${typeof n} instead of string`);if(o&&"string"!=typeof o)throw new Error(`Unexpected format for lastError. Got ${typeof o} instead of string`);if(s&&("object"!=typeof s||"Date"!=s.constructor.name))throw new Error(`Unexpected format for lastScrape. Got ${typeof s} instead of object`);if(a&&"number"!=typeof a)throw new Error(`Unexpected format for lastScrapeDuration. Got ${typeof a} instead of number`);if(i&&"string"!=typeof i)throw new Error(`Unexpected format for health. Got ${typeof i} instead of string`);this.discoveredLabels=e,this.labels=t,this.scrapePool=r,this.scrapeUrl=n,this.lastError=o,this.lastScrape=s,this.lastScrapeDuration=a,this.health=i}static fromJSON(e){return new te(e.discoveredLabels,e.labels,e.scrapePool,e.scrapeUrl,e.lastError,e.lastScrape?new Date(e.lastScrape):null,e.lastScrapeDuration?parseFloat(e.lastScrapeDuration):null,e.health)}}class re{constructor(e,t,r,n,o){if(e&&("object"!=typeof e||"Date"!=e.constructor.name))throw new Error(`Unexpected format for activeAt. Got ${typeof e} instead of object`);if(t&&"object"!=typeof t)throw new Error(`Unexpected format for annotations. Got ${typeof t} instead of object`);if(r&&"object"!=typeof r)throw new Error(`Unexpected format for labels. Got ${typeof r} instead of object`);if(o&&"number"!=typeof o)throw new Error(`Unexpected format for value. Got ${typeof o} instead of number`);this.activeAt=e,this.annotations=t,this.labels=r,this.state=n,this.value=o}static fromJSON(t){return new re(t.activeAt?new Date(t.activeAt):null,t.annotations,t.labels,e.ResponseType[t.state],t.value?parseFloat(t.value):null)}}class ne{constructor(e,t,r,n,o,s,a,i){this.alerts=e,this.annotations=t,this.duration=r,this.health=n,this.labels=o,this.name=s,this.query=a,this.type=i}static fromJSON(e){return new ne(e.alerts?e.alerts.map(re.fromJSON):[],e.annotations,e.duration,e.health,e.labels,e.name,e.query,e.type)}}class oe{constructor(e,t,r,n){this.rules=e,this.file=t,this.interval=r,this.name=n}static fromJSON(e){return new oe(e.rules?e.rules.map(ne.fromJSON):[],e.file,e.interval,e.name)}}class se{constructor(){this.baseURL="/api/v1/",this.headers={},this.auth=null,this.proxy=null,this.withCredentials=!1,this.timeout=1e4,this.warningHook=null}}e.Alert=re,e.InstantVector=Y,e.Metric=Q,e.PrometheusConnectionOptions=se,e.PrometheusDriver=class{constructor(e){if(!(e=e||new se).endpoint)throw"Endpoint is required";e.endpoint=e.endpoint.replace(/\/$/,""),e.baseURL=e.baseURL||"/api/v1/",e.withCredentials=e.withCredentials||!1,e.timeout=e.timeout||1e4,this.options=e}request(e,t,r,n){var o,s,a,i,u,c;const f=Object.assign({},this.options.headers||{});return X.request({baseURL:this.options.endpoint+this.options.baseURL,url:t,method:e,params:r,data:n,headers:f,auth:(null===(o=this.options.auth)||void 0===o?void 0:o.username)&&(null===(s=this.options.auth)||void 0===s?void 0:s.password)?{username:this.options.auth.username,password:this.options.auth.password}:null,proxy:(null===(a=this.options.proxy)||void 0===a?void 0:a.host)&&(null===(i=this.options.proxy)||void 0===i?void 0:i.port)?{host:null===(u=this.options.proxy)||void 0===u?void 0:u.host,port:null===(c=this.options.proxy)||void 0===c?void 0:c.port}:null,withCredentials:this.options.withCredentials,timeout:this.options.timeout}).then((e=>this.handleResponse(e))).catch((e=>this.handleResponse(e)))}handleResponse(e){const t=e.isAxiosError||!1;if(t&&(e=e.response),!e)throw{status:"error",errorType:"unexpected_error",error:"unexpected http error"};this.options.warningHook&&e.warnings&&e.warnings.length>0&&this.options.warningHook(e.warnings);const r=e.data;if(!r||null==r.status)throw{status:"error",errorType:"client_error",error:"unexpected client error"};if(t)throw e;return r.data}formatTimeToPrometheus(e,t){var r;if(e||(e=t),"number"==typeof e)return e/1e3;if("object"==typeof e&&"Date"==(null===(r=null==e?void 0:e.constructor)||void 0===r?void 0:r.name))return e.getTime()/1e3;throw new Error("Wrong time format. Expected number or Date.")}instantQuery(e,t){const r={query:e,time:this.formatTimeToPrometheus(t,new Date)};return this.request("GET","query",r).then((e=>ee.fromJSON(e)))}rangeQuery(e,t,r,n){const o={query:e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r),step:n};return this.request("GET","query_range",o).then((e=>ee.fromJSON(e)))}series(e,t,r){const n={"match[]":e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r)};return this.request("GET","series",n).then((e=>e.map(Q.fromJSON)))}labelNames(){return this.request("GET","labels")}labelValues(e){return this.request("GET",`label/${e}/values`)}targets(e){const t={query:e||"any"};return this.request("GET","targets",t).then((e=>({activeTargets:e.activeTargets?e.activeTargets.map(te.fromJSON):[],droppedTargets:e.droppedTargets?e.droppedTargets.map(te.fromJSON):[]})))}targetsMetadata(e,t,r){const n={match_target:e,metric:t,limit:r};return this.request("GET","targets/metadata",n)}metadata(e,t){const r={metric:e,limit:t};return this.request("GET","metadata",r)}rules(){return this.request("GET","rules").then((e=>(e.groups?e.groups:[]).map(oe.fromJSON)))}alerts(){return this.request("GET","alerts").then((e=>(e.alerts?e.alerts:[]).map(re.fromJSON)))}alertmanagers(){return this.request("GET","alertmanagers")}status(){return this.request("GET","status/config")}statusFlags(){return this.request("GET","status/flags")}statusRuntimeInfo(){return this.request("GET","status/runtimeinfo")}statusBuildinfo(){return this.request("GET","status/buildinfo")}statusTSDB(){return this.request("GET","status/tsdb")}adminSnapshot(e){const t={skip_head:e};return this.request("POST","admin/tsdb/snapshot",t)}adminDeleteSeries(e,t,r){const n={"match[]":e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r)};return this.request("POST","admin/tsdb/delete_series",n)}adminCleanTombstones(){return this.request("POST","admin/tsdb/clean_tombstones")}},e.QueryResult=ee,e.RangeVector=Z,e.Rule=ne,e.RuleGroup=oe,e.SampleValue=K,e.Target=te,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=prometheus-query.umd.js.map
