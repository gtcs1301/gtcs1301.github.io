(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0565":function(t,e,a){"use strict";var i=a("1aee"),n=a.n(i);n.a},"1aee":function(t,e,a){},2865:function(t,e,a){},"8b24":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"q-pa-md flex column"},[i("div",{staticClass:"row q-mb-xs",staticStyle:{"align-items":"center"}},[i("div",{staticClass:"text-h4 text-weight-bold"},[t._v("CS 1301 Queue")]),i("q-space"),i("q-btn",{attrs:{flat:"",round:"",icon:"person"},on:{click:function(e){return t.$refs.identity.showModal()}}}),i("q-btn",{attrs:{flat:"",round:"",icon:"settings"},on:{click:function(e){return t.$refs.settings.showModal()}}})],1),t.isKiosk?i("div",{staticClass:"ultra col"},[i("div",{staticClass:"flex column col-grow col half left-half"},[i("draggable",{staticClass:"queue-scroll",attrs:{group:"person",disabled:!t.isAdmin},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!0},update:t.updateQueue},model:{value:t.queue,callback:function(e){t.queue=e},expression:"queue"}},[t.queue.length?t._l(t.queue,(function(e,a){return i("div",{key:e.animal,staticClass:"queue-row",class:t.isAdmin?" cursor-pointer":""},[t.isAdmin&&!t.$q.screen.lt.sm?i("q-tooltip",{attrs:{anchor:"center right",self:"center right",offset:[-55,0],"content-style":"font-size: 12px; padding: 5px 10px","transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n            "+t._s(e.name)+"\n          ")]):t._e(),i("div",{staticClass:"avatar flex flex-center tada",style:"background-color: "+t.getColor(e)+";"},[i("img",{attrs:{src:t.getIcon(e),alt:"Avatar"}})]),i("div",{staticClass:"name text-h6"},[t._v(t._s(a+1)+". "+t._s(e.animal))]),i("q-space"),t.isAdmin?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],attrs:{icon:"close",round:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.dequeue(a)}}}):t._e()],1)})):i("div",{staticClass:"flex column flex-center col q-mt-lg",staticStyle:{height:"90%",color:"#AAB2B8"}},[i("img",{staticStyle:{width:"200px"},attrs:{src:a("ea25"),alt:"Empty"}}),i("div",{staticClass:"text-h5 text-weight-bold"},[t._v("Queue is empty!")])])],2),t.isKiosk?i("q-form",{on:{submit:function(e){return t.enqueue()}}},[i("div",{staticClass:"row q-gutter-sm q-mt-md"},[i("q-input",{ref:"gtid",staticClass:"text-h6 col",attrs:{outlined:"",mask:"#########",label:"9 Digit #GTID",autofocus:""},model:{value:t.gtid,callback:function(e){t.gtid=e},expression:"gtid"}}),i("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:t.loading,disable:t.loading,icon:"arrow_forward",type:"submit"}})],1)]):t._e()],1),t.isKiosk?i("div",{staticClass:"flex col flex-center q-ml-md q-pa-sm half right-half"},[t.admins.length?i("div",[i("div",{staticClass:"text-h5 text-center text-weight-bold"},[t._v("TAs on Duty:")]),i("div",{staticClass:"admin-container"},t._l(t.admins,(function(e,a){return i("div",{key:e.name,staticClass:"admin q-ma-md",class:t.isAdmin?"removable cursor-pointer":"",on:{click:function(e){return e.stopPropagation(),t.removeAdmin(a)}}},[i("q-avatar",{attrs:{size:"170px"}},[i("img",{attrs:{src:"../statics/people/"+t.adminName(e).path+".png",alt:t.adminName(e).display}})]),i("div",{staticClass:"text-center text-weight-bold"},[t._v("\n              "+t._s(t.adminName(e).display)+"\n            ")])],1)})),0)]):i("div",[i("div",{staticClass:"text-h4 text-center text-weight-bold"},[t._v("No TAs on Duty")])])]):t._e()]):i("div",[t.queue.length?i("draggable",{attrs:{group:"person",disabled:!t.isAdmin},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1},update:t.updateQueue},model:{value:t.queue,callback:function(e){t.queue=e},expression:"queue"}},t._l(t.queue,(function(e,a){return i("div",{key:e.animal,staticClass:"queue-row",class:t.isAdmin?" cursor-pointer":""},[t.isAdmin?i("q-tooltip",{attrs:{anchor:"center right",self:"center right",offset:[-55,0],"content-style":"font-size: 12px; padding: 5px 10px","transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n          "+t._s(e.name)+"\n        ")]):t._e(),i("div",{staticClass:"avatar flex flex-center tada",style:"background-color: "+t.getColor(e)+";"},[i("img",{attrs:{src:t.getIcon(e),alt:"Avatar"}})]),i("div",{staticClass:"name text-h6"},[t._v(t._s(a+1)+". "+t._s(e.animal))]),i("q-space"),t.isAdmin?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],attrs:{icon:"close",round:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.dequeue(a)}}}):t._e()],1)})),0):i("div",{staticClass:"flex column flex-center col q-mt-xl",staticStyle:{height:"100%",color:"#AAB2B8"}},[i("img",{staticStyle:{width:"200px"},attrs:{src:a("ea25"),alt:"Empty"}}),i("div",{staticClass:"text-h5 text-weight-bold"},[t._v("Queue is empty!")])])],1),i("SettingsModal",{ref:"settings",on:{"clear-queue":function(e){return t.clearQueue()},"clear-admins":function(e){return t.clearAdmins()},request:t.checkAdmin}}),i("IdentityModal",{ref:"identity",on:{request:t.checkIdentity}})],1)},n=[],s=(a("7f7f"),a("310e")),o=a.n(s),r=a("cc8f"),l=a("8aa5"),c=a.n(l),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{on:{hide:function(e){return t.closeModal()}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("q-card",{staticClass:"modal-md"},[a("q-card-section",{staticClass:"row items-center q-pb-sm"},[a("div",{staticClass:"text-h6"},[t._v("Settings")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("div",{staticClass:"q-mb-sm text-weight-bold"},[t._v("Appearance:")]),a("q-toggle",{attrs:{value:t.$q.dark.isActive,icon:t.$q.dark.isActive?"brightness_2":"brightness_5",label:t.$q.dark.isActive?"Dark Mode":"Light Mode"},on:{input:function(e){return t.toggleDarkMode()}}})],1),a("q-separator",{attrs:{inset:""}}),t.isAdmin?a("q-card-section",[a("div",{staticClass:"q-mb-sm text-weight-bold"},[t._v("Queue Control:")]),a("q-toggle",{attrs:{value:t.isKiosk,label:"Kiosk Mode",icon:t.isKiosk?"add_to_queue":"smartphone"},on:{input:function(e){return t.toggleKiosk()}}}),a("br"),a("q-btn",{staticClass:"bg-primary text-white q-ma-sm",attrs:{icon:"delete",label:"Clear Queue"},on:{click:function(e){return e.stopPropagation(),t.clearQueue()}}}),a("q-btn",{staticClass:"bg-primary text-white q-ma-sm",attrs:{icon:"people",label:"Clear Admins"},on:{click:function(e){return e.stopPropagation(),t.clearAdmins()}}}),a("q-btn",{staticClass:"bg-primary text-white q-ma-sm",attrs:{icon:"lock",label:"Turn off Admin Mode"},on:{click:function(e){return e.stopPropagation(),t.setAdmin(!1)}}})],1):a("q-card-section",[a("q-form",{on:{submit:function(e){return t.requestAuth()}}},[t._v("\n        You must be a TA to access other queue settings. Please enter your\n        GTID:\n        "),a("div",{staticClass:"row q-gutter-sm q-mt-sm"},[a("q-input",{staticClass:"col text-h6",attrs:{outlined:"",mask:"#########",label:"9 Digit #GTID",autofocus:""},model:{value:t.gtid,callback:function(e){t.gtid=e},expression:"gtid"}}),a("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:t.loading,disable:t.loading,icon:"arrow_forward",type:"submit"}})],1)])],1)],1)],1)},d=[],m=(a("f751"),{name:"SettingsModal",mixins:[r["a"]],onIdle:function(){this.closeModal()},data:function(){return{show:!1,gtid:""}},methods:{showModal:function(){this.show=!0},closeModal:function(){Object.assign(this.$data,this.$options.data())},toggleDarkMode:function(){this.$q.dark.toggle()},requestAuth:function(){var t=this.hash(this.gtid);this.$emit("request",t)},clearQueue:function(){this.$emit("clear-queue")},clearAdmins:function(){this.$emit("clear-admins")}}}),h=m,p=a("2877"),f=a("eebe"),g=a.n(f),q=a("24e8"),v=a("f09f"),b=a("a370"),y=a("2c91"),x=a("9c40"),w=a("eb85"),C=a("9564"),A=a("0378"),k=a("27f9"),_=a("7f67"),Q=Object(p["a"])(h,u,d,!1,null,null,null),I=Q.exports;g()(Q,"components",{QDialog:q["a"],QCard:v["a"],QCardSection:b["a"],QSpace:y["a"],QBtn:x["a"],QSeparator:w["a"],QToggle:C["a"],QForm:A["a"],QInput:k["a"]}),g()(Q,"directives",{ClosePopup:_["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{on:{hide:function(e){return t.closeModal()}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("q-card",{staticClass:"modal-md"},[a("q-card-section",{staticClass:"row items-center q-pb-sm"},[a("div",{staticClass:"text-h6"},[t._v("Who Am I?")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("q-form",{on:{submit:function(e){return t.requestIdentity()}}},[t._v("\n        To preserve your anonymity as a student, we replaced all student names\n        with colored animals. See your animal by entering your GTID below\n        (you'll also be able to see when you get to the top of queue!)\n        "),a("div",{staticClass:"row q-gutter-sm q-mt-sm"},[a("q-input",{staticClass:"col text-h6",attrs:{outlined:"",mask:"#########",label:"9 Digit #GTID",autofocus:""},model:{value:t.gtid,callback:function(e){t.gtid=e},expression:"gtid"}}),a("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:t.loading,disable:t.loading,icon:"arrow_forward",type:"submit"}})],1)]),t.person.name?a("div",[a("q-separator",{attrs:{inset:""}}),a("div",{staticClass:"text-center text-h6 q-my-sm"},[t._v("You are:")]),a("div",{staticClass:"queue-row"},[t.$q.screen.lt.sm?t._e():a("q-tooltip",{attrs:{anchor:"center right",self:"center right",offset:[-55,0],"content-style":"font-size: 12px; padding: 5px 10px","transition-show":"flip-right","transition-hide":"flip-left",value:!0,"no-parent-event":""}},[t._v("\n            "+t._s(t.person.name)+"\n          ")]),a("div",{staticClass:"avatar flex flex-center tada",style:"background-color: "+t.getColor(t.person)+";"},[a("img",{attrs:{src:t.getIcon(t.person),alt:"Avatar"}})]),a("div",{staticClass:"name text-h6"},[t._v(t._s(t.person.animal))])],1)],1):t._e()],1)],1)],1)},M=[],S={name:"IdentityModal",mixins:[r["a"]],data:function(){return{show:!1,gtid:"",person:{name:"",animal:"",role:""}}},onIdle:function(){console.log("Idle behavior detected"),this.isKiosk&&(this.closeModal(),this.setCurrentUser(""))},methods:{showModal:function(){this.show=!0},closeModal:function(){Object.assign(this.$data,this.$options.data())},requestIdentity:function(){var t=this.hash(this.gtid);this.$emit("request",t)},setPerson:function(t){this.person=t,this.setCurrentUser(t.animal)}}},T=S,D=(a("da2a"),a("05c0")),P=Object(p["a"])(T,$,M,!1,null,"27c3f99c",null),N=P.exports;g()(P,"components",{QDialog:q["a"],QCard:v["a"],QCardSection:b["a"],QSpace:y["a"],QBtn:x["a"],QSeparator:w["a"],QForm:A["a"],QInput:k["a"],QTooltip:D["a"]}),g()(P,"directives",{ClosePopup:_["a"]});var K={name:"Queue",mixins:[r["a"]],components:{draggable:o.a,SettingsModal:I,IdentityModal:N},onIdle:function(){console.log("Idle behavior detected"),this.isKiosk&&(this.focusInput(),this.clearCurrentUser())},data:function(){return{gtid:"",queue:[],queueHeight:500,admins:[],db:null}},methods:{enqueue:function(){if(9===this.gtid.length)if(this.isKiosk){var t=this.hash(this.gtid),e=this;e.loading=!0;var a=e.db.collection("users").doc(t);a.get().then((function(t){if(e.loading=!1,t.exists){var a=t.data(),i=a.role.toLowerCase();console.log(i),"ta"===i||"teacher"===i?(e.admins.filter((function(t){return t.animal===a.animal})).length<=0&&(e.admins.push({animal:a.animal,name:a.name}),e.updateAdmins()),e.setAdmin(!0),e.notify("Welcome, ".concat(e.adminName(a).display,"!"),"green")):e.queue.filter((function(t){return t.animal===a.animal})).length<=0?(e.queue.push({animal:a.animal,name:a.name}),e.updateQueue(),e.notify("Welcome, ".concat(e.adminName(a).display,"!"),"green")):e.notify("You're already on the queue!","green"),console.log("Document data:",t.data())}else e.notify("Uh oh, looks like you're not in our roster!","red")})).catch((function(){e.loading=!1,e.notify("Uh oh, something went wrong!","red")})),this.gtid="",this.focusInput()}else this.notify("Please visit the 1301 Helpdesk to add yourself to the queue","green")},checkIdentity:function(t){var e=this;e.loading=!0;var a=e.db.collection("users").doc(t);a.get().then((function(t){e.loading=!1,t.exists?e.$refs.identity.setPerson(t.data()):e.notify("Uh oh, looks like you're not in our roster!","red")})).catch((function(){e.loading=!1,e.notify("Uh oh, something went wrong!","red")}))},checkAdmin:function(t){var e=this;e.loading=!0;var a=e.db.collection("users").doc(t);a.get().then((function(t){if(e.loading=!1,t.exists){var a=t.data().role.toLowerCase();"ta"===a||"teacher"===a?e.setAdmin(!0):e.notify("You are not authorized.","red")}else e.notify("You are not authorized.","red")})).catch((function(){e.loading=!1,e.notify("Uh oh, something went wrong!","red")}))},dequeue:function(t){this.isAdmin&&(this.queue.splice(t,1),this.updateQueue())},moveTo:function(t,e){var a=this.queue.splice(t,1)[0];this.queue.splice(e,0,a)},resizeHandler:function(t){this.queueHeight=t.height},focusInput:function(){this.$refs.gtid.focus()},removeAdmin:function(t){this.isAdmin&&(this.admins.splice(t,1),this.updateAdmins())},clearAdmins:function(){var t=this;this.isAdmin&&this.$q.dialog({title:"Clear TAs",parent:this,message:"Are you sure you want to remove all TAs? This cannot be undone.",cancel:!0}).onOk((function(){t.admins=[],t.updateAdmins()}))},clearQueue:function(){var t=this;this.isAdmin&&this.$q.dialog({title:"Clear Queue",parent:this,message:"Are you sure you want to clear the queue? This cannot be undone.",cancel:!0}).onOk((function(){t.queue=[],t.updateQueue()}))},updateQueue:function(){var t=this;console.log("Queue order has changed"),t.db.collection("students").doc("student-queue").set({queue:t.queue}).then((function(){console.log("Queue successfully written!")})).catch((function(t){console.error("Error writing queue: ",t)}))},updateAdmins:function(){var t=this;t.db.collection("tas").doc("ta-queue").set({queue:t.admins}).then((function(){console.log("Admins successfully written!")})).catch((function(t){console.error("Error writing admins: ",t)}))}},created:function(){var t=this;c.a.initializeApp({apiKey:"AIzaSyA_fay2Vesz-4NyQkyCe8mPrNR1VjQpa7U",authDomain:"cs1301-queue.firebaseapp.com",databaseURL:"https://cs1301-queue.firebaseio.com",projectId:"cs1301-queue"}),t.db=c.a.firestore(),t.db.collection("students").doc("student-queue").onSnapshot((function(e){console.log("Current data: ",e.data()),t.queue=e.data().queue})),t.db.collection("tas").doc("ta-queue").onSnapshot((function(e){console.log("Current data: ",e.data()),t.admins=e.data().queue}))}},z=K,U=(a("0565"),a("9989")),j=a("cb32"),B=a("714f"),E=Object(p["a"])(z,i,n,!1,null,null,null);e["default"]=E.exports;g()(E,"components",{QPage:U["a"],QSpace:y["a"],QBtn:x["a"],QTooltip:D["a"],QForm:A["a"],QInput:k["a"],QAvatar:j["a"]}),g()(E,"directives",{Ripple:B["a"]})},da2a:function(t,e,a){"use strict";var i=a("2865"),n=a.n(i);n.a},ea25:function(t,e,a){t.exports=a.p+"img/empty.33693375.png"}}]);