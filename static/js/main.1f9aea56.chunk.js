(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c(2),n=c.n(s),a=c(20),r=c.n(a),l=(c(29),c(18)),o=c(3),j=c(13),b=c(10),d=(c(30),["btn--primary","btn--outline"]),h=["btn--medium","btn--large","btn--mobile","btn--wide"],x=["primary","blue","red","green"],u=function(e){var t=e.children,c=e.type,s=e.onClick,n=e.buttonStyle,a=e.buttonSize,r=e.buttonColor,l=d.includes(n)?n:d[0],o=h.includes(a)?a:h[0],j=x.includes(r)?r:null;return Object(i.jsx)("button",{className:"btn ".concat(l," \n        ").concat(o," ").concat(j),onClick:s,type:c,children:t})},O=(c(31),c(0));var m=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(l.a)(a,2),d=r[0],h=r[1],x=function(){return n(!1)},m=function(){window.innerWidth<=960?h(!1):h(!0)};return Object(s.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(O.b.Provider,{value:{color:"#fff"},children:Object(i.jsx)("div",{class:"navbar",children:Object(i.jsxs)("div",{class:"navbar-container container",children:[Object(i.jsxs)(o.b,{to:"/",className:"navbar-logo",onClick:x,children:[Object(i.jsx)(j.a,{className:"navbar-icon"}),"LAVISH"]}),Object(i.jsx)("div",{class:"menu-icon",onClick:function(){return n(!c)},children:c?Object(i.jsx)(b.f,{}):Object(i.jsx)(b.a,{})}),Object(i.jsxs)("ul",{className:c?"nav-menu  active":"nav-menu",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{to:"/",className:"nav-links",onClick:x,children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{to:"/services",className:"nav-links",onClick:x,children:"Services"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{to:"/products",className:"nav-links",onClick:x,children:"Products"})}),Object(i.jsx)("li",{className:"nav-btn",children:d?Object(i.jsx)(o.b,{to:"/sign-up",className:"btn-link",children:Object(i.jsx)(u,{buttonStyle:"btn--outline",children:"SIGN UP"})}):Object(i.jsx)(o.b,{to:"/sign-up",className:"btn-link",onClick:x,children:Object(i.jsx)(u,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:"SIGN UP"})})})]})]})})})})},g=c(4),v=c(9);c(37);var p=function(e){var t=e.lightBg,c=e.topLine,s=e.lightText,n=(e.lightTextDesc,e.headline),a=e.description,r=e.buttonLabel,l=e.img,j=e.alt,b=e.imgStart;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(i.jsx)("div",{class:"container",children:Object(i.jsxs)("div",{class:"row home__hero-row",style:{display:"flex",flexDirection:"start"===b?"row-reverse":"row"},children:[Object(i.jsx)("div",{class:"col",children:Object(i.jsxs)("div",{class:"home__hero-text-wrapper",children:[Object(i.jsx)("div",{class:"top-line",children:c}),Object(i.jsx)("h1",{className:s?"heading":"heading dark",children:n}),Object(i.jsx)("p",{className:s?"home__hero-subtitle":"home__hero-subtitle dark",children:a}),Object(i.jsx)(o.b,{to:"/sign-up",children:Object(i.jsx)(u,{buttonSize:"btn--wide",buttonColor:"blue",children:r})})]})}),Object(i.jsx)("div",{class:"col",children:Object(i.jsx)("div",{class:"home__hero-img-wrapper",children:Object(i.jsx)("img",{src:l,alt:j,class:"home__hero-img"})})})]})})})})},f=c(22),N=c(23);c(38);var w=function(){return Object(i.jsx)(O.b.Provider,{value:{color:"#fff",size:64},children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{class:"pricing__section",children:Object(i.jsxs)("div",{class:"pricing__wrapper",children:[Object(i.jsx)("h1",{class:"pricing__heading",children:"Pricing"}),Object(i.jsxs)("div",{class:"pricing__container",children:[Object(i.jsx)(o.b,{to:"/sign-up",className:"pricing__container-card",children:Object(i.jsxs)("div",{class:"pricing__container-cardInfo",children:[Object(i.jsx)("div",{class:"icon",children:Object(i.jsx)(b.c,{})}),Object(i.jsx)("h3",{children:"Starter"}),Object(i.jsx)("h4",{children:"$8.99"}),Object(i.jsx)("p",{children:"per month"}),Object(i.jsxs)("ul",{className:"pricing__container-features",children:[Object(i.jsx)("li",{children:"100 Transcations"}),Object(i.jsx)("li",{children:"2% Cash Back"}),Object(i.jsx)("li",{children:"$10,000 limit"})]}),Object(i.jsx)(u,{buttonSize:"btn--wide",buttonColor:"primary",children:"Choose Plan"})]})}),Object(i.jsx)(o.b,{to:"/sign-up",className:"pricing__container-card",children:Object(i.jsxs)("div",{class:"pricing__container-cardInfo",children:[Object(i.jsx)("div",{class:"icon",children:Object(i.jsx)(f.a,{})}),Object(i.jsx)("h3",{children:"Gold"}),Object(i.jsx)("h4",{children:"$29.99"}),Object(i.jsx)("p",{children:"per month"}),Object(i.jsxs)("ul",{className:"pricing__container-features",children:[Object(i.jsx)("li",{children:"100 Transcations"}),Object(i.jsx)("li",{children:"3.5 Cash Back"}),Object(i.jsx)("li",{children:"$10,000 limit"})]}),Object(i.jsx)(u,{buttonSize:"btn--wide",buttonColor:"blue",children:"Choose Plan"})]})}),Object(i.jsx)(o.b,{to:"/sign-up",className:"pricing__container-card",children:Object(i.jsxs)("div",{class:"pricing__container-cardInfo",children:[Object(i.jsx)("div",{class:"icon",children:Object(i.jsx)(N.a,{})}),Object(i.jsx)("h3",{children:"Diamond"}),Object(i.jsx)("h4",{children:"$99.99"}),Object(i.jsx)("p",{children:"per month"}),Object(i.jsxs)("ul",{className:"pricing__container-features",children:[Object(i.jsx)("li",{children:"100 Transcations"}),Object(i.jsx)("li",{children:"2% Cash Back"}),Object(i.jsx)("li",{children:"$10,000 limit"})]}),Object(i.jsx)(u,{buttonSize:"btn--wide",buttonColor:"primary",children:"Choose Plan"})]})})]})]})})})})},y={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transcations with zero fees",description:"Get access to our exclusive diamond card that allows you to send unlimted transcations without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"./public/images/svg-1.svg",alt:"Creadit card"},_={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"./public/images/svg-7.svg",alt:"Vault"},S={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"100% SECURE",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"",img:"./public/images/svg-5.svg",alt:"Vault"},k={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"./public/images/svg-8.svg",alt:"Vault"};var T=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p,Object(v.a)({},y)),Object(i.jsx)(p,Object(v.a)({},_)),Object(i.jsx)(p,Object(v.a)({},S)),Object(i.jsx)(w,{}),Object(i.jsx)(p,Object(v.a)({},k))]})},C={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transcations with zero fees",description:"Get access to our exclusive diamond card that allows you to send unlimted transcations without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"images/svg-1.svg",alt:"Creadit card"};var L=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{}),Object(i.jsx)(p,Object(v.a)({},C))]})},A={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"100% SECURE",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"",img:"images/svg-5.svg",alt:"Vault"};var I=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(p,Object(v.a)({},A))})},B={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"images/svg-8.svg",alt:"Vault"};var E=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(p,Object(v.a)({},B))})};c(39);var D=function(){return Object(i.jsxs)("div",{className:"footer-container",children:[Object(i.jsxs)("section",{className:"footer-subscription",children:[Object(i.jsx)("p",{className:"footer-subscription-heading",children:"Join our exclusive membership to receive the latest news and trends"}),Object(i.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(i.jsx)("div",{className:"input-areas",children:Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(i.jsx)(u,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(i.jsxs)("div",{className:"footer-links",children:[Object(i.jsxs)("div",{className:"footer-link-wrapper",children:[Object(i.jsxs)("div",{className:"footer-link-items",children:[Object(i.jsx)("h2",{children:"About Us"}),Object(i.jsx)(o.b,{to:"/sign-up",children:"How it works"}),Object(i.jsx)(o.b,{to:"/",children:"Testimonials"}),Object(i.jsx)(o.b,{to:"/",children:"Careers"}),Object(i.jsx)(o.b,{to:"/",children:"Investors"}),Object(i.jsx)(o.b,{to:"/",children:"Terms of Service"})]}),Object(i.jsxs)("div",{className:"footer-link-items",children:[Object(i.jsx)("h2",{children:"Contact Us"}),Object(i.jsx)(o.b,{to:"/",children:"Contact"}),Object(i.jsx)(o.b,{to:"/",children:"Support"}),Object(i.jsx)(o.b,{to:"/",children:"Destinations"}),Object(i.jsx)(o.b,{to:"/",children:"Sponsorships"})]})]}),Object(i.jsxs)("div",{className:"footer-link-wrapper",children:[Object(i.jsxs)("div",{className:"footer-link-items",children:[Object(i.jsx)("h2",{children:"Videos"}),Object(i.jsx)(o.b,{to:"/",children:"Submit Video"}),Object(i.jsx)(o.b,{to:"/",children:"Ambassadors"}),Object(i.jsx)(o.b,{to:"/",children:"Agency"}),Object(i.jsx)(o.b,{to:"/",children:"Influencer"})]}),Object(i.jsxs)("div",{className:"footer-link-items",children:[Object(i.jsx)("h2",{children:"Social Media"}),Object(i.jsx)(o.b,{to:"/",children:"Instagram"}),Object(i.jsx)(o.b,{to:"/",children:"Facebook"}),Object(i.jsx)(o.b,{to:"/",children:"Youtube"}),Object(i.jsx)(o.b,{to:"/",children:"Twitter"})]})]})]}),Object(i.jsx)("section",{className:"social-media",children:Object(i.jsxs)("div",{className:"social-media-wrap",children:[Object(i.jsx)("div",{className:"footer-logo",children:Object(i.jsxs)(o.b,{to:"/",className:"social-logo",children:[Object(i.jsx)(j.a,{className:"navbar-icon"}),"LAVISH"]})}),Object(i.jsx)("small",{className:"website-rights",children:"LAVISH \xa9 2020"}),Object(i.jsxs)("div",{className:"social-icons",children:[Object(i.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook",children:Object(i.jsx)(b.b,{})}),Object(i.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram",children:Object(i.jsx)(b.d,{})}),Object(i.jsx)(o.b,{className:"social-icon-link",to:"//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber",target:"_blank","aria-label":"Youtube",children:Object(i.jsx)(b.h,{})}),Object(i.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter",children:Object(i.jsx)(b.g,{})}),Object(i.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(i.jsx)(b.e,{})})]})]})})]})};var U=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(m,{}),Object(i.jsxs)(g.c,{children:[Object(i.jsx)(g.a,{path:"/",exact:!0,component:T}),Object(i.jsx)(g.a,{path:"/services",component:L}),Object(i.jsx)(g.a,{path:"/products",component:I}),Object(i.jsx)(g.a,{path:"/sign-up",component:E})]}),Object(i.jsx)(D,{})]})})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(U,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1f9aea56.chunk.js.map