/*! For license information please see LICENSES */
webpackJsonp([11],{"21It":function(t,e,n){"use strict";var o=n("FtD3");t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(o("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"4swq":function(t,e,n){"use strict";e.c=function(t,e,n){r.a.set(i,t),r.a.set(a,e),r.a.set(s,n)},e.a=function(){return{token:r.a.get(i),name:r.a.get(a),avatar:r.a.get(s)}},e.b=function(){r.a.remove(i),r.a.remove(a),r.a.remove(s)};var o=n("lbHh"),r=n.n(o),i="User-Token",a="User-Name",s="User-Avatar"},"5VQ+":function(t,e,n){"use strict";var o=n("cGG2");t.exports=function(t,e){o.forEach(t,function(n,o){o!==e&&o.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[o])})}},"7GwW":function(t,e,n){"use strict";var o=n("cGG2"),r=n("21It"),i=n("p1b6"),a=n("DQCr"),s=n("Oi+a"),c=n("oJlt"),l=n("GHBc"),f=n("FtD3");t.exports=function(t){return new Promise(function(e,n){var p=t.data,u=t.headers;o.isFormData(p)&&delete u["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var m=t.auth.username||"",h=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";u.Authorization="Basic "+btoa(m+":"+h)}var g=s(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),a(g,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var o="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,i={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:o,config:t,request:d};r(e,n,i),d=null}},d.onabort=function(){d&&(n(f("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(f("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(f(e,t,"ECONNABORTED",d)),d=null},o.isStandardBrowserEnv()){var x=(t.withCredentials||l(g))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;x&&(u[t.xsrfHeaderName]=x)}if("setRequestHeader"in d&&o.forEach(u,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete u[e]:d.setRequestHeader(e,t)}),o.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),n(t),d=null)}),p||(p=null),d.send(p)})}},"9OD+":function(t,e,n){t.exports=n.p+"img/widget-photo.7d3443e.png"},DQCr:function(t,e,n){"use strict";var o=n("cGG2");function r(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var a=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))}))}),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},DUeU:function(t,e,n){"use strict";var o=n("cGG2");t.exports=function(t,e){e=e||{};var n={},r=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(t,e){return o.isPlainObject(t)&&o.isPlainObject(e)?o.merge(t,e):o.isPlainObject(e)?o.merge({},e):o.isArray(e)?e.slice():e}function l(r){o.isUndefined(e[r])?o.isUndefined(t[r])||(n[r]=c(void 0,t[r])):n[r]=c(t[r],e[r])}o.forEach(r,function(t){o.isUndefined(e[t])||(n[t]=c(void 0,e[t]))}),o.forEach(i,l),o.forEach(a,function(r){o.isUndefined(e[r])?o.isUndefined(t[r])||(n[r]=c(void 0,t[r])):n[r]=c(void 0,e[r])}),o.forEach(s,function(o){o in e?n[o]=c(t[o],e[o]):o in t&&(n[o]=c(void 0,t[o]))});var f=r.concat(i).concat(a).concat(s),p=Object.keys(t).concat(Object.keys(e)).filter(function(t){return-1===f.indexOf(t)});return o.forEach(p,l),n}},FtD3:function(t,e,n){"use strict";var o=n("t8qj");t.exports=function(t,e,n,r,i){var a=new Error(t);return o(a,e,n,r,i)}},GHBc:function(t,e,n){"use strict";var o=n("cGG2");t.exports=o.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var o=t;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=o.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},"JP+z":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return t.apply(e,n)}}},KCLY:function(t,e,n){"use strict";(function(e){var o=n("cGG2"),r=n("5VQ+"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n("7GwW"):void 0!==e&&"[object process]"===Object.prototype.toString.call(e)&&(t=n("7GwW")),t}(),transformRequest:[function(t,e){return r(e,"Accept"),r(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],function(t){s.headers[t]={}}),o.forEach(["post","put","patch"],function(t){s.headers[t]=o.merge(i)}),t.exports=s}).call(e,n("W2nU"))},Ohc8:function(t,e,n){"use strict";var o=n("ji78"),r=(n.n(o),n("p/xF")),i=n("4swq");e.a={created:function(){this.getCollect(),this.user=Object(i.a)()},data:function(){return{page:{pageNum:1,pageSize:5},dataForm:{content:[],pageNum:"",pageSize:"",totalPages:"",totalSize:0}}},methods:{getCollect:function(){var t=this;r.a.getCollect(2,this.page.pageNum,this.page.pageSize).then(function(e){null!==e.data.data&&(t.dataForm=e.data.data)})},refreshPageRequest:function(t){this.page.pageNum=t,this.getCollect()},deleteCollect:function(t){var e=this;r.a.deleteCollect(t,2).then(function(t){e.getCollect(),e.$message({message:t.data.msg,type:200===t.data.code?"success":"error"})})}}}},"Oi+a":function(t,e,n){"use strict";var o=n("dIwP"),r=n("qRfI");t.exports=function(t,e){return t&&!o(e)?r(t,e):e}},R3AP:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"focus-list"},[o("div",{staticClass:"mycollect-list"},[t._m(0),o("div",{staticClass:"tab-content tab-wraped"},[o("div",{staticClass:"tab-pane active",attrs:{id:"one"}},[t._l(t.dataForm.content,function(e,r){return o("ul",{key:r,staticClass:"collect-list"},[o("li",{staticClass:"collect-item"},[o("div",{staticClass:"intro"},[o("div",{staticClass:"fl border"},[o("span",{staticClass:"fa fa-thumbs-up",attrs:{"aria-hidden":"true"}}),o("span",{staticClass:"usenum"},[t._v(t._s(e.thumbup))]),o("span",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}})]),o("div",{staticClass:"fl content"},[o("p",{staticClass:"title"},[o("a",{attrs:{href:"/problem/problem/"+e.id,target:"_blank"}},[t._v(t._s(e.title))])]),t._m(1,!0)]),o("div",{staticClass:"fr info"},[o("img",{attrs:{src:n("9OD+"),alt:""}}),o("span",{staticClass:"author"},[t._v(t._s(e.nickname))])]),o("div",{staticClass:"clearfix"})])])])}),o("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper","current-page":t.page.pageNum,"page-size":t.page.pageSize,total:t.dataForm.totalSize},on:{"current-change":t.refreshPageRequest}})],2)])])])};o._withStripped=!0;var r={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sui-nav nav-tabs nav-large"},[e("li",{staticClass:"active"},[e("a",{attrs:{href:"#one","data-toggle":"tab"}},[this._v("收藏的问题")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"link"},[e("a",{attrs:{href:"ruanyifeng.com"}},[this._v("ruanyifeng.com")])])}]};e.a=r},SLDG:function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},TNV1:function(t,e,n){"use strict";var o=n("cGG2");t.exports=function(t,e,n){return o.forEach(n,function(n){t=n(t,e)}),t}},XmWM:function(t,e,n){"use strict";var o=n("cGG2"),r=n("DQCr"),i=n("fuGk"),a=n("xLtR"),s=n("DUeU");function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=s(this.defaults,t),r(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(t){c.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}}),o.forEach(["post","put","patch"],function(t){c.prototype[t]=function(e,n,o){return this.request(s(o||{},{method:t,url:e,data:n}))}}),t.exports=c},cGG2:function(t,e,n){"use strict";var o=n("JP+z"),r=Object.prototype.toString;function i(t){return"[object Array]"===r.call(t)}function a(t){return void 0===t}function s(t){return null!==t&&"object"==typeof t}function c(t){if("[object Object]"!==r.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function l(t){return"[object Function]"===r.call(t)}function f(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),i(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===r.call(t)},isBuffer:function(t){return null!==t&&!a(t)&&null!==t.constructor&&!a(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(t){return"[object Date]"===r.call(t)},isFile:function(t){return"[object File]"===r.call(t)},isBlob:function(t){return"[object Blob]"===r.call(t)},isFunction:l,isStream:function(t){return s(t)&&l(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function t(){var e={};function n(n,o){c(e[o])&&c(n)?e[o]=t(e[o],n):c(n)?e[o]=t({},n):i(n)?e[o]=n.slice():e[o]=n}for(var o=0,r=arguments.length;o<r;o++)f(arguments[o],n);return e},extend:function(t,e,n){return f(e,function(e,r){t[r]=n&&"function"==typeof e?o(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},cWxy:function(t,e,n){"use strict";var o=n("dVOP");function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},dIwP:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,n){"use strict";function o(t){this.message=t}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,t.exports=o},fuGk:function(t,e,n){"use strict";var o=n("cGG2");function r(){this.handlers=[]}r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},jBvp:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"body,html{height:100%;background-color:#f5f5f5;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1}.wrapper{overflow:hidden;position:relative;margin:0 auto}@media (min-width:1200px){.wrapper{width:1170px}}@media only screen and (min-width:1024px) and (max-width:1200px){.wrapper{width:1000px}}@media (max-width:1024px){.wrapper{width:800px}}h2{font-size:18px}h2,h3{margin:0}h3{font-size:16px}h4{font-size:14px}h4,h5{margin:0}h5{font-size:12px}p{margin:0}.fl{float:left}.fr{float:right}i{font-style:normal}.tab-nav{background:#000;font-size:16px;margin-bottom:10px}.tab-nav .sui-nav{margin-bottom:0;border-radius:0}.tab-nav .sui-nav.navbar-dark{padding-left:0;border-bottom:0;color:#fff}.tab-nav .sui-nav.navbar-dark li{margin-bottom:-2px;line-height:36px}.tab-nav .sui-nav.navbar-dark li a{padding-left:35px;padding-right:35px;line-height:36px;color:#fff}.tab-nav .sui-nav.navbar-dark li.active a{border:0;border-radius:0;background-color:#e64620}.tab-nav .more{line-height:40px}.tab-nav .more a{color:#fff}.myhome-personinfo{height:200px;background-repeat:no-repeat}.myhome-personinfo .wrapper{padding:12px 0}.myhome-personinfo .fa{width:15px}.myhome-personinfo .person-baseinfo .photo{float:left}.myhome-personinfo .person-baseinfo .photo .person{width:120px;height:120px;border-radius:60px}.myhome-personinfo .person-baseinfo .photo .share{padding:10px}.myhome-personinfo .person-baseinfo .photo .share img{opacity:.6}.myhome-personinfo .person-baseinfo .info{float:left;margin-left:15px}.myhome-personinfo .person-baseinfo .info h1{margin:0;font-size:20px;font-weight:400}.myhome-personinfo .person-baseinfo .info h1 .allinfo{padding-left:10px;font-size:14px}.myhome-personinfo .person-baseinfo .info h1 .allinfo a{color:#e64620}.myhome-personinfo .person-baseinfo .info .fill{padding-left:10px}.myhome-personinfo .person-baseinfo .info .fill .fa{font-size:16px;color:#666;text-align:right}.myhome-personinfo .person-baseinfo .info .fill .sui-form input[type=text]{border-color:#999;padding:4px 8px;font-size:14px;font-family:Microsoft Yahei}.myhome-personinfo .person-baseinfo .info .fill .sui-form .btn-danger{padding:4px 30px;font-size:14px;font-family:Microsoft Yahei}.myhome-personinfo .person-baseinfo .info .fill li{line-height:32px;list-style:none;font-size:14px}.myhome-personinfo .person-baseinfo .info .fill li .sui-form{display:none;margin-bottom:0;margin-left:25px;margin-top:-25px}.myhome-personinfo .person-baseinfo .info .fill li span{margin-left:10px;cursor:pointer;color:#666}.myhome-personinfo .person-baseinfo .info .fill li span:hover{border-radius:6px;background-color:#fcf8e3;color:#8a6d3b;padding-right:5px}.myhome-personinfo .edit-info{float:right;width:300px}.myhome-personinfo .edit-info h4{padding:0 10px;line-height:36px;font-weight:400;background-color:#e3e3e3;color:#e64620}.myhome-personinfo .edit-info h4 span{float:right;cursor:pointer}.myhome-personinfo .edit-info h4 .addedit{color:#999}.myhome-personinfo .edit-info h4 .addedit img{margin-top:-2px;margin-right:5px}.myhome-personinfo .edit-info .info-box{padding:10px;height:120px;font-size:14px;background-color:#fff}.myhome-personinfo .edit-info .info-box .edit-intro .btns{float:right;margin-top:10px;margin-right:10px}.myhome-personinfo .edit-info .info-box .edit-intro .btns button{margin-left:10px}.myhome-personinfo .edit-info .info-box .editarea{width:84%;height:60px;margin-left:10px;border-color:#d0d0d0;padding:6px 12px;font-size:14px;line-height:1.42858;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.myhome-list{width:160px;margin-top:10px}.myhome-list ul{width:90%;padding-bottom:10px}.myhome-list ul.bottom{padding-top:10px;border-top:1px solid #e6e6e6}.myhome-list li{padding:0 10px;margin:5px 0;text-align:center;list-style:none;border-radius:6px;cursor:pointer}.myhome-list li.active{background-color:#f7d1c8}.myhome-list li.active a{color:#e64620}.myhome-list li a{line-height:34px;font-size:16px;text-decoration:none;color:#000}.mycollect-list{width:100%;float:left;padding:10px 20px;margin-top:10px}.mycollect-list .fr{float:right}.mycollect-list .nav-tabs{margin-bottom:5px;padding:0;margin-left:5px;border-bottom:0;background-color:#fff}.mycollect-list .nav-tabs li a{padding:0 20px;border:0;line-height:38px;font-weight:700;font-size:16px}.mycollect-list .nav-tabs li a:hover{color:#e64620}.mycollect-list .nav-tabs>.active>a{border:0;border-bottom:2px solid #e64620}.mycollect-list .nav-tabs>.active>a,.mycollect-list .nav-tabs>.active>a:hover{color:#e64620;background-color:transparent}.mycollect-list .tab-content{padding:0 5px;border:0}.mycollect-list .tab-content .border{float:left;margin-right:10px;margin-top:10px;text-align:center;border:1px solid #999;border-radius:4px}.mycollect-list .tab-content .border span{display:block;padding:5px 15px;font-size:16px;color:#999}.mycollect-list .tab-content .border span.usenum{border-bottom:1px solid #999;font-size:12px;padding:0 12px 6px}.mycollect-list .tab-content .collect-list .collect-item{position:relative;padding:15px 30px;margin-bottom:5px;background-color:#fff;list-style:none}.mycollect-list .tab-content .collect-list .collect-item .intro .content{float:left;width:82%;margin-left:15px}.mycollect-list .tab-content .collect-list .collect-item .intro .content p{line-height:28px}.mycollect-list .tab-content .collect-list .collect-item .intro .content .title{font-size:14px}.mycollect-list .tab-content .collect-list .collect-item .intro .content .link{line-height:36px}.mycollect-list .tab-content .collect-list .collect-item .intro .content .link a{color:#999}.mycollect-list .tab-content .collect-list .collect-item .info{margin-top:20px;margin-right:15px}.mycollect-list .tab-content .collect-list .collect-item .info img{border-radius:30%}.mycollect-list .tab-content .collect-list .collect-item .info .author{display:block;line-height:30px;color:#28a3ef}.mycollect-list .tab-content .company-list .company-item{padding:10px 30px;margin-bottom:5px;list-style:none;background-color:#fff}.mycollect-list .tab-content .company-list .company-item p{line-height:26px;font-size:14px}.mycollect-list .tab-content .company-list .company-item .name{font-weight:700}.mycollect-list .tab-content .company-list .company-item .job{font-size:12px;color:#afaaaa}.mycollect-list .tab-content .company-list .company-item .focus{margin-top:6px}.mycollect-list .tab-content .company-list .company-item .focus span{display:block;margin-bottom:3px;text-align:center;color:#999}.mycollect-list .tab-content .tc-list{list-style:none}.mycollect-list .tab-content .tc-list .tc-item{padding:10px 30px;margin-bottom:5px;overflow:hidden;background-color:#fff}.mycollect-list .tab-content .tc-list .tc-item a{line-height:30px;font-size:14px;color:#555}.tab-nav{margin-bottom:0}header{margin:15px 0}.left-list,.right-content{float:left;overflow:hidden}@media (min-width:1200px){.right-content{width:1010px}}@media only screen and (min-width:1024px) and (max-width:1200px){.right-content{width:840px}}@media (max-width:1024px){.right-content{width:640px}}.footer{margin-top:15px;border-top:1px solid #e6e6e6}",""])},jQY9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Ohc8"),r=n("R3AP"),i=n("VU/8")(o.a,r.a,!1,null,null,null);i.options.__file="pages/manager/mycollect.vue",e.default=i.exports},ji78:function(t,e,n){var o=n("jBvp");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("d9181890",o,!1,{sourceMap:!1})},lbHh:function(t,e,n){var o,r;!function(i){if(void 0===(r="function"==typeof(o=i)?o.call(e,n,e,t):o)||(t.exports=r),!0,t.exports=i(),!!0){var a=window.Cookies,s=window.Cookies=i();s.noConflict=function(){return window.Cookies=a,s}}}(function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function i(e,n,i){if("undefined"!=typeof document){"number"==typeof(i=t({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(t){}n=o.write?o.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in i)i[c]&&(s+="; "+c,!0!==i[c]&&(s+="="+i[c].split(";")[0]));return document.cookie=e+"="+n+s}}function a(t,n){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var s=i[a].split("="),c=s.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=e(s[0]);if(c=(o.read||o)(c,l)||e(c),n)try{c=JSON.parse(c)}catch(t){}if(r[l]=c,t===l)break}catch(t){}}return t?r[t]:r}}return r.set=i,r.get=function(t){return a(t,!1)},r.getJSON=function(t){return a(t,!0)},r.remove=function(e,n){i(e,"",t(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}(function(){})})},mtWM:function(t,e,n){t.exports=n("tIFN")},nVDU:function(t,e,n){"use strict";var o=n("mtWM"),r=n.n(o),i=n("4swq"),a=r.a.create({baseURL:"http://121.5.129.126:8010",timeout:1e4,changeOrigin:!0,headers:{Authorization:"Bearer "+Object(i.a)().token}});e.a=a},oJlt:function(t,e,n){"use strict";var o=n("cGG2"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(o.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=o.trim(t.substr(0,i)).toLowerCase(),n=o.trim(t.substr(i+1)),e){if(a[e]&&r.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},"p/xF":function(t,e,n){"use strict";var o=n("nVDU");e.a={list:function(t,e,n,r){return Object(o.a)({url:"/problem/"+t+"/"+e,method:"post",data:{pageNum:n,pageSize:r}})},getById:function(t){return Object(o.a)({url:"/problem/getById?id="+t,method:"get"})},getSimilarById:function(t){return Object(o.a)({url:"/problem/getSimilarById?id="+t,method:"get"})},save:function(t){return Object(o.a)({url:"/problem/save",method:"post",data:t})},good:function(t){return Object(o.a)({url:"/problem/setGood/"+t,method:"get"})},setCollect:function(t,e){return Object(o.a)({url:"/problem/setCollect/"+t+"/"+e,method:"get"})},getCollect:function(t,e,n){return Object(o.a)({url:"/problem/collect/getCollect/"+t,method:"post",data:{pageNum:e,pageSize:n}})},deleteCollect:function(t,e){return Object(o.a)({url:"/problem/collect/deleteCollect/"+t+"/"+e,method:"get"})},delete:function(){return Object(o.a)({url:"/problem/collect/delete",method:"get"})}}},p1b6:function(t,e,n){"use strict";var o=n("cGG2");t.exports=o.isStandardBrowserEnv()?{write:function(t,e,n,r,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),o.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),o.isString(r)&&s.push("path="+r),o.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},t8qj:function(t,e,n){"use strict";t.exports=function(t,e,n,o,r){return t.config=e,n&&(t.code=n),t.request=o,t.response=r,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},tIFN:function(t,e,n){"use strict";var o=n("cGG2"),r=n("JP+z"),i=n("XmWM"),a=n("DUeU");function s(t){var e=new i(t),n=r(i.prototype.request,e);return o.extend(n,i.prototype,e),o.extend(n,e),n}var c=s(n("KCLY"));c.Axios=i,c.create=function(t){return s(a(c.defaults,t))},c.Cancel=n("dVOP"),c.CancelToken=n("cWxy"),c.isCancel=n("pBtG"),c.all=function(t){return Promise.all(t)},c.spread=n("pxG4"),c.isAxiosError=n("SLDG"),t.exports=c,t.exports.default=c},xLtR:function(t,e,n){"use strict";var o=n("cGG2"),r=n("TNV1"),i=n("pBtG"),a=n("KCLY");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return s(t),t.headers=t.headers||{},t.data=r(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return s(t),e.data=r(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}});