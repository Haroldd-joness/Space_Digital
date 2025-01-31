import{f as v,o as d,c as u,a as s,p as _,g as f,n as p,b as r,w as c,d as l,e as g}from"./3doueHHu.js";import{_ as h}from"./D8tIGg4n.js";const w={class:"loader-wrap"},j={__name:"Loader",setup(i){return v(()=>{const t=document.getElementById("svg"),o=gsap.timeline(),n="M0 502S175 272 500 272s500 230 500 230V0H0Z",a="M0 2S175 1 500 1s500 1 500 1V0H0Z";o.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),o.to(t,{duration:.5,attr:{d:n},ease:"power2.easeIn"}).to(t,{duration:.5,attr:{d:a},ease:"power2.easeOut"}),o.to(".loader-wrap",{y:-1500}),o.to(".loader-wrap",{zIndex:-1,display:"none"}),o.from("header",{y:200},"-=1.5"),o.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")}),(t,o)=>(d(),u("div",w,o[0]||(o[0]=[s("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none"},[s("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})],-1),s("div",{class:"loader-wrap-heading"},[s("span",null,[s("h2",{class:"load-text"},[s("span",null,"L"),s("span",null,"o"),s("span",null,"a"),s("span",null,"d"),s("span",null,"i"),s("span",null,"n"),s("span",null,"g")])])],-1)])))}},b=_("/assets/imgs/logo-light.png"),k={class:"container"},F={__name:"Navbar",props:["borderBottom"],setup(i){const t=()=>{const n=document.querySelector(".topnav");window.scrollY>100?n.classList.add("nav-scroll"):n.classList.remove("nav-scroll")};v(()=>{window.addEventListener("scroll",t)}),f(()=>{window.removeEventListener("scroll",t)});const o=()=>{const n=document.querySelector(".topnav");document.querySelector(".hamenu").classList.toggle("open"),document.querySelector(".topnav .menu-icon").classList.toggle("open"),n.classList.toggle("navlit"),document.querySelector(".topnav .menu-icon").classList.contains("open")?document.querySelector(".hamenu").style.top="0":document.querySelector(".hamenu").style.top="-100%"};return(n,a)=>{const e=h;return d(),u("div",{id:"navi",class:p(["topnav blur",{"bord-thin-bottom":i.borderBottom}])},[s("div",k,[s("div",{class:p(`logo icon-img-${i.borderBottom?"100":"90"}`)},[r(e,{to:"/"},{default:c(()=>a[0]||(a[0]=[s("img",{src:b,alt:""},null,-1)])),_:1})],2),s("div",{class:"menu-icon cursor-pointer",onClick:o},a[1]||(a[1]=[s("span",{class:"text"},[s("span",{class:"word"},"Menu")],-1),s("span",{class:"icon"},[s("i"),s("i")],-1)]))])],2)}}},y={class:"hamenu valign"},x={class:"container"},M={class:"row"},L={class:"col-lg-8"},S={class:"menu-links"},C={class:"main-menu rest"},E={class:"o-hidden"},q={class:"o-hidden"},B={class:"col-lg-4 valign"},V={class:"cont-info"},N={class:"bottom"},H={class:"rest social-text d-flex fz-13"},I={class:"mr-20"},T={target:"_blank",ref:"noopener noreferrer",href:"https://www.facebook.com/space.digitals",class:"hover-this"},$={class:"mr-20"},z={target:"_blank",ref:"noopener noreferrer",href:"https://www.x.com/spaceedigital",class:"hover-this"},O={class:"mr-20"},A={target:"_blank",ref:"noopener noreferrer",href:"https://www.linkedin.com/company/spaceedigital",class:"hover-this"},R={target:"_blank",ref:"noopener noreferrer",href:"https://www.instagram.com/spacee.digital",class:"hover-this"},P={__name:"Menu",setup(i){const t=()=>{document.querySelector(".hamenu").classList.remove("open")},o=a=>{Object.values(a.currentTarget.parentElement.children).forEach(e=>e.style.opacity="0.5"),a.currentTarget.style.opacity="1"},n=a=>{Object.values(a.currentTarget.parentElement.children).forEach(e=>e.style.opacity="1")};return(a,e)=>{const m=h;return d(),u("div",y,[s("div",x,[s("div",M,[s("div",L,[s("div",S,[s("ul",C,[s("li",{onMouseenter:o,onMouseleave:n},[s("div",E,[r(m,{to:"/",class:"link dmenu"},{default:c(()=>e[0]||(e[0]=[s("span",{class:"nm"},"01.",-1),l("Home ")])),_:1})])],32),s("li",{onMouseenter:o,onMouseleave:n},[s("div",{class:"o-hidden"},[s("a",{href:"/about",class:"link animsition-link",onClick:t},e[1]||(e[1]=[s("span",{class:"nm"},"02.",-1),l("About")]))])],32),s("li",{onMouseenter:o,onMouseleave:n},[s("div",q,[r(m,{to:"/carousel-slider",class:"link dmenu"},{default:c(()=>e[2]||(e[2]=[s("span",{class:"nm"},"03.",-1),l("Portfolio ")])),_:1})]),s("div",{class:"sub-menu"},[s("div",{class:"row"},[s("div",{class:"col-md-6"},[s("ul",{class:"rest"},[s("li",null,[s("div",{class:"o-hidden"},[s("a",{href:"/carousel-slider",class:"sub-link animsition-link",onClick:t},"Carousel Slider")])])])]),s("div",{class:"col-md-6"},[s("ul",{class:"rest"},[s("li",null,[s("div",{class:"o-hidden"},[s("a",{href:"/portfolio-fixed-text",class:"sub-link animsition-link",onClick:t},"Creative Portfolio")])])])])])])],32),s("li",{onMouseenter:o,onMouseleave:n},[s("div",{class:"o-hidden"},[s("a",{href:"/blog",class:"link animsition-link",onClick:t},e[3]||(e[3]=[s("span",{class:"nm"},"04.",-1),l("Stories")]))])],32),s("li",{onMouseenter:o,onMouseleave:n},[s("div",{class:"o-hidden"},[s("a",{href:"/contact",class:"link animsition-link",onClick:t},e[4]||(e[4]=[s("span",{class:"nm"},"05.",-1),l("Contact")]))])],32)])])]),s("div",B,[s("div",V,[e[10]||(e[10]=g('<div class="item mb-50"><h6 class="text-u fw-600 mb-20">Location</h6><p class="fw-400 fz-18">Old Road Monrovia, Liberia</p></div><div class="item mb-50"><h6 class="text-u fw-600 mb-20">How to Connect</h6><a href="tel:+231 881 791 949">+231 881 791 949</a><br><a href="mailto:hello@spaceedigital.com">hello@spaceedigital.com</a></div>',2)),s("div",N,[e[9]||(e[9]=s("h6",{class:"text-u fw-600 mb-20"},"Follow Us",-1)),s("ul",H,[s("li",I,[s("a",T,e[5]||(e[5]=[s("span",{class:"hover-ani"},"Facebook",-1)]),512)]),s("li",$,[s("a",z,e[6]||(e[6]=[s("span",{class:"hover-ani"},"Twitter",-1)]),512)]),s("li",O,[s("a",A,e[7]||(e[7]=[s("span",{class:"hover-ani"},"LinkedIn",-1)]),512)]),s("li",null,[s("a",R,e[8]||(e[8]=[s("span",{class:"hover-ani"},"Instagram",-1)]),512)])])])])])])])])}}};export{j as _,F as a,P as b,b as c};
