import{r as h,b as B,d as C,e as V,f as E,c as l,a as e,w as p,v as L,u as y,i as m,F as i,g as x,h as j,o as n,t as d,j as N,n as A}from"./index-960086c2.js";import _ from"./vocabulary-c0d433db.js";const $={class:"px-4 pt-6 2xl:px-0"},D={class:"border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"},M={class:"items-center justify-between lg:flex"},S=e("div",{class:"mb-4 lg:mb-0"},[e("h3",{class:"mb-2 text-xl font-bold text-gray-900 dark:text-white"}," 雅思词汇真经 "),e("span",{class:"text-base font-normal text-gray-500 dark:text-gray-400"},"涵盖雅思必备核心词，逻辑词群记忆法")],-1),U={class:"items-center sm:flex"},F={class:"flex items-center"},R=e("option",{value:""}," 全部章节 ",-1),z=["value"],O={class:"relative ml-2 flex-1"},Z=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"h-4 w-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),q={class:"mt-6 flex flex-col"},H={class:"overflow-x-auto rounded-lg"},I={class:"inline-block min-w-full align-middle"},J={class:"overflow-hidden shadow sm:rounded-lg"},K={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-600"},P=e("thead",{class:"bg-gray-50 dark:bg-gray-700"},[e("tr",null,[e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," # "),e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 词 "),e("th",{class:"w-0 text-left text-xs font-medium text-gray-500 dark:text-white"}," 词性 "),e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 词义 "),e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 例句 "),e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 拓展 ")])],-1),Q={class:"bg-white dark:bg-gray-800"},W={class:"bg-hex-f3f3f3"},X={colspan:"6",class:"px-4 py-6 text-sm font-normal text-gray-900 dark:bg-gray-500 dark:text-white"},Y={class:"flex flex-row"},G={class:"flex flex-1 items-center"},ee={class:"text-lg"},te={class:"justify-items-end"},se={controls:""},oe=["src"],re={class:"p-4"},ae={class:"whitespace-nowrap p-4"},de=["title","href"],le={style:{"font-style":"italic","font-family":"times"}},ne={class:"p-4"},ie={class:"p-4"},ce={class:"p-4"},xe={__name:"index",setup(ue){const u=h(""),b=Object.keys(_),g=h(b[0]),w=h(!1),k=B(_),v=C(()=>{const s=structuredClone(_),r=u.value.trim().toLowerCase(),t=g.value;if(t!=="")for(const o in s)o!==t&&delete s[o];if(r!=="")for(const o in s){const c=s[o],f=[];c.words.forEach(a=>{f.push(a.filter(T=>T.word.toLowerCase().includes(r)))}),c.words=f}return s});return V(()=>{w.value=!0;const s=document.getElementsByTagName("audio");for(const r of s)r.onplay=()=>{for(const t of s)t.blur(),r!==t&&t.pause()}}),E(()=>{for(const s of document.getElementsByTagName("audio"))s.load()}),document.addEventListener("keyup",s=>{if(["ArrowLeft","ArrowRight"].includes(s.key)){s.preventDefault();const r=document.getElementsByTagName("audio");for(const t of r)if(!t.paused){t.blur();const o=s.key==="ArrowLeft"?-3:3;t.currentTime=t.currentTime+o}}}),(s,r)=>(n(),l("div",$,[e("div",D,[e("div",M,[S,e("div",U,[e("div",F,[p(e("select",{"onUpdate:modelValue":r[0]||(r[0]=t=>m(g)?g.value=t:null),class:"block w-full flex-1 border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400"},[R,(n(!0),l(i,null,x(y(k),(t,o)=>(n(),l("option",{key:o,value:o},d(o),9,z))),128))],512),[[L,y(g)]]),e("div",O,[Z,p(e("input",{"onUpdate:modelValue":r[1]||(r[1]=t=>m(u)?u.value=t:null),type:"search",class:"block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400",placeholder:"Search"},null,512),[[j,y(u)]])])])])]),e("div",q,[e("div",H,[e("div",I,[e("div",J,[e("table",K,[P,e("tbody",Q,[(n(!0),l(i,null,x(v.value,(t,o)=>(n(),l(i,{key:o},[e("tr",W,[e("td",X,[e("div",Y,[e("div",G,[e("span",ee,d(o),1),N(" （ "+d(t.groupCount)+" 组 "+d(t.wordCount)+" 个词 ） ",1)]),e("div",te,[e("audio",se,[e("source",{src:`vocabulary/audio/${t.audio}`,type:"audio/mpeg"},null,8,oe)])])])])]),(n(!0),l(i,null,x(t.words,(c,f)=>(n(),l(i,{key:c.label},[(n(!0),l(i,null,x(c,a=>(n(),l("tr",{key:a.id,class:A([{"bg-gray-50 dark:bg-gray-700":a.id%2===0,[`group-color-${f%15}`]:!0},"text-sm text-gray-900 dark:text-white"])},[e("td",re,d(a.id),1),e("td",ae,[e("a",{class:"hover:underline",title:`在剑桥词典中查询 ${a.word}`,target:"_blank",href:`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${a.word}`},d(a.word),9,de)]),e("td",le,d(a.pos),1),e("td",ne,d(a.meaning),1),e("td",ie,d(a.example),1),e("td",ce,d(a.extra),1)],2))),128))],64))),128))],64))),128))])])])])])])])]))}};export{xe as default};
