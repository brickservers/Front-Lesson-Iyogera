(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,v=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7ba3a802"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"07d5":function(t,e,a){},"0d43":function(t,e,a){"use strict";var n=a("0e59"),s=a.n(n);s.a},"0e59":function(t,e,a){},1389:function(t,e,a){},"203c":function(t,e,a){"use strict";var n=a("400e"),s=a.n(n);s.a},"22be":function(t,e,a){"use strict";var n=a("1389"),s=a.n(n);s.a},2395:function(t,e,a){},"400e":function(t,e,a){},"4fd5":function(t,e,a){"use strict";var n=a("07d5"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),t._v(" "),a("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{"fixed-top":""}},[n("template",{slot:"brand"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[n("img",{attrs:{src:a("744d"),alt:"Lightweight UI components for Vue.js based on Bulma"}})])],1),t._v(" "),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[n("a",{staticClass:"button is-primary"},[t._v("\n              Home\n            ")])])])],1)],2)},i=[],c=a("289d");a("5abe");n["a"].use(c["a"]);var l={name:"Header"},u=l,d=(a("80b7"),a("2877")),v=Object(d["a"])(u,r,i,!1,null,"1d0f678a",null),f=v.exports,p={name:"app",components:{Header:f}},m=p,_=(a("034f"),Object(d["a"])(m,s,o,!1,null,null,null)),b=_.exports,h=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Todos",{attrs:{todos:t.todos}})],1)},y=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"concord",attrs:{id:"concord-cards"}},[a("div",{staticClass:"card xl i"},[a("input",{staticClass:"concord exit",attrs:{type:"button",value:"×"}}),t._v(" "),a("section",{staticClass:"wrapper"},[a("img",{staticStyle:{"background-color":"#b3b3b3","background-image":"url(https://iyogera.dev/iyogera2/img/man-copy.png)"},attrs:{alt:""}}),t._v(" "),a("header",{staticClass:"card-title"},[a("img",{staticClass:"icon",staticStyle:{"background-image":"url(https://iyogera.dev/iyogera2/img/100538759_3042369505846272_7693349259743068160_o.jpg)"}}),t._v(" "),a("h3",{staticStyle:{color:"black"}},[t._v("Hi,")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"container is-fluid"},[a("p"),a("h4",[t._v("Assigmnet")]),t._v(" "),a("b-progress",{attrs:{type:"is-success",value:80,"show-value":"",format:"percent"}}),t._v(" "),a("h4",[t._v("Test")]),t._v(" "),a("b-progress",{attrs:{type:"is-danger",value:25,"show-value":"",format:"percent"}}),t._v(" "),a("h4",[t._v("Exams")]),t._v(" "),a("b-progress",{attrs:{type:"is-success",value:72,"show-value":"",format:"percent"}})],1)]),t._v(" "),a("footer",{staticClass:"card-footer"})]),t._v(" "),a("div",{staticClass:"content"})]),t._v(" "),a("router-link",{attrs:{to:"lessons"}},[a("div",{staticClass:"card x",attrs:{"data-color":""}},[a("section",{staticClass:"wrapper"},[a("img",{staticStyle:{"background-color":"#f0eded"},attrs:{alt:""}}),t._v(" "),a("header",{staticClass:"card-title"},[a("h2",[t._v("Lessons")]),t._v(" "),a("h6",{staticStyle:{color:"green"}},[t._v("2 upcoming lessons")]),t._v(" "),a("hr")]),t._v(" "),a("footer",{staticClass:"card-footer scroll level"},[a("div",{staticClass:"container"},t._l(t.todos,(function(t){return a("div",{key:t.id},[a("TodoItem",{attrs:{todo:t}})],1)})),0)])]),t._v(" "),a("div",{staticClass:"content"})])]),t._v(" "),t._m(1)],1)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("a",{attrs:{href:"#"}},[t._v("Wallace")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card x",attrs:{"data-color":""}},[a("input",{staticClass:"concord exit",attrs:{type:"button",value:"×"}}),t._v(" "),a("section",{staticClass:"wrapper"},[a("img",{staticStyle:{"background-color":"#f0eded"},attrs:{alt:""}}),t._v(" "),a("header",{staticClass:"card-title"},[a("h2",[t._v("Homework")]),t._v(" "),a("h6",{staticStyle:{color:"red"}},[t._v("4 Homework due")]),t._v(" "),a("hr")]),t._v(" "),a("footer",{staticClass:"card-footer"},[a("div",{staticClass:"items-body"},[a("div",{staticClass:"items-body-content"},[a("h6",{staticStyle:{color:"black"}},[t._v("Coming Soon")]),t._v(" "),a("i",{staticClass:"em em-closed_book",attrs:{"aria-role":"presentation","aria-label":"CLOSED BOOK"}})])])])]),t._v(" "),a("div",{staticClass:"content"})])}],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"level-left",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[a("div",{staticClass:"level-items"},[a("div",{staticClass:"items-body-content"},[a("h6",{staticStyle:{color:"black"}},[t._v("\n              👩🏾‍🏫 "+t._s(t.todo.name)+" \n            ")])])])]),t._v(" "),a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-items"},[a("div",{staticClass:"items-body-content"},[a("h6",{staticStyle:{color:"black"}},[a("h6",{staticStyle:{color:"grey"}},[t._v("⌛️ "+t._s(t.todo.start_time)+" - ⏳ "+t._s(t.todo.end_time))])])])])])])},j=[],S=a("487a"),k=a.n(S);n["a"].use(k.a),n["a"].use(c["a"]);var x={name:"TodoItem",props:["todo"],data:function(){return{busy:!1}},methods:{loadMore:function(){}}},E=x,L=(a("4fd5"),Object(d["a"])(E,w,j,!1,null,"00198fd3",null)),T=L.exports;a("d48d");n["a"].use(c["a"]);var M={name:"Todos",components:{TodoItem:T},props:["todos"]},$=M,H=(a("203c"),Object(d["a"])($,C,O,!1,null,"232a0c24",null)),I=H.exports,P=a("bc3a"),N=a.n(P);n["a"].use(c["a"]);var R={name:"Home",components:{Todos:I},data:function(){return{todos:[]}},created:function(){var t=this;N.a.get("https://iyogera.dev/iyogera2/api/live_lesson").then((function(e){return t.todos=e.data.data})).catch((function(t){return console.log(t)}))}},A=R,J=(a("cccb"),Object(d["a"])(A,g,y,!1,null,null,null)),W=J.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("LiveLessons",{attrs:{livelessons:t.livelessons}})],1)},F=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"concord",attrs:{id:"concord-cards"}},[a("div",{staticClass:"card xl i"},[a("input",{staticClass:"concord exit",attrs:{type:"button",value:"×"}}),t._v(" "),a("section",{staticClass:"wrapper"},[a("div",{key:t.livelessons.id},[a("Join",{attrs:{livelessons:t.livelessons}})],1)]),t._v(" "),a("div",{staticClass:"content"})])])},D=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-jitsi-meet",{ref:"jitsiRef",attrs:{domain:"meet.jit.si",options:t.jitsiOptions}})},V=[],q=a("fd8c"),G={components:{VueJitsiMeet:q["JitsiMeet"]},computed:{jitsiOptions:function(){return{roomName:"kke",noSSL:!1,userInfo:{email:"user@email.com",displayName:""},configOverwrite:{enableNoisyMicDetection:!1},interfaceConfigOverwrite:{SHOW_JITSI_WATERMARK:!1,SHOW_WATERMARK_FOR_GUESTS:!1,SHOW_CHROME_EXTENSION_BANNER:!1},onload:this.onIFrameLoad}}},methods:{onIFrameLoad:function(){}}},X=G,z=Object(d["a"])(X,U,V,!1,null,null,null),Q=z.exports;n["a"].use(c["a"]);var Y={name:"LiveLessons",components:{Join:Q},props:["livelessons"]},Z=Y,tt=(a("0d43"),Object(d["a"])(Z,K,D,!1,null,"1cf09d39",null)),et=tt.exports;n["a"].use(c["a"]);var at={name:"Incall",components:{LiveLessons:et},data:function(){return{livelessons:[]}},methods:{created:function(){var t=this;N.a.get("https://iyogera.dev/iyogera2/api/live_lesson").then((function(e){return t.livelessons=e.data})).catch((function(t){return console.log(t)}))}}},nt=at,st=(a("e1e1"),Object(d["a"])(nt,B,F,!1,null,null,null)),ot=st.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Lessons")],1)},it=[],ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"concord",attrs:{id:"concord-cards"}},[a("h2",[t._v("Lessons")]),t._v(" "),a("router-link",{attrs:{to:"in-call"}},t._l(t.lessons,(function(e){return a("div",{key:e.id},[a("div",{staticClass:"card ",attrs:{"data-color":""}},[a("section",{staticClass:"wrapper"},[a("img",{staticStyle:{"background-color":"grey","background-image":"url(https://iyogera.dev/iyogera2/img/business-analysis.png)"},attrs:{alt:""}}),t._v(" "),a("footer",{staticClass:"card-footer"},[a("h5",[t._v(" "+t._s(e.topic)+" ")]),t._v(" "),a("h6",[t._v("👩🏾‍🏫 "+t._s(e.name))])])])])])})),0)],1)},lt=[];n["a"].use(c["a"]);var ut={name:"Lessons",data:function(){return{lessons:[]}},created:function(){var t=this;N.a.get("https://iyogera.dev/iyogera2/api/live_lessons").then((function(e){return t.lessons=e.data})).catch((function(t){return console.log(t)}))}},dt=ut,vt=(a("22be"),Object(d["a"])(dt,ct,lt,!1,null,"0e59bf00",null)),ft=vt.exports;n["a"].use(c["a"]);var pt={name:"Lesson",components:{Lessons:ft}},mt=pt,_t=(a("e8b6"),Object(d["a"])(mt,rt,it,!1,null,null,null)),bt=_t.exports;n["a"].use(h["a"]);var ht=new h["a"]({routes:[{path:"/",name:"home",component:W},{path:"/in-call",name:"In-call",component:ot},{path:"/lessons",name:"Lesson",component:bt},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:ht,render:function(t){return t(b)}}).$mount("#app")},"5ced":function(t,e,a){},7173:function(t,e,a){},"744d":function(t,e,a){t.exports=a.p+"img/iyogera_c_mid.ada5847c.png"},"80b7":function(t,e,a){"use strict";var n=a("7173"),s=a.n(n);s.a},"85ec":function(t,e,a){},9688:function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("5ced"),s=a.n(n);s.a},e1e1:function(t,e,a){"use strict";var n=a("2395"),s=a.n(n);s.a},e8b6:function(t,e,a){"use strict";var n=a("9688"),s=a.n(n);s.a}});
//# sourceMappingURL=app.3d6c9052.js.map