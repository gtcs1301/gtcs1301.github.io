(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0565":function(t,e,n){"use strict";var a=n("1aee"),i=n.n(a);i.a},"1aee":function(t,e,n){},"4d7d":function(t,e,n){"use strict";var a=n("87c7"),i=n.n(a);i.a},"87c7":function(t,e,n){},"8b24":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"q-pa-md flex column"},[n("div",{staticClass:"row q-mb-xs",staticStyle:{"align-items":"center"}},[n("div",{staticClass:"text-h4 text-weight-bold"},[t._v("CS 1301 Queue")]),n("q-space"),n("q-btn",{attrs:{flat:"",round:"",icon:"person"},on:{click:function(e){return t.$refs.identity.showModal()}}}),n("q-btn",{attrs:{flat:"",round:"",icon:"settings"},on:{click:function(e){return t.$refs.settings.showModal()}}})],1),t.isKiosk?n("div",{staticClass:"ultra col"},[n("div",{staticClass:"flex column col-grow col half left-half"},[t.queue.length?n("draggable",{staticClass:"queue-scroll",attrs:{group:"person",disabled:!t.isAdmin},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!0},update:t.updateQueue},model:{value:t.queue,callback:function(e){t.queue=e},expression:"queue"}},t._l(t.queue,(function(e,a){return n("div",{key:e.animal,staticClass:"queue-row",class:t.isAdmin?" cursor-pointer":""},[t.isAdmin?n("q-tooltip",{attrs:{anchor:"center right",self:"center right",offset:[-55,0],"content-style":"font-size: 12px; padding: 5px 10px","transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n            "+t._s(e.name)+"\n          ")]):t._e(),n("div",{staticClass:"avatar flex flex-center tada",style:"background-color: "+t.getColor(e)+";"},[n("img",{attrs:{src:t.getIcon(e),alt:"Avatar"}})]),n("div",{staticClass:"name text-h6"},[t._v(t._s(a+1)+". "+t._s(e.animal))]),n("q-space"),t.isAdmin?n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],attrs:{icon:"close",round:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.dequeue(a)}}}):t._e()],1)})),0):t._e(),t.isKiosk?n("q-form",{on:{submit:function(e){return t.enqueue()}}},[n("div",{staticClass:"row q-gutter-sm q-mt-md"},[n("q-input",{ref:"gtid",staticClass:"text-h6 col",attrs:{outlined:"",mask:"#########",label:"9 Digit #GTID",autofocus:""},model:{value:t.gtid,callback:function(e){t.gtid=e},expression:"gtid"}}),n("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:t.loading,disable:t.loading,icon:"arrow_forward",type:"submit"}})],1)]):t._e()],1),t.isKiosk?n("div",{staticClass:"flex col flex-center q-ml-md q-pa-sm half right-half"},[t.admins.length?n("div",[n("div",{staticClass:"text-h5 text-center text-weight-bold"},[t._v("TAs on Duty:")]),n("div",{staticClass:"admin-container"},t._l(t.admins,(function(e,a){return n("div",{key:e.name,staticClass:"admin q-ma-md",class:t.isAdmin?"removable cursor-pointer":"",on:{click:function(e){return e.stopPropagation(),t.removeAdmin(a)}}},[n("q-avatar",{attrs:{size:"170px"}},[n("img",{attrs:{src:"../statics/people/"+t.adminName(e).path+".png",alt:t.adminName(e).display}})]),n("div",{staticClass:"text-center text-weight-bold"},[t._v("\n              "+t._s(t.adminName(e).display)+"\n            ")])],1)})),0)]):n("div",[n("div",{staticClass:"text-h4 text-center text-weight-bold"},[t._v("No TAs on Duty")])])]):t._e()]):n("div",[t.queue.length?n("draggable",{attrs:{group:"person",disabled:!t.isAdmin},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1},update:t.updateQueue},model:{value:t.queue,callback:function(e){t.queue=e},expression:"queue"}},t._l(t.queue,(function(e,a){return n("div",{key:e.animal,staticClass:"queue-row",class:t.isAdmin?" cursor-pointer":""},[t.isAdmin?n("q-tooltip",{attrs:{anchor:"center right",self:"center right",offset:[-55,0],"content-style":"font-size: 12px; padding: 5px 10px","transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n          "+t._s(e.name)+"\n        ")]):t._e(),n("div",{staticClass:"avatar flex flex-center tada",style:"background-color: "+t.getColor(e)+";"},[n("img",{attrs:{src:t.getIcon(e),alt:"Avatar"}})]),n("div",{staticClass:"name text-h6"},[t._v(t._s(a+1)+". "+t._s(e.animal))]),n("q-space"),t.isAdmin?n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],attrs:{icon:"close",round:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.dequeue(a)}}}):t._e()],1)})),0):t._e()],1),n("SettingsModal",{ref:"settings",on:{"clear-queue":function(e){return t.clearQueue()},"clear-admins":function(e){return t.clearAdmins()},request:t.checkAdmin}}),n("IdentityModal",{ref:"identity",on:{request:t.checkIdentity}})],1)},i=[],s=(n("7f7f"),n("310e")),o=n.n(s),r=n("cc8f"),l=n("8aa5"),c=n.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{on:{hide:function(e){return t.closeModal()}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("q-card",{staticClass:"modal-md"},[n("q-card-section",{staticClass:"row items-center q-pb-sm"},[n("div",{staticClass:"text-h6"},[t._v("Settings")]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),n("q-separator",{attrs:{inset:""}}),n("q-card-section",[n("div",{staticClass:"q-mb-sm text-weight-bold"},[t._v("Appearance:")]),n("q-toggle",{attrs:{value:t.$q.dark.isActive,icon:t.$q.dark.isActive?"brightness_2":"brightness_5",label:t.$q.dark.isActive?"Dark Mode":"Light Mode"},on:{input:function(e){return t.toggleDarkMode()}}})],1),n("q-separator",{attrs:{inset:""}}),t.isAdmin?n("q-card-section",[n("div",{staticClass:"q-mb-sm text-weight-bold"},[t._v("Queue Control:")]),n("q-toggle",{attrs:{value:t.isKiosk,label:"Kiosk Mode",icon:t.isKiosk?"add_to_queue":"smartphone"},on:{input:function(e){return t.toggleKiosk()}}}),n("br"),n("q-btn",{staticClass:"bg-primary text-white q-ma-sm",attrs:{icon:"delete",label:"Clear Queue"},on:{click:function(e){return e.stopPropagation(),t.clearQueue()}}}),n("q-btn",{staticClass:"bg-primary text-white q-ma-sm",attrs:{icon:"people",label:"Clear Admins"},on:{click:function(e){return e.stopPropagation(),t.clearAdmins()}}}),n("q-btn",{staticClass:"bg-primary text-white q-ma-sm",attrs:{icon:"lock",label:"Turn off Admin Mode"},on:{click:function(e){return e.stopPropagation(),t.setAdmin(!1)}}})],1):n("q-card-section",[n("q-form",{on:{submit:function(e){return t.requestAuth()}}},[t._v("\n        You must be a TA to access other queue settings. Please enter your\n        GTID:\n        "),n("div",{staticClass:"row q-gutter-sm q-mt-sm"},[n("q-input",{staticClass:"col text-h6",attrs:{outlined:"",mask:"#########",label:"9 Digit #GTID",autofocus:""},model:{value:t.gtid,callback:function(e){t.gtid=e},expression:"gtid"}}),n("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:t.loading,disable:t.loading,icon:"arrow_forward",type:"submit"}})],1)])],1)],1)],1)},d=[],m=(n("f751"),{name:"SettingsModal",mixins:[r["a"]],onIdle:function(){this.closeModal()},data:function(){return{show:!1,gtid:""}},methods:{showModal:function(){this.show=!0},closeModal:function(){Object.assign(this.$data,this.$options.data())},toggleDarkMode:function(){this.$q.dark.toggle()},requestAuth:function(){var t=this.hash(this.gtid);this.$emit("request",t)},clearQueue:function(){this.$emit("clear-queue")},clearAdmins:function(){this.$emit("clear-admins")}}}),h=m,f=n("2877"),p=n("eebe"),g=n.n(p),q=n("24e8"),v=n("f09f"),b=n("a370"),w=n("2c91"),y=n("9c40"),x=n("eb85"),C=n("9564"),k=n("0378"),A=n("27f9"),_=n("7f67"),Q=Object(f["a"])(h,u,d,!1,null,null,null),I=Q.exports;g()(Q,"components",{QDialog:q["a"],QCard:v["a"],QCardSection:b["a"],QSpace:w["a"],QBtn:y["a"],QSeparator:x["a"],QToggle:C["a"],QForm:k["a"],QInput:A["a"]}),g()(Q,"directives",{ClosePopup:_["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{on:{hide:function(e){return t.closeModal()}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("q-card",{staticClass:"modal-md"},[n("q-card-section",{staticClass:"row items-center q-pb-sm"},[n("div",{staticClass:"text-h6"},[t._v("Who Am I?")]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),n("q-separator",{attrs:{inset:""}}),n("q-card-section",[n("q-form",{on:{submit:function(e){return t.requestIdentity()}}},[t._v("\n        To preserve your anonymity as a student, we replaced all student names\n        with colored animals. See your animal by entering your GTID below\n        (you'll also be able to see when you get to the top of queue!)\n        "),n("div",{staticClass:"row q-gutter-sm q-mt-sm"},[n("q-input",{staticClass:"col text-h6",attrs:{outlined:"",mask:"#########",label:"9 Digit #GTID",autofocus:""},model:{value:t.gtid,callback:function(e){t.gtid=e},expression:"gtid"}}),n("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:t.loading,disable:t.loading,icon:"arrow_forward",type:"submit"}})],1)]),t.person.name?n("div",[n("q-separator",{attrs:{inset:""}}),n("div",{staticClass:"text-center text-h6 q-my-sm"},[t._v("You are:")]),n("div",{staticClass:"queue-row"},[n("q-tooltip",{attrs:{anchor:"center right",self:"center right",offset:[-55,0],"content-style":"font-size: 12px; padding: 5px 10px","transition-show":"flip-right","transition-hide":"flip-left",value:!0,"no-parent-event":""}},[t._v("\n            "+t._s(t.person.name)+"\n          ")]),n("div",{staticClass:"avatar flex flex-center tada",style:"background-color: "+t.getColor(t.person)+";"},[n("img",{attrs:{src:t.getIcon(t.person),alt:"Avatar"}})]),n("div",{staticClass:"name text-h6"},[t._v(t._s(t.person.animal))])],1)],1):t._e()],1)],1)],1)},$=[],T={name:"IdentityModal",mixins:[r["a"]],data:function(){return{show:!1,gtid:"",person:{name:"",animal:"",role:""}}},onIdle:function(){console.log("Idle behavior detected"),this.isKiosk&&(this.closeModal(),this.setCurrentUser(""))},methods:{showModal:function(){this.show=!0},closeModal:function(){Object.assign(this.$data,this.$options.data())},requestIdentity:function(){var t=this.hash(this.gtid);this.$emit("request",t)},setPerson:function(t){this.person=t,this.setCurrentUser(t.animal)}}},D=T,S=(n("4d7d"),n("05c0")),P=Object(f["a"])(D,M,$,!1,null,"68006e1a",null),N=P.exports;g()(P,"components",{QDialog:q["a"],QCard:v["a"],QCardSection:b["a"],QSpace:w["a"],QBtn:y["a"],QSeparator:x["a"],QForm:k["a"],QInput:A["a"],QTooltip:S["a"]}),g()(P,"directives",{ClosePopup:_["a"]});var K={name:"Queue",mixins:[r["a"]],components:{draggable:o.a,SettingsModal:I,IdentityModal:N},onIdle:function(){console.log("Idle behavior detected"),this.isKiosk&&this.focusInput()},data:function(){return{gtid:"",queue:[],queueHeight:500,admins:[],db:null}},methods:{enqueue:function(){if(9===this.gtid.length)if(this.isKiosk){var t=this.hash(this.gtid),e=this;e.loading=!0;var n=e.db.collection("users").doc(t);n.get().then((function(t){if(e.loading=!1,t.exists){var n=t.data(),a=n.role.toLowerCase();console.log(a),"ta"===a||"teacher"===a?(e.admins.filter((function(t){return t.animal===n.animal})).length<=0&&(e.admins.push({animal:n.animal,name:n.name}),e.updateAdmins()),e.setAdmin(!0),e.notify("Welcome, ".concat(e.adminName(n).display,"!"),"green")):e.queue.filter((function(t){return t.animal===n.animal})).length<=0?(e.queue.push({animal:n.animal,name:n.name}),e.updateQueue(),e.notify("Welcome, ".concat(e.adminName(n).display,"!"),"green")):e.notify("You're already on the queue!","green"),console.log("Document data:",t.data())}else e.notify("Uh oh, looks like you're not in our roster!","red")})).catch((function(){e.loading=!1,e.notify("Uh oh, something went wrong!","red")})),this.gtid="",this.focusInput()}else this.notify("Please visit the 1301 Helpdesk to add yourself to the queue","green")},checkIdentity:function(t){var e=this;e.loading=!0;var n=e.db.collection("users").doc(t);n.get().then((function(t){e.loading=!1,t.exists?e.$refs.identity.setPerson(t.data()):e.notify("Uh oh, looks like you're not in our roster!","red")})).catch((function(){e.loading=!1,e.notify("Uh oh, something went wrong!","red")}))},checkAdmin:function(t){var e=this;e.loading=!0;var n=e.db.collection("users").doc(t);n.get().then((function(t){if(e.loading=!1,t.exists){var n=t.data().role.toLowerCase();"ta"===n||"teacher"===n?e.setAdmin(!0):e.notify("You are not authorized.","red")}else e.notify("You are not authorized.","red")})).catch((function(){e.loading=!1,e.notify("Uh oh, something went wrong!","red")}))},dequeue:function(t){this.isAdmin&&(this.queue.splice(t,1),this.updateQueue())},moveTo:function(t,e){var n=this.queue.splice(t,1)[0];this.queue.splice(e,0,n)},resizeHandler:function(t){this.queueHeight=t.height},focusInput:function(){this.$refs.gtid.focus()},removeAdmin:function(t){this.isAdmin&&(this.admins.splice(t,1),this.updateAdmins())},clearAdmins:function(){var t=this;this.isAdmin&&this.$q.dialog({title:"Clear TAs",parent:this,message:"Are you sure you want to remove all TAs? This cannot be undone.",cancel:!0}).onOk((function(){t.admins=[],t.updateAdmins()}))},clearQueue:function(){var t=this;this.isAdmin&&this.$q.dialog({title:"Clear Queue",parent:this,message:"Are you sure you want to clear the queue? This cannot be undone.",cancel:!0}).onOk((function(){t.queue=[],t.updateQueue()}))},updateQueue:function(){var t=this;console.log("Queue order has changed"),t.db.collection("students").doc("student-queue").set({queue:t.queue}).then((function(){console.log("Queue successfully written!")})).catch((function(t){console.error("Error writing queue: ",t)}))},updateAdmins:function(){var t=this;t.db.collection("tas").doc("ta-queue").set({queue:t.admins}).then((function(){console.log("Admins successfully written!")})).catch((function(t){console.error("Error writing admins: ",t)}))}},created:function(){var t=this;c.a.initializeApp({apiKey:"AIzaSyA_fay2Vesz-4NyQkyCe8mPrNR1VjQpa7U",authDomain:"cs1301-queue.firebaseapp.com",databaseURL:"https://cs1301-queue.firebaseio.com",projectId:"cs1301-queue"}),t.db=c.a.firestore(),t.db.collection("students").doc("student-queue").onSnapshot((function(e){console.log("Current data: ",e.data()),t.queue=e.data().queue})),t.db.collection("tas").doc("ta-queue").onSnapshot((function(e){console.log("Current data: ",e.data()),t.admins=e.data().queue}))}},z=K,U=(n("0565"),n("9989")),j=n("cb32"),O=n("714f"),E=Object(f["a"])(z,a,i,!1,null,null,null);e["default"]=E.exports;g()(E,"components",{QPage:U["a"],QSpace:w["a"],QBtn:y["a"],QTooltip:S["a"],QForm:k["a"],QInput:A["a"],QAvatar:j["a"]}),g()(E,"directives",{Ripple:O["a"]})}}]);