(this.webpackJsonpsamweb=this.webpackJsonpsamweb||[]).push([[0],{113:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(16),r=a.n(n),i=(a(113),a(12)),l=a(19),o=a(9),j=a(98),d=(a(114),j.a.initializeApp({apiKey:"AIzaSyDn_Do5b12w6-IYHhZGfiX7V0QMzWlRdd0",authDomain:"dj-admin-e66f0.firebaseapp.com",projectId:"dj-admin-e66f0",storageBucket:"dj-admin-e66f0.appspot.com",messagingSenderId:"129936073580",appId:"1:129936073580:web:c2bc6e286034a8a37b8949",measurementId:"G-CFFC7XN2PN"})),u=d.auth(),b=a(2),h=s.a.createContext();function m(){return Object(c.useContext)(h)}function p(e){var t=e.children,a=Object(c.useState)(),s=Object(i.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(!0),o=Object(i.a)(l,2),j=o[0],d=o[1];Object(c.useEffect)((function(){return u.onAuthStateChanged((function(e){r(e),d(!1)}))}),[]);var m={currentUser:n,login:function(e,t){return u.signInWithEmailAndPassword(e,t)},logout:function(){return u.signOut()}};return Object(b.jsx)(h.Provider,{value:m,children:!j&&t})}a(117),a(60);var x=a(31),O=a.n(x),g=a(37),v=a(175),f=a(181),A=a(176),w=a(180),N=a(177),U=(a(119),"data:image/png;base64,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"),Q=function(e){var t=e.width,a=Object(c.useState)(!1),s=Object(i.a)(a,2),n=s[0],r=s[1],j=m(),d=j.currentUser,u=j.logout,h=Object(o.g)(),p=function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:h.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("nav",{className:"navigation",children:Object(b.jsx)(v.a,{children:Object(b.jsxs)(f.a,{sticky:"top",className:"black_nav",collapseOnSelect:!0,expand:"lg",variant:"dark",expanded:n,onToggle:function(){return r(!n)},children:[Object(b.jsx)(l.b,{onClick:function(){return t<992&&r(!1)},to:"/",children:Object(b.jsx)(A.a,{fluid:!0,className:"main_logo",src:U,alt:""})}),Object(b.jsx)(f.a.Toggle,{id:"responsive-navbar-nav","aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(f.a.Collapse,{children:Object(b.jsxs)(w.a,{className:"ml-auto",children:[Object(b.jsx)(l.b,{onClick:function(){return t<992&&r(!n)},className:"nav_element",to:"/",children:"Home"}),Object(b.jsx)(l.b,{onClick:function(){return t<992&&r(!n)},className:"nav_element",to:"/music",children:"Music"}),Object(b.jsx)(l.b,{onClick:function(){return t<992&&r(!n)},className:"nav_element",to:"/services",children:"Services"}),d&&Object(b.jsx)(N.a,{variant:"danger",onClick:function(){t<992&&r(!n),p()},className:t>992&&"ml-3",children:"Logout"})]})})]})})})},C=a(178),q=a(102),B=(a(125),function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)(v.a,{className:"pt-5 pb-5",children:Object(b.jsxs)(C.a,{children:[Object(b.jsxs)(q.a,{className:"text-right border-right",children:[Object(b.jsx)(A.a,{fluid:!0,className:"main_logo",src:U,alt:""}),Object(b.jsx)("p",{className:"pt-2",children:"DJ SAM DAVID"})]}),Object(b.jsxs)(q.a,{children:[Object(b.jsx)("h4",{className:"display-5",children:"Contact"}),Object(b.jsx)("a",{className:"text-dark",href:"mailto:contact@domain.com",children:" contact@domain.com"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{className:"text-dark",href:"tel:+123456789",children:"+123456789"})]})]})})})}),I=(a(126),function(){return Object(b.jsxs)("div",{id:"bgc_container",children:[Object(b.jsxs)(v.a,{className:"text-center",children:[Object(b.jsx)("h1",{className:"main_heading display-2 pt-5 font-weight-bold text-light",children:"DJ SAM DAVID"}),Object(b.jsx)("p",{className:"lead text-light pt-5  mb-5",children:"Here put your catchy phrase."}),Object(b.jsx)(N.a,{className:"custom_btn mb-5",variant:"danger",size:"lg",children:"Let's talk"})]}),Object(b.jsx)("div",{className:"cover"})]})}),k=a.p+"static/media/about.a87ddfe5.jpg",y=(a(127),function(){return Object(b.jsx)("div",{className:"about",children:Object(b.jsxs)(v.a,{children:[Object(b.jsx)("h2",{className:"custom_h2 lead display-3 text-dark text-center pt-5 pb-5",children:"Another good line goes here"}),Object(b.jsxs)(C.a,{children:[Object(b.jsxs)(q.a,{sm:12,md:6,className:"p-3",children:[Object(b.jsx)("h1",{className:"display-6 mb-5",children:"About me"}),Object(b.jsx)("p",{className:"lead mr-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eius nulla quod magni vitae ducimus enim, tempora ipsam adipisci vero illo autem blanditiis quia, sunt pariatur aliquid odio commodi voluptate? Quis molestias quia voluptatum modi consequatur soluta enim dolor perferendis obcaecati aut ipsum pariatur cupiditate voluptate minus qui harum, hic repellat aliquam nostrum! Animi, neque porro quia nostrum sit quas."})]}),Object(b.jsx)(q.a,{sm:12,md:6,children:Object(b.jsx)(A.a,{className:"p-3",src:k,roundedCircle:!0,fluid:!0})})]})]})})}),G=a(103),H=a.n(G),D=(a(130),a(131),a.p+"static/media/1.5c5a276a.jpg"),z=a.p+"static/media/2.d53d3ae1.jpg",E=a.p+"static/media/3.9ce7895a.jpg",K=(a(132),function(e){var t=e.width;return Object(b.jsxs)(v.a,{fluid:!0,className:"main_gallery ".concat(t>1e3?"p-5":t>750?"p-4":"p-3"),children:[Object(b.jsx)("h2",{className:"custom_h2 lead display-3 text-light text-center pt-3 pb-5",children:"My work"}),Object(b.jsxs)(H.a,{items:t>1e3?3:t>750?2:1,className:"owl-theme",lazyLoad:!0,loop:!0,margin:10,children:[Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(A.a,{fluid:!0,src:D})}),Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(A.a,{fluid:!0,src:z})}),Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(A.a,{fluid:!0,src:E})}),Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(A.a,{fluid:!0,src:D})}),Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(A.a,{src:z})}),Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(A.a,{fluid:!0,src:E})})]})]})}),F=function(e){var t=e.width;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{}),Object(b.jsx)(y,{}),Object(b.jsx)(K,{width:t})]})},S=a(107),R=(a(133),a(40)),L=a.n(R),J=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){try{L.a.get("http://localhost:3000/data").then((function(e){s(e.data.files[0])}))}catch(e){console.log(e.message)}}),[]),Object(b.jsxs)(v.a,{children:[Object(b.jsx)("h1",{className:"display-3 text-center text-dark",children:"Music"}),Object(b.jsx)(S.a,{audioLists:a,theme:"auto",autoPlay:!1,toogleMode:!1,mode:"full",delete:!1})]})},M=function(){return Object(b.jsx)(v.a,{children:Object(b.jsx)("h1",{className:"display-1 text-center text-dark",children:"Service"})})},X=a(183),P=a(179),T=a(184),Z=a.p+"static/media/devel.9011411a.png",V=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(),r=Object(i.a)(n,2),l=r[0],o=r[1];return Object(b.jsxs)(v.a,{className:"text-center",children:[Object(b.jsx)("h2",{className:"display-3  mt-3 mb-3",children:"CMS System"}),Object(b.jsx)("p",{className:"lead",children:"Here you will be able te manage all of the website contents like images, text or music."}),Object(b.jsx)(A.a,{className:"w-75",fluid:!0,src:Z}),Object(b.jsxs)(X.a,{className:"mt-3 mb-3 w-100 mx-auto",lg:4,children:[Object(b.jsx)(X.a.Title,{className:"text-center mt-3 mb-3",children:"Upload form for testing purposes."}),Object(b.jsx)(X.a.Body,{children:Object(b.jsx)(C.a,{children:Object(b.jsx)(q.a,{className:"mx-auto",children:Object(b.jsxs)(P.a,{className:"text-center",action:"/data",method:"post",encType:"multipart/form-data",children:[Object(b.jsxs)(P.a.Group,{children:[Object(b.jsx)(P.a.File,{type:"file",name:"song",id:"song",label:"Example file input",required:!0,onChange:function(e){var t=e.target.files[0];s(t)}}),Object(b.jsx)(T.a,{className:"mt-5",now:l})]}),Object(b.jsx)(N.a,{onClick:function(e){var t=new FormData;t.append("song",a);var c={onUploadProgress:function(e){var t=Math.round(100*e.loaded/e.total);o(t)}};L.a.post("http://localhost:3000/data",t,c).then((function(e){return console.log(e)}))},className:"mt-4",variant:"success",children:"Upload"})]})})})})]})]})},W=a(42),Y=a(108),_=function(e){var t=e.rdr,a=e.component,c=Object(Y.a)(e,["rdr","component"]),s=m().currentUser;return Object(b.jsx)(o.b,Object(W.a)(Object(W.a)({},c),{},{render:function(e){return s?Object(b.jsx)(a,Object(W.a)({},e)):Object(b.jsx)(o.a,{to:t})}}))},$=a(182),ee=(a(172),function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(!1),j=Object(i.a)(l,2),d=j[0],u=j[1],h=Object(o.g)(),p=m().login;function x(){return(x=Object(g.a)(O.a.mark((function a(c){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,r(""),u(!0),a.next=6,p(e.current.value,t.current.value);case 6:h.push("/admin"),a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),u(!1),a.abrupt("return",r("Failed to log in"));case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(b.jsx)(v.a,{className:"mt-5 mb-5",children:Object(b.jsx)(C.a,{children:Object(b.jsxs)(q.a,{className:"form_col mx-auto p-5",xs:10,sm:9,md:6,lg:5,xl:4,children:[Object(b.jsx)("h4",{className:"text-center",children:"Admin panel"}),Object(b.jsxs)(P.a,{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(b.jsxs)(P.a.Group,{controlId:"login",children:[Object(b.jsx)(P.a.Label,{children:"Email"}),Object(b.jsx)(P.a.Control,{type:"email",placeholder:"Enter email",ref:e,required:!0,isInvalid:!1})]}),Object(b.jsxs)(P.a.Group,{controlId:"password",children:[Object(b.jsx)(P.a.Label,{children:"Password"}),Object(b.jsx)(P.a.Control,{type:"password",ref:t,placeholder:"Enter password"})]}),Object(b.jsx)(N.a,{disabled:d,className:"mt-4",variant:"primary",type:"submit",block:!0,children:"Log in"})]}),n&&Object(b.jsx)($.a,{className:"mt-3 text-center",variant:"danger",children:n})]})})})}),te=function(){return m().currentUser?Object(b.jsx)(o.a,{to:"/admin"}):Object(b.jsx)(o.b,{path:"/login",component:ee})};var ae=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){window.addEventListener("load",(function(){s(parseInt(window.innerWidth.toFixed(0)))})),window.addEventListener("resize",(function(){s(parseInt(window.innerWidth.toFixed(0)))}))}),[a]),Object(b.jsx)(l.a,{children:Object(b.jsx)(p,{children:Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(Q,{width:a}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/music",component:J}),Object(b.jsx)(o.b,{exact:!0,path:"/services",component:M}),Object(b.jsx)(_,{rdr:"/login",exact:!0,path:"/admin",component:V}),Object(b.jsx)(o.b,{exact:!0,path:"/login",component:te}),Object(b.jsx)(o.b,{exact:!0,path:"/",children:Object(b.jsx)(F,{width:a})}),Object(b.jsx)(o.b,{path:"*",children:Object(b.jsx)("h2",{className:"custom_h2 lead display-3 text-dark text-center pt-3 pb-5",children:"404 - page not found :("})})]}),Object(b.jsx)(B,{})]})})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,185)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(ae,{}),document.getElementById("root")),ce()}},[[173,1,2]]]);
//# sourceMappingURL=main.6135960b.chunk.js.map