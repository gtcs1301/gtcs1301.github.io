(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("967e"),a=n.n(r),o=(n("a481"),n("96cf"),n("fa84")),i=n.n(o),s=(n("5c7d"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),c=n("1f91"),u=n("42d2"),f=n("b05d"),l=n("436b"),p=n("2a19");s["a"].use(f["a"],{config:{},lang:c["a"],iconSet:u["a"],plugins:{Dialog:l["a"],Notify:p["a"]}});var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},b=[],d=n("cc8f"),v={name:"App",mixins:[d["a"]],onIdle:function(){this.setAdmin(!1)}},h=v,w=n("2877"),g=Object(w["a"])(h,m,b,!1,null,null,null),A=g.exports,k=n("2f62"),y={firebase:null,isKiosk:!1,isAdmin:!1,currentUserName:""},E={UPDATE_FIREBASE:function(e,t){e.firebase=t},UPDATE_KIOSK:function(e,t){e.isKiosk=t},UPDATE_ADMIN:function(e,t){e.isAdmin=t},UPDATE_USER:function(e,t){e.currentUserName=t}},x={setKiosk:function(e,t){var n=e.commit;n("UPDATE_KIOSK",t)},toggleKiosk:function(e){var t=e.commit;t("UPDATE_KIOSK",!y.isKiosk)},setAdmin:function(e,t){var n=e.commit;n("UPDATE_ADMIN",t)},toggleAdmin:function(e){var t=e.commit;t("UPDATE_ADMIN",!y.isAdmin)},setCurrentUser:function(e,t){var n=e.commit;n("UPDATE_USER",t)},clearCurrentUser:function(e){var t=e.commit;t("UPDATE_USER","")},setFirebase:function(e,t){var n=e.commit;n("UPDATE_FIREBASE",t)}},O={isKiosk:function(e){return e.isKiosk},isAdmin:function(e){return e.isAdmin},currentUserName:function(e){return e.currentUserName},firebase:function(e){return e.firebase}},P={namespaced:!0,state:y,mutations:E,actions:x,getters:O};s["a"].use(k["a"]);var U=function(){var e=new k["a"].Store({modules:{store:P},strict:!1});return e},D=n("8c4f"),K=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"8e31"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))}}]}];K.push({path:"*",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"e51e"))}});var j=K;s["a"].use(D["a"]);var S=function(){var e=new D["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:j,mode:"history",base:"/"});return e},_=function(){return F.apply(this,arguments)};function F(){return F=i()(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof U){e.next=6;break}return e.next=3,U({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=U;case 7:if(t=e.t0,"function"!==typeof S){e.next=14;break}return e.next=11,S({Vue:s["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=S;case 15:return n=e.t1,t.$router=n,r={el:"#q-app",router:n,store:t,render:function(e){return e(A)}},e.abrupt("return",{app:r,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}var C=n("a925"),T={failed:"Action failed",success:"Action was successful"},I={"en-us":T};s["a"].use(C["a"]);var N=new C["a"]({locale:"en-us",fallbackLocale:"en-us",messages:I}),B=function(e){var t=e.app;t.i18n=N},R=n("bc3a"),$=n.n(R);s["a"].prototype.$axios=$.a;var q=n("dcb8"),L=n.n(q),M=new s["a"];function V(){return J.apply(this,arguments)}function J(){return J=i()(a.a.mark((function e(){var t,n,r,o,i,c,u,f,l;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,i=!0,c=function(e){i=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),f=[B,void 0,void 0],l=0;case 11:if(!(!0===i&&l<f.length)){e.next=29;break}if("function"===typeof f[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,f[l]({app:n,router:o,store:r,Vue:s["a"],ssrContext:null,redirect:c,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!1!==i){e.next=31;break}return e.abrupt("return");case 31:new s["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),J.apply(this,arguments)}s["a"].use(L.a,{eventEmitter:M,idleTime:5e3}),V()},"31cd":function(e,t,n){},cc8f:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("456d"),n("7f7f"),n("a481"),n("28a5"),n("6b54"),n("06db");var r=n("c47a"),a=n.n(r),o=n("2f62"),i=n("3452"),s=n.n(i);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={data:function(){return{loading:!1}},computed:u({},Object(o["c"])("store",["isKiosk","isAdmin","currentUserName","firebase"])),methods:u({},Object(o["b"])("store",["setKiosk","toggleKiosk","setAdmin","toggleAdmin","setCurrentUser","clearCurrentUser","setFirebase"]),{hash:function(e){return s.a.SHA512(e).toString()},notify:function(e,t){var n=this.$q.screen.gt.xs?"top":"bottom";this.$q.notify({message:e,color:t,position:n,timeout:2e3})},getIcon:function(e){return"../statics/avatars/".concat(e.animal.split(" ")[1],".png")},getColor:function(e){var t=e.animal.split(" ")[0].toLowerCase();switch(t){case"red":return"#FF0044";case"blue":return"#006CFE";case"yellow":return"#FFCC41";case"purple":return"#B476FB";case"orange":return"#FE9D24";case"green":return"#29B278";case"teal":return"#00D7BF";default:return"#B476FB"}},adminName:function(e){var t=e.name.replace(",",""),n=t.split(" ");return{display:n[1]+" "+n[0],path:n[1].toLowerCase()+"_"+n[0].toLowerCase()}}})}}},[[0,2,0]]]);