(this["webpackJsonpreact-crud-with-json-server"]=this["webpackJsonpreact-crud-with-json-server"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},112:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(20),r=n.n(s),i=(n(73),n(9)),o=n(12),d=n(7),l=n(21),j=(n(45),n(77),n(2));var u=function(){return Object(j.jsx)("div",{className:"notFound",children:Object(j.jsx)("h1",{children:"Oops!!! Page not found :("})})},b=n(10),h="LOG_IN",O="LOG_OUT",p="FETCH_USER_REQUEST",v="FETCH_USER_SUCCESS",m="FETCH_USER_FAILURE",x="FETCH_EVENT_REQUEST",f="FETCH_EVENT_SUCCESS",g="FETCH_EVENT_FAILURE",y=function(){return{type:h}},E=n(19),w=n.n(E),N=function(){return function(e){e({type:p}),w.a.get("http://localhost:4000/users").then((function(t){return e((n=t.data,{type:v,payload:n}));var n})).catch((function(t){return e(function(e){return{type:m,payload:e}}(t.message))}))}};n(97);var S=function(){var e=Object(i.b)(),t=Object(d.g)(),n=Object(a.useState)(!1),c=Object(b.a)(n,2),s=c[0],r=c[1],l=Object(a.useRef)();return Object(a.useEffect)((function(){var e=function(e){l.current.contains(e.target)||r(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}})),Object(j.jsxs)("div",{ref:l,className:"nav-top ".concat(s?"responsive":""),children:[Object(j.jsx)(o.b,{className:"heading",to:"/",children:"Event Finder App"}),Object(j.jsxs)("div",{className:"menu-items",children:[Object(j.jsx)("button",{className:"logout-btn",onClick:function(){window.confirm("Do you want to logout?")&&(e({type:O}),e(N()),localStorage.removeItem("user"),t.push("/login"))},children:"Logout"}),Object(j.jsx)(o.b,{className:"add-event",to:{pathname:"/addEvent",state:"addEvent"},onClick:function(){return r(!1),void window.location.assign("/addEvent")},children:"Add Event"})]}),Object(j.jsx)("div",{className:"icon",onClick:function(){return r(!s)},children:Object(j.jsx)("i",{className:"fa fa-bars"})})]})},T=n(4),C=n.n(T),L=n(11),R=(n(101),n(102),function(){return function(e){e({type:x}),w.a.get("http://localhost:4000/events").then((function(t){var n=t.data;e({type:f,payload:n})})).catch((function(t){var n;e((n=t.message,{type:g,payload:n}))}))}}),k=n(43),A=n.n(k),D=(n(112),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#7020ff",color:"white",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}});A.a.setAppElement("#root");var _=function(e){var t=e.event,n=e.isModalOpen,a=e.modal;function c(){a(!1)}return Object(j.jsx)("div",{children:Object(j.jsx)(A.a,{isOpen:n,onRequestClose:c,style:D,contentLabel:"Example Modal",children:Object(j.jsxs)("div",{className:"displayEvents",children:[Object(j.jsx)("h3",{children:t.title}),Object(j.jsx)("button",{onClick:c,children:Object(j.jsx)("i",{className:"fa fa-times"})}),Object(j.jsxs)("p",{children:["Date: ",t.date]}),Object(j.jsxs)("p",{children:["Start Time : ",t.startTime]}),Object(j.jsxs)("p",{children:["Description: ",t.description]}),Object(j.jsxs)("p",{children:["Author: ",t.author]})]})})})};var U=function(){var e=Object(i.c)((function(e){return e.eventReducer.events})),t=Object(i.c)((function(e){return e.eventReducer.loading})),n=Object(i.b)(),c=Object(a.useState)(0),s=Object(b.a)(c,2),r=s[0],d=s[1],l=Object(a.useState)(!1),u=Object(b.a)(l,2),h=u[0],O=u[1];e.sort((function(e,t){return new Date(e.dateTime).getTime()-new Date(t.dateTime).getTime()}));var p=function(){var e=Object(L.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Do you want to delete?")){e.next=4;break}return e.next=3,w.a.delete("http://localhost:4000/events/".concat(t));case 3:n(R());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){O(e)};return Object(j.jsx)("div",{className:"home",children:Object(j.jsxs)("div",{className:"tbl-header",children:[Object(j.jsxs)("table",{className:"home-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Id"}),Object(j.jsx)("th",{children:"Event Title"}),Object(j.jsx)("th",{children:"Date"}),Object(j.jsx)("th",{children:"Start Time"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:!t&&e.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{children:e.title}),Object(j.jsx)("td",{children:e.date}),Object(j.jsx)("td",{children:e.startTime}),Object(j.jsxs)("td",{className:"actions",children:[Object(j.jsx)("button",{onClick:function(){return function(e){v(!0),d(e)}(e)},children:Object(j.jsx)("i",{className:"fa fa-eye"})}),Object(j.jsx)(o.b,{to:{pathname:"/addEditEvent/".concat(e.id),state:{event:e}},children:Object(j.jsx)("i",{className:"fa fa-edit"})}),Object(j.jsx)("button",{onClick:function(){return p(e.id)},children:Object(j.jsx)("i",{className:"fa fa-trash"})})]})]},e.id)}))})]}),t&&Object(j.jsx)("div",{className:"loading-screen",children:Object(j.jsxs)("div",{className:"loading",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]})}),Object(j.jsx)(_,{event:r,isModalOpen:h,modal:v})]})})},F=n(8),q=n(28),I=n(61),H=n.n(I),M=n(23),V=(n(134),{year:"numeric",month:"short",day:"numeric",weekday:"short"}),J={hour:"2-digit",minute:"2-digit",hour12:!0,hourCycle:"h12"};var P=function(){var e,t,n,c,s,r,o,u,h,O,p,v,m=Object(i.b)(),x=Object(d.g)(),f=Object(d.i)().id,g=Object(d.h)(),y=Object(a.useState)((null===(e=g.state)||void 0===e?void 0:e.event)?new Date(null===(t=g.state)||void 0===t?void 0:t.event.dateTime):new Date),E=Object(b.a)(y,2),N=E[0],S=E[1];console.log(g);var T=Object(M.b)(),k=T.register,A=T.formState.errors,D=T.handleSubmit,_=function(){var e=Object(L.a)(C.a.mark((function e(t,n){var a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c={title:t.title,dateTime:N,date:"".concat(N.toLocaleDateString("en-US",V)),startTime:"".concat(N.toLocaleTimeString("en-US",J)),description:t.description,author:t.author},n.preventDefault(),!(null===(a=g.state)||void 0===a?void 0:a.event)){e.next=8;break}return e.next=5,w.a.patch("http://localhost:4000/events/".concat(f),c,{headers:{"Content-Type":"application/json"}});case 5:l.b.success("Successfully edited"),e.next=11;break;case 8:return e.next=10,w.a.post("http://localhost:4000/events",c,{headers:{"Content-Type":"application/json"}});case 10:l.b.success("Successfully Added");case 11:m(R()),x.push("/");case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"addEditEvent",children:Object(j.jsxs)("form",{className:"event-box",onSubmit:D(_),children:[Object(j.jsx)("h2",{children:(null===(s=g.state)||void 0===s?void 0:s.event)?"Edit Event":"Add Event"}),Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",Object(F.a)(Object(F.a)({className:"event-input",defaultValue:(null===(r=g.state)||void 0===r?void 0:r.event)?null===(o=g.state)||void 0===o?void 0:o.event.title:""},k("title",{required:"Title is required"})),{},{placeholder:"Enter the title of your Event"})),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"error-message",children:Object(j.jsx)(q.a,{errors:A,name:"title"})}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("input",Object(F.a)(Object(F.a)({className:"event-input",defaultValue:(null===(u=g.state)||void 0===u?void 0:u.event)?null===(h=g.state)||void 0===h?void 0:h.event.description:""},k("description",{required:"Description must not be empty",minLength:{value:30,message:"Write at least 30 letters"}})),{},{placeholder:"Description"})),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"error-message",children:Object(j.jsx)(q.a,{errors:A,name:"description"})}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Date and Time"}),Object(j.jsx)(H.a,{className:"date-time",value:N,onChange:S,required:!0}),Object(j.jsx)("label",{children:"Author"}),Object(j.jsx)("input",Object(F.a)(Object(F.a)({className:"event-input",defaultValue:(null===(O=g.state)||void 0===O?void 0:O.event)?null===(p=g.state)||void 0===p?void 0:p.event.author:"",type:"text"},k("author")),{},{placeholder:"Author (optional)"})),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"event-submit",type:"submit",children:(null===(v=g.state)||void 0===v?void 0:v.event)?"Edit Event":"Add Event"})]},(null===(n=g.state)||void 0===n?void 0:n.event)?null===(c=g.state)||void 0===c?void 0:c.event.id:"")})};var z=function(){return!1===Object(i.c)((function(e){return e.isLogged}))&&d.a,Object(j.jsxs)(o.a,{children:[Object(j.jsx)(S,{}),Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/reload",component:null},"reload"),Object(j.jsx)(d.b,{path:"/",exact:!0,component:U}),Object(j.jsx)(d.b,{path:"/addEvent",component:P}),Object(j.jsx)(d.b,{path:"/addEditEvent/:id",children:Object(j.jsx)(P,{})}),Object(j.jsx)(d.b,{component:u})]})]})};n(135);var Z=function(){var e=Object(i.b)(),t=Object(d.g)(),n=Object(d.h)(),c=Object(i.c)((function(e){return e.userReducer.users})),s=Object(a.useState)(!1),r=Object(b.a)(s,2),u=r[0],h=r[1],O=Object(M.b)(),p=O.register,v=O.handleSubmit,m=O.formState.errors;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"login",children:Object(j.jsxs)("form",{className:"box",onSubmit:v((function(a){if("register"===n.state){if(c.find((function(e){return a.email===e.email})))l.b.warn("Email already exists! Please choose a unique email");else{var s={email:a.email,password:a.password};w.a.post("http://localhost:4000/users",s,{headers:{"Content-type":"application/json"}}),e(y()),localStorage.setItem("user",JSON.stringify(s)),t.push("/")}}else{console.log(a,c);var r=c.find((function(e){return a.email===e.email&&a.password===e.password}));r?(e(y()),localStorage.setItem("user",JSON.stringify(r)),t.push("/")):l.b.warn("Not a registered user")}})),children:[Object(j.jsx)("h1",{children:"Event Finder App"}),Object(j.jsx)("input",Object(F.a)({type:"email",placeholder:"Email"},p("email",{required:"Email must not be empty",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message:"Must contain @ numbers . and alphabets"}}))),Object(j.jsx)("br",{}),Object(j.jsx)("div",{style:{color:"red"},children:Object(j.jsx)(q.a,{errors:m,name:"email"})}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"password-wrapper",children:[Object(j.jsx)("input",Object(F.a)({type:u?"text":"password",placeholder:"Password"},p("password",{required:"Password must not be empty",pattern:{value:/(?=.*[0-9])/,message:"must contain some number"}}))),Object(j.jsx)("a",{onClick:function(){h(!u)},children:u?Object(j.jsx)("i",{className:"fa fa-eye password-eye","aria-hidden":"true"}):Object(j.jsx)("i",{className:"fa fa-eye-slash password-eye","aria-hidden":"true"})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{style:{color:"red"},children:Object(j.jsx)(q.a,{errors:m,name:"password"})}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",name:"",value:"register"==n.state?"Register":"Login"}),"register"==n.state?Object(j.jsx)(o.b,{to:{pathname:"/login",state:"login"},className:"register-login-link",children:"Login"}):Object(j.jsx)(o.b,{to:{pathname:"/register",state:"register"},className:"register-login-link",children:"Not yet user? Register"})]})})})},G=n(68),Q=["component","isLogged"],W=function(e){var t=e.component,n=e.isLogged,a=Object(G.a)(e,Q);return Object(j.jsx)(d.b,Object(F.a)(Object(F.a)({},a),{},{render:function(e){return n?Object(j.jsx)(t,Object(F.a)(Object(F.a)({},a),e)):Object(j.jsx)(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var B=function(){var e=Object(i.c)((function(e){return e.authReducer.isLogged}));return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(l.a,{theme:"colored"}),Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/login",exact:!0,component:Z}),Object(j.jsx)(d.b,{path:"/register",component:Z}),Object(j.jsx)(W,{path:"/",isLogged:e,component:z}),Object(j.jsx)(d.b,{component:u})]})]})})},$=n(24),K=n(62),X=n(63),Y=n(64),ee=n.n(Y),te=n(67),ne=n(65),ae={isLogged:!1};var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{isLogged:!0};case O:return{isLogged:!1};default:return e}},se={loading:!1,users:[],error:""},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case v:return{loading:!1,users:t.payload,error:""};case m:return{loading:!1,users:[],error:""};default:return e}},ie={loading:!0,events:[],error:""};var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case f:return{loading:!1,events:t.payload,error:""};case g:return{loading:!1,events:[],error:t.payload};default:return e}},de={key:"root",storage:ee.a,whiteList:["isLogged"]},le=Object($.combineReducers)({authReducer:Object(te.a)(de,ce),userReducer:re,eventReducer:oe}),je=Object($.createStore)(le,Object(K.composeWithDevTools)(Object($.applyMiddleware)(X.a))),ue=Object(ne.a)(je);je.dispatch(R()),je.dispatch(N()),ue.persist=function(){je.dispatch({rehydrate:!0})};var be=n(66);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(i.a,{store:je,children:Object(j.jsx)(be.a,{loading:null,persistor:ue,children:Object(j.jsx)(B,{})})})}),document.getElementById("root"))},73:function(e,t,n){},77:function(e,t,n){},97:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.8d6ab2ce.chunk.js.map