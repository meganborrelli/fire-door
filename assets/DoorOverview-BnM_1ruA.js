import{d as C,r as w,o as a,c as p,e as l,w as o,b as _,f as h,g as t,h as i,F as y,i as S,j as V,t as u}from"./index-CQWIQaZf.js";const B={class:"prev-submissions"},F={key:0},D=C({__name:"DoorOverview",props:{formid:{}},setup(N){const s=w(null);async function d(){s.value=await fetch("https://kcmpmbkzfjbiagr.form.io/firesafetychecker/submission").then(n=>n.json()).then(n=>(console.log(n,"boo"),n.reverse())),console.log(s)}function m(n){console.log(n)}return(n,e)=>{const v=t("v-btn"),f=t("v-expansion-panel-title"),x=t("v-expansion-panel-text"),b=t("v-expansion-panel"),k=t("v-expansion-panels");return a(),p("div",B,[l(v,{onClick:e[0]||(e[0]=r=>d())},{default:o(()=>e[2]||(e[2]=[i(" View Pre Selected Form ")])),_:1}),_("div",null,[s.value!==null?(a(),p("div",F,[l(k,null,{default:o(()=>[(a(!0),p(y,null,S(s.value,(r,c)=>(a(),V(b,{onClick:e[1]||(e[1]=g=>m(g)),key:c,class:"pb-3",value:"header"},{default:o(()=>[l(f,{"hide-actions":""},{default:o(()=>[i(" Report "+u(c),1)]),_:2},1024),l(x,null,{default:o(()=>[i(" Inpection Date: "+u(r.created),1),e[3]||(e[3]=_("br",null,null,-1)),i(" Is firedoor safe: "+u(r.data.isFireDoorSafe),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])):h("",!0)])])}}});export{D as default};
