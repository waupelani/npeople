(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,c){"use strict";var l=c(0),n=c(1),a=c(16),i=c(3),s=c(12);const{NODE_ENV:j,REACT_APP_GA_TRACKING_ID:o}=Object({NODE_ENV:"production",PUBLIC_URL:"/npeople",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0});"production"===j&&s.a.initialize(o);var b=()=>{const{pathname:e}=Object(i.f)();return Object(n.useEffect)((()=>{"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},r=c(5);var d=[{index:!0,label:"\ub098\uc0ac\ub81b\uc0ac\ub78c \uad50\ud68c",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}];const h=Object(n.lazy)((()=>c.e(4).then(c.t.bind(null,164,7))));var O=()=>{const[e,t]=Object(n.useState)(!1);return Object(l.jsxs)("div",{className:"hamburger-container",children:[Object(l.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(l.jsx)("ul",{children:e?Object(l.jsx)("li",{className:"menu close-menu",children:Object(l.jsx)("div",{onClick:()=>t(!e),className:"menu-hover",children:"\u2715"})}):Object(l.jsx)("li",{className:"menu open-menu",children:Object(l.jsx)("div",{onClick:()=>t(!e),className:"menu-hover",children:"\u2630"})})})}),Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)(l.Fragment,{}),children:Object(l.jsx)(h,{right:!0,isOpen:e,children:Object(l.jsx)("ul",{className:"hamburger-ul",children:d.map((c=>Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:c.path,onClick:()=>t(!e),children:Object(l.jsx)("h3",{className:c.index&&"index-li",children:c.label})})},c.label)))})})})]})};var m=()=>Object(l.jsxs)("header",{id:"header",children:[Object(l.jsx)("h1",{className:"index-link",children:d.filter((e=>e.index)).map((e=>Object(l.jsx)(r.b,{to:e.path,children:e.label},e.label)))}),Object(l.jsx)("nav",{className:"links",children:Object(l.jsx)("ul",{children:d.filter((e=>!e.index)).map((e=>Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:e.path,children:e.label})},e.label)))})}),Object(l.jsx)(O,{})]}),u=c(22);const{PUBLIC_URL:x}=Object({NODE_ENV:"production",PUBLIC_URL:"/npeople",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0});var p=()=>Object(l.jsxs)("section",{id:"sidebar",children:[Object(l.jsxs)("section",{id:"intro",children:[Object(l.jsx)(r.b,{to:"/",className:"logo",children:Object(l.jsx)("img",{src:`${x}/images/church.jpg`,alt:""})}),Object(l.jsxs)("header",{children:[Object(l.jsx)("h2",{children:"\ub098\uc0ac\ub81b\uc0ac\ub78c \uad50\ud68c"}),Object(l.jsx)("h2",{children:"Korean Church of THE NAZARENE"}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"mailto:kcnazarene@gmail.com",children:"kcnazarene@gmail.com"})})]})]}),Object(l.jsxs)("section",{className:"blurb",children:[Object(l.jsx)("h2",{children:"\ud5cc\uae08 Offering"}),Object(l.jsx)("p",{children:"\uc544\ub798 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc2dc\uc5b4 \ud5cc\uae08\uc744 \ub4dc\ub9ac\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Click the button below for online offering."}),Object(l.jsx)("ul",{className:"actions",children:Object(l.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(l.jsx)(r.b,{to:"/about",className:"button",children:"About Me"}):Object(l.jsx)(r.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(l.jsxs)("section",{id:"footer",children:[Object(l.jsx)(u.a,{}),Object(l.jsxs)("p",{className:"copyright",children:["\xa9 Michael D'Angelo ",Object(l.jsx)(r.b,{to:"/",children:"mldangelo.com"}),"."]})]})]});var g=()=>{const{pathname:e}=Object(i.f)();return Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null};const f=e=>Object(l.jsxs)(a.b,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(g,{}),Object(l.jsxs)(a.a,{titleTemplate:"%s | Michael D'Angelo",defaultTitle:"Michael D'Angelo",defer:!1,children:[e.title&&Object(l.jsx)("title",{children:e.title}),Object(l.jsx)("meta",{name:"description",content:e.description})]}),Object(l.jsxs)("div",{id:"wrapper",children:[Object(l.jsx)(m,{}),Object(l.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(l.jsx)(p,{})]})]});f.defaultProps={children:null,fullPage:!1,title:null,description:"Michael D'Angelo's personal website."};t.a=f},22:function(e,t,c){"use strict";var l=c(0),n=(c(1),c(26)),a=c(27),i=c(28),s=c(29),j=c(30),o=c(31),b=c(32),r=c(33);var d=[{link:"https://github.com/mldangelo",label:"Github",icon:a.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:i.faFacebookF},{link:"https://www.instagram.com/dangelosaurus/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/michaelldangelo",label:"LinkedIn",icon:j.faLinkedinIn},{link:"https://angel.co/michael-d-angelo",label:"Angel List",icon:o.faAngellist},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:b.faTwitter},{link:"mailto:michael.l.dangelo@gmail.com",label:"Email",icon:r.faEnvelope}];t.a=()=>Object(l.jsx)("ul",{className:"icons",children:d.map((e=>Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:e.link,children:Object(l.jsx)(n.a,{icon:e.icon})})},e.label)))})},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var l=c(0),n=c(1),a=c.n(n),i=c(15),s=c(5),j=c(3),o=c(20);c(46);const{PUBLIC_URL:b}=Object({NODE_ENV:"production",PUBLIC_URL:"/npeople",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=Object(n.lazy)((()=>Promise.all([c.e(2),c.e(7)]).then(c.bind(null,161)))),d=Object(n.lazy)((()=>c.e(8).then(c.bind(null,168)))),h=Object(n.lazy)((()=>c.e(9).then(c.bind(null,162)))),O=Object(n.lazy)((()=>c.e(10).then(c.bind(null,163)))),m=Object(n.lazy)((()=>c.e(5).then(c.bind(null,167)))),u=Object(n.lazy)((()=>c.e(11).then(c.bind(null,165)))),x=Object(n.lazy)((()=>c.e(6).then(c.bind(null,166))));var p=()=>Object(l.jsx)(s.a,{basename:b,children:Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)(o.a,{}),children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(j.a,{path:"/about",component:r}),Object(l.jsx)(j.a,{path:"/projects",component:m}),Object(l.jsx)(j.a,{path:"/stats",component:x}),Object(l.jsx)(j.a,{path:"/contact",component:d}),Object(l.jsx)(j.a,{path:"/resume",component:u}),Object(l.jsx)(j.a,{component:O,status:404})]})})});const g=()=>Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),f=document.getElementById("root");f.hasChildNodes()?Object(i.hydrate)(Object(l.jsx)(g,{}),f):Object(i.render)(Object(l.jsx)(g,{}),f)}},[[47,1,3]]]);
//# sourceMappingURL=main.b109f1e8.chunk.js.map