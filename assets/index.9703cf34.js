import{d as e,o as t,c as n,a as o,b as s,e as r,f as a,g as i,H as u}from"./vendor.0c78588c.js";var c=e({name:"App",components:{}});const l=o("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1),m=o("p",null,"vue3.x + vite2.x + ts脚手架完成",-1);let d;c.render=function(e,o,s,r,a,i){return t(),n("div",null,[l,m])};const p={},h=[{path:"/",name:"Home",component:{}},{path:"/vuex",name:"Vuex",component:{}},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t||0===t.length)return e();if(void 0===d){const e=document.createElement("link").relList;d=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in p)return;p[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":d,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./axios.35d04e46.js")),["./assets/axios.35d04e46.js","./assets/vendor.0c78588c.js"])}],v=s({history:r(),routes:h}),f={count:0};var g=a({state:()=>f,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});i(c).use(v).use(g).use(u).mount("#app");