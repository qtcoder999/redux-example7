(this["webpackJsonpredux-example7"]=this["webpackJsonpredux-example7"]||[]).push([[3],{23:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r="INCREMENT",a="DECREMENT"},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(5),a=n(23),c={counter:0},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.b:var n=Object(r.a)({},e);return n.counter++,n;case a.a:var o=Object(r.a)({},e);return o.counter--,o;default:return e}}},46:function(e,t,n){e.exports=n(75)},51:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return d}));var r="FETCH_REPOS",a="FETCH_REPOS_SUCCESS",c="FETCH_REPOS_FAILURE",o="FETCH_USER_DATA",i="FETCH_USER_DATA_SUCCESS",u="FETCH_USER_DATA_FAILURE",l="FETCH_REPO_DETAILS",s="FETCH_REPO_DETAILS_SUCCESS",d="FETCH_REPO_DETAILS_FAILURE"},75:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(20),o=n.n(c),i=(n(51),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=n(30),s=n(45),d=n(44),f=n(12),b=n.n(f),E=n(14),p=n(7),h=n(25),v=n.n(h),O=b.a.mark(w),j=b.a.mark(_),m=b.a.mark(S),g=b.a.mark(y);function w(){var e,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(E.b)((function(){return v.a.get("https://jsonblob.com/api/64743a51-ce9c-11ea-a271-23e375ad002d")}));case 3:return e=n.sent,t=e.data,n.next=7,Object(E.c)({type:p.c,payload:t});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(E.c)({type:p.b,payload:n.t0});case 13:case"end":return n.stop()}}),O,null,[[0,9]])}function _(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(p.a,w);case 2:case"end":return e.stop()}}),j)}function S(e){var t,n;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(E.b)((function(e){e.payload;return v.a.get("https://jsonblob.com/api/81ae874d-ce9c-11ea-a271-e79f32c2ac48")}),e);case 3:return t=r.sent,n=t.data,r.next=7,Object(E.c)({type:p.i,payload:n});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(0),r.next=13,Object(E.c)({type:p.h,payload:r.t0});case 13:case"end":return r.stop()}}),m,null,[[0,9]])}function y(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(p.g,S);case 2:case"end":return e.stop()}}),g)}var C=b.a.mark(D);function D(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([_(),y()]);case 2:case"end":return e.stop()}}),C)}var R=n(15),x=R.createStore,L=R.applyMiddleware,T=R.compose,k=n(76).rootReducer,A=Object(s.a)(),U=x(k,(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T)(L(A,d.a)));A.run(D);var F=n(16),H=n(6),I=function(){return a.a.createElement("div",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(F.b,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(F.b,{to:"/git"},"Git Reader")),a.a.createElement("li",null,a.a.createElement(F.b,{to:"/users"},"Users")),a.a.createElement("li",null,a.a.createElement(F.b,{to:"/counter"},"Counter"))))},P=function(e){var t=a.a.lazy(e);return t.preload=e,t};var W=a.a.lazy((function(){return n.e(2).then(n.bind(null,99))})),N=a.a.lazy((function(){return n.e(1).then(n.bind(null,100))})),z=a.a.lazy((function(){return n.e(0).then(n.bind(null,98))})),M=P((function(){return n.e(2).then(n.bind(null,99))})),G=P((function(){return n.e(1).then(n.bind(null,100))})),B=P((function(){return n.e(0).then(n.bind(null,98))}));var J=function(){return Object(r.useEffect)((function(){M.preload(),G.preload(),B.preload()}),[]),a.a.createElement(l.a,{store:U},a.a.createElement(r.Suspense,{fallback:null},a.a.createElement("header",null,a.a.createElement("h1",null,"Github Reader"),a.a.createElement("h2",null,"Counter: Keep Counting"),a.a.createElement("h3",null,"Get Users List")),a.a.createElement(F.a,null,a.a.createElement(I,null),a.a.createElement(H.d,null,a.a.createElement(H.b,{path:"/git",render:function(){return a.a.createElement("div",null,a.a.createElement(W,null))}}),a.a.createElement(H.b,{path:"/users",render:function(){return a.a.createElement("div",null,a.a.createElement(z,null))}}),a.a.createElement(H.b,{path:"/counter",render:function(){return a.a.createElement("div",null,a.a.createElement(N,null))}}),a.a.createElement(H.a,{to:"/"})))))};o.a.render(a.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()},76:function(e,t,n){"use strict";n.r(t),n.d(t,"rootReducer",(function(){return l}));var r=n(15),a=n(41),c=n(29),o=n(5),i=n(7),u={users:[],isLoading:!1,isError:!1,userData:{isLoading:!1,isError:!1,details:[]},repoDetails:{isLoading:!1,isError:!1,details:[]}};var l=Object(r.combineReducers)({count:a.a,repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=t.type;switch(r){case i.a:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0});case i.c:return Object(o.a)(Object(o.a)({},e),{},{users:n,isLoading:!1});case i.b:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!1,isError:n});case i.g:return Object(o.a)(Object(o.a)({},e),{},{userData:Object(o.a)(Object(o.a)({},e.userData),{},{isLoading:!0})});case i.i:return Object(o.a)(Object(o.a)({},e),{},{userData:Object(o.a)(Object(o.a)({},e.userData),{},{details:Object(c.a)(n),isLoading:!1})});case i.h:return Object(o.a)(Object(o.a)({},e),{},{userData:Object(o.a)(Object(o.a)({},e.userData),{},{isError:!0,isLoading:!1})});case i.d:return Object(o.a)(Object(o.a)({},e),{},{repoDetails:Object(o.a)(Object(o.a)({},e.repoDetails),{},{isLoading:!0})});case i.f:return Object(o.a)(Object(o.a)({},e),{},{repoDetails:Object(o.a)(Object(o.a)({},e.repoDetails),{},{details:Object(c.a)(n),isLoading:!1})});case i.e:return Object(o.a)(Object(o.a)({},e),{},{repoDetails:Object(o.a)(Object(o.a)({},e.repoDetails),{},{isError:!0,isLoading:!1})});default:return e}}})}},[[46,4,5]]]);
//# sourceMappingURL=main.4a386657.chunk.js.map