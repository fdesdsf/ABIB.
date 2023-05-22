(()=>{"use strict";var y={};y.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),(()=>{var t;y.g.importScripts&&(t=y.g.location+"");var r=y.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var e=r.getElementsByTagName("script");if(e.length)for(var a=e.length-1;a>-1&&!t;)t=e[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=t})();var Jr={};function Ae(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=Ee(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,s=!1,i;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{!l&&e.return!=null&&e.return()}finally{if(s)throw i}}}}function Ee(t,r){if(t){if(typeof t=="string")return $(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $(t,r)}}function $(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}var x=document.querySelector(".body"),Ce=document.querySelector('meta[name="color-scheme"]'),P=document.querySelectorAll(".theme-input"),Te=document.querySelectorAll(".theme-label"),Ie=function(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},H=function(r,e){localStorage.setItem("portfolio-theme",r),Ce.setAttribute("content",r),x.classList.contains(e)||(x.classList.remove("theme__dark"),x.classList.remove("theme__light"),x.classList.add(e))},je=function(){var r=localStorage.getItem("portfolio-theme"),e=Ie();P[2].setAttribute("value",e),Te[2].dataset.systemTheme=e,!r||r!=="dark"&&r!=="light"?(H(e,"theme__".concat(e)),P[2].checked=!0):(H(r,"theme__".concat(r)),P[r==="dark"?0:1].checked=!0)},Oe=function(r){var e=r.target.value;if(e==="system"){var a=r.target.getAttribute("data-system-theme");H(a,"theme__".concat(a))}else H(e,"theme__".concat(e))},Me=function(){var r=Ae(P),e;try{for(r.s();!(e=r.n()).done;){var a=e.value;a.addEventListener("change",Oe)}}catch(n){r.e(n)}finally{r.f()}},qe=function(){je(),Me()};const xe=qe;function Y(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=Pe(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,s=!1,i;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{!l&&e.return!=null&&e.return()}finally{if(s)throw i}}}}function Pe(t,r){if(t){if(typeof t=="string")return Z(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Z(t,r)}}function Z(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}var F=document.querySelector(".header"),He=document.querySelector(".header-logo"),Fe=document.querySelectorAll(".nav-menu--link"),Be=document.querySelector(".intro-container"),Re=document.querySelectorAll(".section-container"),De=function(){window.scrollTo({top:0,behavior:"smooth"})},We=function(){var r={root:null,rootMargin:"0px",threshold:0},e=new IntersectionObserver(function(a){var n=Y(a),l;try{for(n.s();!(l=n.n()).done;){var s=l.value;s.intersectionRatio<=0?F.classList.add("header-filter"):F.classList.remove("header-filter")}}catch(i){n.e(i)}finally{n.f()}},r);e.observe(Be)},Ne=function(r){Re[Number.parseInt(r.target.getAttribute("data-scroll-to"),10)].scrollIntoView({behavior:"smooth"})},Ue=function(){window.pageYOffset>window.innerHeight?F.classList.add("header-filter"):F.classList.remove("header-filter")},Ge=function(){Ue(),We();var r=Y(Fe),e;try{for(r.s();!(e=r.n()).done;){var a=e.value;a.addEventListener("click",Ne,{passive:!0})}}catch(n){r.e(n)}finally{r.f()}He.addEventListener("click",De,{passive:!0})};const ze=Ge;function Je(t){if(Array.isArray(t))return t}function Ve(t,r){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a,n,l,s,i=[],o=!0,c=!1;try{if(l=(e=e.call(t)).next,r===0){if(Object(e)!==e)return;o=!1}else for(;!(o=(a=l.call(e)).done)&&(i.push(a.value),i.length!==r);o=!0);}catch(d){c=!0,n=d}finally{try{if(!o&&e.return!=null&&(s=e.return(),Object(s)!==s))return}finally{if(c)throw n}}return i}}function K(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}function $e(t,r){if(t){if(typeof t=="string")return K(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return K(t,r)}}function Ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,r){return Je(t)||Ve(t,r)||$e(t,r)||Ye()}const Ze=JSON.parse('{"github":{"cname":"badge-github","href":"https://github.com/chaseottofy","title":"Github","dataAcc":"@chaseottofy","dataBef":null,"idx":0},"youtube":{"cname":"badge-youtube","href":"https://www.youtube.com/channel/UCawR0cR_xHGCnKy3Vg6yc7g","title":"YouTube","dataAcc":"3.6k subs","dataBef":["@otto-fy","_"],"idx":1},"codepen":{"cname":"badge-codepen","href":"https://codepen.io/chaseottofy","title":"Codepen","dataAcc":"@chaseottofy","dataBef":null,"idx":2},"codewars":{"cname":"badge-codewars","href":"https://www.codewars.com/users/protto","title":"Codewars","dataAcc":"Top 0.5%","dataBef":["@protto","#2500"],"idx":3}}');var I=document.querySelector(".toast-wrapper"),j=0,Ke=function(){I.children.length>=4&&I.lastElementChild.remove();for(var r=0;r<I.children.length;r+=1){var e=I.children[r],a=+e.getAttribute("toast-idx");a===4&&e.classList.add("hide-toast"),e.setAttribute("class","toast toast--".concat(r+1)),e.style.zIndex=9e3-r,e.style.bottom="".concat(r+2,"rem")}},Qe=function(r,e){j<=3&&(j+=1);var a=0,n=document.createElement("aside");n.classList.add("toast"),n.style.zIndex=9e3,n.style.bottom="2rem",n.setAttribute("toast-idx",j);var l=document.createElement("span");l.classList.add("toast-progress"),l.style.width="".concat(a,"%");var s=document.createElement("span");s.classList.add("toast-progress--length");var i=document.createElement("span");i.classList.add("toast-message"),i.textContent=e?"".concat(e," ").concat(r):"".concat(r),n.append(l,s,i),I.prepend(n),Ke(),setInterval(function(){a+=1,l.style.width="".concat(a,"%"),a===100&&(n.remove(),j>0&&(j-=1),clearInterval())},10)};const B=Qe;var Xe=function(r){return navigator&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r):Promise.reject("The Clipboard API is not available.")};const Q=Xe;var et=document.querySelector(".body"),tt=document.querySelector(".img-bent-arrowsrc"),rt=tt.getAttribute("src"),at=document.querySelectorAll(".cm-body--img"),X=document.querySelectorAll(".cm-img--icon"),nt=function(r,e,a,n,l,s){var i=document.createElement("div");i.classList.add("cm-right--top__cell"),i.classList.add(r);var o=document.createElement("a");o.classList.add("cm-right--top__cell-badge"),o.href=e,o.title=a,o.target="_blank",o.rel="noreferrer";var c=document.createElement("div");c.classList.add("badge-top");var d=document.createElement("div");d.classList.add("badge-top--profile");var u=document.createElement("div");u.classList.add("badge-top--container--svg");var m=document.createElement("img");m.classList.add("cm-header--img"),m.src=at[s].getAttribute("src"),m.alt="";var f=document.createElement("span");if(f.setAttribute("data-acc",n),l){var p=_(l,2),v=p[0],g=p[1];f.classList.add("badge-prof"),f.setAttribute("data-bef",g),f.textContent=v,m.classList.add("badge-mug")}else f.setAttribute("data-acc",n),f.textContent=n,m.classList.add("img-icon");var b=document.createElement("div");b.classList.add("badge-footer");var h=document.createElement("img");h.setAttribute("class","img-icon cm-bent--arrow"),h.src=rt,h.alt="";var S=document.createElement("span");return S.textContent=a,u.append(m),d.append(u,f),c.append(d),b.append(h,S),o.append(c,b),i.append(o),i},ee=function(r,e,a,n,l,s){var i=document.createElement("div");i.classList.add("cm-right--bottom__cell");var o=document.createElement("span");o.textContent=r;var c=document.createElement("div");if(c.classList.add("cm-right--bottom__cell-icons"),n){var d=document.createElement("a");d.classList.add("cm-email-goto"),d.href=n,d.title="Open Mail-to";var u=document.createElement("img");u.classList.add("img-icon"),u.src=s[0].src,u.alt="",d.append(u),c.append(d)}var m=document.createElement("button");m.classList.add("cm-copy"),m.classList.add(e),m.title=a,m.setAttribute("aria-label","button");var f=document.createElement("img");return f.classList.add("img-icon"),f.src=s[1].src,f.alt="",m.addEventListener("click",function(){Q(l),B("Copied! ".concat(l))}),m.append(f),c.append(m),i.append(o,c),i},ot=function(){var r;if(!((r=document)!==null&&r!==void 0&&r.querySelector(".contact-menu__header"))){var e=document.createElement("aside");e.setAttribute("class","contact-menu__header");var a=document.createElement("div");a.classList.add("cm-right");var n=document.createElement("div");n.classList.add("cm-right--top");for(var l=0,s=Object.values(Ze);l<s.length;l++){var i=s[l];n.append(nt(i.cname,i.href,i.title,i.dataAcc,i.dataBef,i.idx))}var o=document.createElement("div");o.classList.add("cm-right--bottom"),o.classList.add("cm-right--bottom__body"),o.append(ee("970-988-2548","cm-copy--phone","Copy Phone Number",null,"9709882548",X),ee("ottofy@zohomail.com","cm-copy--email","Copy E-mail Address","mailto:ottofy@zohomail.com","ottofy@zohomail.com",X)),a.append(n,o),e.append(a),et.append(e)}};const ct=ot;var R=document.querySelector(".nav-multi__contact"),it=function(){var r=function a(n){var l,s;!n||!n.target||n.target.closest(".contact-menu__header")||n.target.closest(".nav-multi__contact")||((l=document)===null||l===void 0||(s=l.querySelector(".contact-menu__header"))===null||s===void 0||s.remove(),R.firstChild.classList.remove("nav-menu--contact--active"),window.removeEventListener("mousemove",a))},e=function(){window.innerWidth<=640||R.firstChild.classList.contains("nav-menu--contact--active")||(ct(),R.firstChild.classList.add("nav-menu--contact--active"),window.addEventListener("mousemove",r))};R.addEventListener("mouseenter",e)},lt=function(){it()};const st=lt;function te(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=dt(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,s=!1,i;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{!l&&e.return!=null&&e.return()}finally{if(s)throw i}}}}function dt(t,r){if(t){if(typeof t=="string")return re(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return re(t,r)}}function re(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}var ut=document.querySelectorAll(".cm-copy--email"),mt=document.querySelectorAll(".cm-copy--phone"),ae=function(r){Q(r),B(r,"copied!")},ft=function(){return ae("ottofy@zohomail.com")},pt=function(){return ae("9709882548")},vt=function(){var r=te(ut),e;try{for(r.s();!(e=r.n()).done;){var a=e.value;a.addEventListener("click",ft)}}catch(i){r.e(i)}finally{r.f()}var n=te(mt),l;try{for(n.s();!(l=n.n()).done;){var s=l.value;s.addEventListener("click",pt)}}catch(i){n.e(i)}finally{n.f()}};const ht=vt;var yt=function(){var r=document.createElement("div");r.classList.add("spinner-wrapper");var e=document.createElement("div");e.classList.add("spinner");for(var a=0;a<12;a+=1){var n=document.createElement("div");n.classList.add("spinner-cell"),n.style.animationDelay="".concat(-1.2+a/10,"s"),n.style.transform=a===0?"rotate(.0001deg) translate(146%)":"rotate(".concat(a*30,"deg) translate(146%)"),e.append(n)}return r.append(e),r};const ne=yt,gt=y.p+"images/cweeklgdark.a0c1c9ae.webp",bt=y.p+"images/cweekmddark.2191379c.webp",wt=y.p+"images/cmonthlgdark.100d2004.webp",St=y.p+"images/cmonthmddark.7ab887cd.webp",_t=y.p+"images/cyearlgdark.f8ef2ed7.webp",Lt=y.p+"images/cyearmddark.b50efa56.webp",kt=y.p+"images/clistlgdark2.fc5263d7.webp",At=y.p+"images/clistmddark.5f63efc8.webp",Et=y.p+"images/reactlg.05b2cb69.webp",Ct=y.p+"images/reactmd.3a43d265.webp";var Tt={cweeklgdark:gt,cweekmddark:bt,cmonthlgdark:wt,cmonthmddark:St,cyearlgdark:_t,cyearmddark:Lt,clistlgdark:kt,clistmddark:At},It={reactlg:Et,reactmd:Ct},jt={calendar:Tt,react:It};const oe=jt;function Ot(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=Mt(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,s=!1,i;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{!l&&e.return!=null&&e.return()}finally{if(s)throw i}}}}function Mt(t,r){if(t){if(typeof t=="string")return ce(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ce(t,r)}}function ce(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}var qt=[["cweeklgdark","cweekmddark","Calendar Week"],["cmonthlgdark","cmonthmddark","Calendar Month"],["cyearlgdark","cyearmddark","Calendar Year"],["clistlgdark","clistmddark","Calendar List"]],xt=function(r){var e=document.createElement("aside");e.classList.add("img-skeleton"),e.append(ne()),r.prepend(e)},Pt=function(r,e){xt(r.parentElement);var a=_(e,3),n=a[0],l=a[1],s=a[2],i=function(f,p){var v=document.createElement("source");return v.srcset=f,v.media=p,v.type="image/webp",v},o=i(n,"(min-width: 640px)"),c=i(l,"(max-width: 640px)");r.append(o,c);var d=new Image;d.src=n,d.alt=s,d.style="max-width:100vw;",d.type="image/webp";var u=document.querySelector(".img-skeleton");d.decode().then(function(){r.append(d),u&&u.remove()}).catch(function(m){console.assert(!1,m),u&&u.remove()})},Ht=function(r,e,a,n,l){var s=document.createElement("picture"),i=Ot(a),o;try{for(i.s();!(o=i.n()).done;){var c=o.value;s.classList.add(c)}}catch(v){i.e(v)}finally{i.f()}s.setAttribute("data-hasimg","true"),s.setAttribute(e,n),r.append(s);var d=_(qt[+n-2],3),u=d[0],m=d[1],f=d[2],p=l?oe.calendar:oe.react;Pt(s,l?[p[u],p[m],f]:[p.reactlg,p.reactmd,"React Components"])};const Ft=Ht,Bt=JSON.parse(`{"calendar":{"title":"Google Calendar 2.0","links":{"github":["https://github.com/chaseottofy/google-calendar-clone-vanilla","Google Calendar 2.0 Github Repository"],"live":["https://chaseottofy.github.io/google-calendar-clone-vanilla/","Google Calendar 2.0 Live Demo"],"audit":["https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-google-calendar-clone-vanilla/3ra0nt0y2h?form_factor=desktop","Pagespeed.web.dev View Last Audit"],"screenshots":["https://flic.kr/s/aHBqjAqx9t","Google Calendar 2.0 Screenshots on Flickr"]},"features":{"about":["Fully functional, zero dependency clone of Google Calendar in its entirety.","(Does not include any content dependent on Google's API EX. Google Maps, Google MEET, etc.)","Zero third party resources used (aside from webpack & google svgs).","Written entirely in vanilla javascript, HTML, and vanilla CSS.","Optimized for performance, accessibility, and responsiveness. Stays true to the original, negates pixel-perfection only where necessary."],"performance":["Tiny 40kb build.","Heap is on average 92% smaller.","92% less css rules.","90% less css selectors.","80% less queries.","50% less dom nodes.","Perfect lighthouse score.","Now Responsive down to 280px!"],"new features":["42 new color options.","Three themes available (light, dark, and high contrast.","Transfer all events from one category to another.","Toggle animations on/off.","New sorting animations.","Now has month and year picker.","Datepicker now highlights dates with events.","Datepicker now highlights current week in week view.","Yearpicker now highlights dates with events.","Single page functionality."]}},"markdown":{"title":"Markdown to HTML","links":{"github":["https://github.com/chaseottofy/react-lite-markdown","Markdown Lite Github Repository"],"live":["https://chaseottofy.github.io/react-lite-markdown/","Markdown Lite Live Demo"],"audit":["https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-react-lite-markdown/ov2k7dtd51?form_factor=desktop","Pagespeed.web.dev View Last Audit"],"screenshots":["https://flic.kr/s/aHBqjAB58q","Markdown Lite Screenshots on Flickr"]},"features":{"about":["Custom markdown parser/editor with real-time preview. Built with React.","What separates this from many other react markdown editors is the avoidance of dangerouslySetInnerHTML and the ability to resize the editor/preview panels. It also incorporates a dynamic numbered line system (similar to notepad++), along with three contrast-accessible themes, local storage, and a file upload/download system.","Note that this is not traditional markdown. I've kept things limited to purely what I find useful/use most of the time.","Markdown expressions are rendered/represented as react elements. Aside from avoiding potential security risks, delivering content through an actual react element raises performance significantly. Using setDangerousHtml & then performing HTML sanitation goes against every core principle of react's reconciliation process."],"performance":["50kb build.","Perfect lighthouse score.","Responsive down to mobile.","Passes all accessibility tests.","Avoids dangerouslySetInnerHTML."],"features":["Editor with real-time preview.","Three themes available (light, dark, and high contrast.","Switch between column and row layouts.","Custom dynamic number line system.","See real-time file, word, character, and line counts.","Local storage integration.","Save and upload files.","Copy to clipboard."],"commands":["# Heading 1","## Heading 2","### Heading 3","*text* bold","[link](url) link","{url} image","> blockquote","- list","___ horizontal linebreak"]}}}`);var Rt=function(){var r=document.createElement("div");r.classList.add("scrollbar-measure"),document.body.append(r);var e=r.offsetWidth-r.clientWidth;return r.remove(),e};const Dt=Rt;var ie=document.querySelector(".body"),Wt=document.querySelector(".header"),Nt=function(){var r="".concat(Dt(),"px");ie.classList.add("body-prevent-scroll"),ie.style.paddingRight=r,Wt.style.paddingRight=r};const le=Nt;function Ut(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=Gt(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,s=!1,i;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{!l&&e.return!=null&&e.return()}finally{if(s)throw i}}}}function Gt(t,r){if(t){if(typeof t=="string")return se(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return se(t,r)}}function se(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}var D=document.querySelector("body"),zt=document.querySelector(".header"),de=function(){var r,e;(r=document)===null||r===void 0||(e=r.querySelector(".project-overview--wrapper"))===null||e===void 0||e.remove(),window.removeEventListener("keydown",ue),D.classList.remove("body-prevent-scroll"),D.removeAttribute("style"),zt.removeAttribute("style")},Jt=function(r){(r.target.classList.contains("po-header--close")||r.target.classList.contains("project-overview--wrapper"))&&de()},ue=function(r){r.key==="Escape"&&de()},Vt=function(){var r=document.createElement("hr");return r},$t=function(r,e,a){var n=document.createElement("a");return n.href=r,n.target="_blank",n.rel="noopener noreferrer",n.textContent=e,n.title=a,n},Yt=function(r,e){var a=document.createElement("h4");a.textContent=r,a.classList.add("po-title");var n=document.createElement("ul");n.classList.add("po-list");var l=Ut(e),s;try{for(l.s();!(s=l.n()).done;){var i=s.value,o=document.createElement("li");o.classList.add("po-list--item"),o.textContent=i,n.append(o)}}catch(c){l.e(c)}finally{l.f()}return[a,n]},Zt=function(r){var e=r.title,a=r.links,n=r.features,l=document.createElement("aside");l.classList.add("project-overview--wrapper");var s=document.createElement("div");s.classList.add("project-overview--modal");var i=document.createElement("div");i.classList.add("po-header");var o=document.createElement("h3"),c=document.createElement("div");c.classList.add("po-header--title");var d=document.createElement("span");d.textContent=" \u2013 Project Overview";var u=document.createElement("br");o.textContent=e;var m=document.createElement("button");m.textContent="x",m.classList.add("po-header--close"),m.title="Close Project Overview",m.ariaLabel="button",c.append(o,u,d),i.append(c,m);var f=document.createElement("div");f.classList.add("po-body");var p=document.createElement("h4");p.classList.add("po-title"),p.textContent="Links",f.append(p);var v=document.createElement("div");v.classList.add("proj-overview--links");for(var g=0,b=Object.entries(a);g<b.length;g++){var h=_(b[g],2),S=h[0],N=h[1],U=_(N,2),J=U[0],M=U[1];v.append($t(J,S,M))}f.append(v);for(var k=0,C=Object.entries(n);k<C.length;k++){var T=_(C[k],2),V=T[0],q=T[1],Ur=Yt(V,q),ke=_(Ur,2),Gr=ke[0],zr=ke[1];f.append(Gr,zr,Vt())}return s.append(i,f),l.append(s),l.addEventListener("click",Jt),setTimeout(function(){m.focus()},50),l},Kt=function(r){D.classList.contains("body-prevent-scroll")||(D.append(Zt(Bt[r.target.getAttribute("data-proj")])),r.target.blur(),le(),window.addEventListener("keydown",ue))};const Qt=Kt,me=JSON.parse('{"calendar":{"title":"Google Calendar 2.0","link":"https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-google-calendar-clone-vanilla/3ra0nt0y2h?form_factor=desktop","score":["0.3","0.3","0.0","0.0"]},"markdown":{"title":"Markdown Lite ","link":"https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-react-lite-markdown/ov2k7dtd51?form_factor=desktop","score":["0.3","0.3","0.0","0.0"]},"content":[["First Contentful Paint","Marks the time at which the first text or image is painted."],["Largest Contentful Paint","Marks the time at which the largest text or image is painted."],["Total Blocking Time","Sum of all time periods between FCP and Time to Interactive."],["Cumulative Layout Shift","Measures the movement of visible elements within the viewport."]]}');var W=document.querySelector(".body"),Xt=document.querySelector(".header"),fe=function(){var r,e;(r=document)===null||r===void 0||(e=r.querySelector(".lighthouse-modal--wrapper"))===null||e===void 0||e.remove(),window.removeEventListener("keydown",pe),W.removeAttribute("style"),W.classList.remove("body-prevent-scroll"),Xt.removeAttribute("style")},er=function(r){(r.target.classList.contains("lighthouse-modal--wrapper")||r.target.closest(".close-lh-btn"))&&fe()},pe=function(r){r.key==="Escape"&&fe()},tr=function(r){var e=document.createElement("aside");e.classList.add("lighthouse-modal--wrapper");var a=me[r],n=[a.title,a.link,a.score,me.content],l=n[0],s=n[1],i=n[2],o=n[3],c=document.createElement("div");c.classList.add("lighthouse-modal");var d=document.createElement("div"),u=document.createElement("span");d.classList.add("lighthouse-modal__header"),u.classList.add("lh-appname");var m=document.createElement("span");m.textContent="Audit: ";var f=document.createElement("br");u.append(m,f,l);var p=document.createElement("button");p.classList.add("close-lh-btn"),p.textContent="x";var v=document.createElement("div"),g=document.createElement("div"),b=document.createElement("span");v.classList.add("lighthouse-modal__body"),g.classList.add("lh-main"),b.textContent="100",b.classList.add("lh-main__score");var h=document.createElement("a");h.href=s,h.title="pagespeed.web.dev",h.target="_blank",h.rel="noopener noreferrer",h.textContent="View latest audit",h.classList.add("lh-main__score-title"),d.append(u,p),g.append(b,h),v.append(g);for(var S=0;S<4;S+=1){var N=_(o[S],2),U=N[0],J=N[1],M=document.createElement("div");M.classList.add("lh-sub");var k=document.createElement("div");k.classList.add("lh-sub-title"),k.textContent=U;var C=document.createElement("div");C.classList.add("lh-sub__metrics-title");var T=document.createElement("span");T.classList.add("lh-sub__metrics-title"),T.textContent=i[S],C.append(T);var V=document.createElement("hr"),q=document.createElement("div");q.classList.add("lh-sub-subtitle"),q.textContent=J,M.append(k,C,V,q),v.append(M)}return c.append(d,v),e.append(c),e.addEventListener("click",er),setTimeout(function(){p.focus()},50),e},rr=function(r){W.classList.contains("body-prevent-scroll")||(W.append(tr(r.target.getAttribute("data-lh-proj"))),r.target.blur(),le(),window.addEventListener("keydown",pe))};const ar=rr;function G(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=nr(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,s=!1,i;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{!l&&e.return!=null&&e.return()}finally{if(s)throw i}}}}function nr(t,r){if(t){if(typeof t=="string")return ve(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ve(t,r)}}function ve(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}var he=document.querySelectorAll(".proj-cal--tab"),ye=document.querySelectorAll(".proj-comp--tab"),or=document.querySelectorAll(".open-overview--btn"),cr=document.querySelectorAll(".open-lh--btn"),ir=function(){var r={calendar:["day","week","month","year","list"],comparr:["vanilla","react"],vanilla:"https://codepen.io/chaseottofy/pens/public",react:"https://chaseottofy.github.io/react-boilerplate/"},e=function(s,i,o,c){var d="".concat(i,"-current"),u=document.querySelector(".".concat(d)),m=+u.getAttribute("data-".concat(i,"-nth"));if(s!==m){var f="".concat(i,"-cell__image--").concat(s),p=document.querySelector(".".concat(f));if(p===null){var v=i==="cal",g=[f,"".concat(i,"-current"),v?"project-image__calendar":"project-image__components"];Ft(u.parentElement,"data-".concat(i,"-nth"),g,+s,v),u.classList.remove(d),u.classList.add("fade-img--out"),setTimeout(function(){u.classList.add("hide-img"),u.classList.remove("fade-img--out")},200)}else u.classList.remove(d),u.classList.add("hide-img"),p.classList.remove("hide-img"),p.classList.add(d);if(c){var b=r[o],h=document.querySelector(".component-search");h.setAttribute("href",b);var S=h.lastElementChild;S.textContent="".concat(o," components")}}},a=function(s,i,o,c){var d=G(s.entries()),u;try{var m=function(){var p=_(u.value,2),v=p[0],g=p[1];g.addEventListener("click",function(){e(v+1,i,o[v],c)})};for(d.s();!(u=d.n()).done;)m()}catch(f){d.e(f)}finally{d.f()}},n=function(){he[0].previousElementSibling.checked=!0,a(he,"cal",r.calendar,!1),ye[0].previousElementSibling.checked=!0,a(ye,"comp",r.comparr,!0)};n()},lr=function(){var r=G(or),e;try{for(r.s();!(e=r.n()).done;){var a=e.value;a.addEventListener("click",Qt)}}catch(n){r.e(n)}finally{r.f()}},sr=function(){var r=G(cr),e;try{for(r.s();!(e=r.n()).done;){var a=e.value;a.addEventListener("click",ar)}}catch(n){r.e(n)}finally{r.f()}},dr=function(){ir(),lr(),sr()};const ur=dr;function mr(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=fr(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,s=!1,i;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{!l&&e.return!=null&&e.return()}finally{if(s)throw i}}}}function fr(t,r){if(t){if(typeof t=="string")return ge(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ge(t,r)}}function ge(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}var pr=document.querySelector(".contact-form--container"),A=document.querySelector(".contact-form"),be=document.querySelector(".form-name--input"),E=document.querySelector(".form-contact--input"),we=document.querySelector(".form-message--input"),L=document.querySelector(".submit-form--btn"),vr=document.querySelectorAll(".contact-option--input"),O=document.querySelector(".contact-form--wrapper"),hr=document.querySelector(".form-hp--one"),w={lastSubmit:localStorage.getItem("RL")?JSON.parse(localStorage.getItem("RL")).lastSubmit:0,submitCount:localStorage.getItem("RL")?JSON.parse(localStorage.getItem("RL")).submitCount:0,isDisabled:localStorage.getItem("RL")?JSON.parse(localStorage.getItem("RL")).isDisabled:!1,tempBlock:!0},yr=function(){var r=Date.now();w.submitCount+=1,r-w.lastSubmit<3e3&&(w.isDisabled=!0),w.submitCount>10&&(w.isDisabled=!0),w.lastSubmit=r,localStorage.setItem("RL",JSON.stringify(w))},gr=function(r){var e=r.target.value;e==="phone"?(E.type="tel",E.placeholder="Enter your phone number"):e==="email"&&(E.type="email",E.placeholder="Enter your email address")},br=function(){be.value&&E.value&&we.value?(L.disabled=!1,L.classList.add("btn-allow")):(L.disabled=!0,L.classList.remove("btn-allow"))},Se=function(){L.blur(),L.disabled=!0,O.classList.add("disable-form"),A.classList.add("disable-form")},wr=function(){w.isDisabled?(Se(),pr.classList.add("disable-contact-form")):setTimeout(function(){w.tempBlock=!1},3e3)},Sr=function(){var r=document.createElement("div");r.classList.add("success-message"),r.append(ne()),O.prepend(r)},_e=function(){be.classList.toggle("skeleton"),E.classList.toggle("skeleton"),we.classList.toggle("skeleton")},z=function(){A.reset(),O.firstElementChild.remove(),L.classList.remove("btn-allow"),O.classList.remove("disable-form"),A.classList.remove("disable-form"),_e()},_r=function(){(w.tempBlock||hr.value!=="1")&&(z(),O.classList.add("disable-form"),w.isDisabled=!0,alert("WW91IGFyZSBhIGJvdA=="))},Lr=function(){Se(),yr(),_r()},kr=function(r){r.preventDefault(),Lr();var e=new FormData(A);_e(),Sr(),fetch("https://script.google.com/macros/s/".concat("AKfycbxIsWwtex_ib3i5kVnzqpa0SVy9wcPfZUAJEUsYY8--2Qp5ivNachSFNUs_mbyatgdo","/exec"),{method:"POST",body:e}).then(function(a){return a.text()}).then(function(){B("Message Sent!",!1),z()}).catch(function(){B("Something went wrong!",!1),z()})},Ar=function(){wr();var r=mr(vr),e;try{for(r.s();!(e=r.n()).done;){var a=e.value;a.addEventListener("change",gr)}}catch(n){r.e(n)}finally{r.f()}A.addEventListener("input",br),A.addEventListener("submit",kr)};const Er=Ar;var Cr=document.querySelector(".cm-left--time"),Tr=function(){return new Date().toLocaleString("en-US",{timeZone:"America/Denver",hour:"numeric",minute:"numeric",hour12:!0})},Ir=function(){Cr.textContent="MST: ".concat(Tr())};const jr=Ir;var Or=function(){var r=`
      ,o888888o. 8888888 8888888888 8888888 8888888888 ,o888888o.     
   . 8888     '88.     8 8888             8 8888    . 8888     '88.   
  ,8 8888       '8b    8 8888             8 8888   ,8 8888       '8b  
  88 8888        '8b   8 8888             8 8888   88 8888        '8b 
  88 8888         88   8 8888             8 8888   88 8888         88 
  88 8888         88   8 8888             8 8888   88 8888         88 
  88 8888        ,8P   8 8888             8 8888   88 8888        ,8P 
  '8 8888       ,8P    8 8888             8 8888   '8 8888       ,8P  
   ' 8888     ,88'     8 8888             8 8888    ' 8888     ,88'   
      '8888888P'       8 8888             8 8888       '8888888P'   
  `,e=document.querySelector(".ascii-wrapper");e.textContent=r};const Mr=Or;function qr(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=xr(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,s=!1,i;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{!l&&e.return!=null&&e.return()}finally{if(s)throw i}}}}function xr(t,r){if(t){if(typeof t=="string")return Le(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Le(t,r)}}function Le(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}var Pr=document.querySelectorAll(".mailto-link"),Hr=function(){var r="subject=".concat(encodeURIComponent("Contacting you from your portfolio site")),e="ottofy@zohomail.com",a=qr(Pr),n;try{for(a.s();!(n=a.n()).done;){var l=n.value;l.setAttribute("href","mailto:".concat(e,"?").concat(r))}}catch(s){a.e(s)}finally{a.f()}};const Fr=Hr;var Br=function(){jr(),Mr(),Fr()};const Rr=Br;var Vr=document.querySelector(".resume-btn"),Dr=function(){};const Wr=Dr;var Nr=function(){xe(),ze(),st(),ht(),ur(),Er(),Rr(),Wr()};Nr()})();

//# sourceMappingURL=index.1.cd8a024b.js.map