import{l as S,r,_ as g,a as n,b as l,E as h,p as w,h as b,d as t,m as I,u as B,o as v,e as V,t as a,F as f,f as m,q as C,v as R,j,g as G,s as k}from"./index-a3LztL3r.js";const M=S("register-store",()=>({currentIndex:r(0)})),y=s=>(w("data-v-dfd1ef7c"),s=s(),b(),s),$=y(()=>t("span",{class:"actual-text"}," Register ",-1)),E=y(()=>t("span",{"aria-hidden":"true",class:"hover-text"}," Register ",-1)),D=[$,E],L={__name:"EventRegisterBtn",setup(s){const p=M(),x=()=>{console.log(h[p.currentIndex].register),window.open(h[p.currentIndex].register)};return(_,u)=>(n(),l("button",{onClick:x,class:"button","data-text":"Awesome"},D))}},N=g(L,[["__scopeId","data-v-dfd1ef7c"]]),d=s=>(w("data-v-2c28861a"),s=s(),b(),s),q={class:"min-h-[100vh] event-container bg-[rgb(0,0,0)] flex flex-col ssm:pb-12"},A={class:"flex flex-col justify-center"},F={class:"poster flex justify-start"},z=["src","alt"],T={class:"poster-data flex flex-col h-full sm:gap-32 gap-12 place-items-start flex-wrap max-sm:flex-col justify-between sm:px-12 sm:pl-[125px] px-8 sm:py-10 py-8"},U=k('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-300 hover:text-gray-100 w-10 h-10 xl:w-12 xl:h-12" data-v-2c28861a><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-2c28861a></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-2c28861a></g><g id="SVGRepo_iconCarrier" data-v-2c28861a><path d="M16 8L8 16M12 12L16 16M8 8L10 10" class="stroke-gray-200" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2c28861a></path></g></svg>',1),H=[U],J={class:"flex flex-col flex-left tracking-wider"},K={class:"flex flex-col gap-10"},O={class:"flex flex-col"},P={class:"font-semibold font-robotoslab text-[30px] opacity-90",style:{filter:"drop-shadow(0 0 15px rgb(255, 255, 255))"}},Q={class:"font-bold font-merriweather md:text-[52px] sm:text-[47px] max-ssm:text-[42px] text-[35px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},W={class:"opacity-85 font-montserrat text-[25px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},X={class:"opacity-85 font-montserrat text-[25px]"},Y=d(()=>t("br",null,null,-1)),Z={class:"opacity-85 font-semibold font-montserrat text-[30px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},tt={class:"flex flex-col gap-12"},et={class:"flex flex-col gap-1"},st=d(()=>t("span",{class:"font-bold text-[25px] sm:text-[30px] tracking-wide font-merriweather"},"Description",-1)),ot={class:"pl-4 text-[18px] max-ssm:text-[16px]"},at={class:"guildines flex-col gap-1"},nt=d(()=>t("span",{class:"font-bold text-[25px] sm:text-[30px] tracking-wide font-merriweather"},"Rounds",-1)),lt={class:"pl-4 text-[20px] max-ssm:text-[16px]"},it={class:"list-disc pl-4"},ct={class:"guidelines flex flex-col gap-1"},rt=d(()=>t("span",{class:"font-bold text-[25px] tracking-wide sm:text-[30px] font-merriweather"},"Guidelines",-1)),dt={class:"pl-4 text-[18px] max-ssm:text-[16px]"},pt={class:"list-disc pl-4"},xt={class:"flex justify-center flex-col gap-4"},_t={class:"flex gap-3 text-center"},ut={class:"checkbox-wrapper-12"},ht={class:"cbx"},vt=["checked"],ft=d(()=>t("label",{for:"cbx-12"},null,-1)),mt=d(()=>t("svg",{fill:"none",viewBox:"0 0 15 14",height:"14",width:"15"},[t("path",{d:"M2 8.36364L6.23077 12L13 2"})],-1)),gt=k('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-2c28861a><defs data-v-2c28861a><filter id="goo-12" data-v-2c28861a><feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic" data-v-2c28861a></feGaussianBlur><feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur" data-v-2c28861a></feColorMatrix><feBlend in2="goo-12" in="SourceGraphic" data-v-2c28861a></feBlend></filter></defs></svg>',1),wt={key:0,class:"pt-2"},bt={__name:"EventView",setup(s){const p=I(),x=B(),_=r(0),u=r(""),e=r({});r("");const i=r(!1);return v(()=>{document.querySelector(".event-container").scrollIntoView({behavior:"smooth"})}),v(()=>{_.value=p.params.index,u.value=p.params.title,e.value=h[_.value],document.title=`${u.value} - Nrithya`}),(kt,c)=>(n(),l("div",q,[t("div",A,[t("div",F,[t("img",{src:e.value.poster,alt:e.value.title,class:"w-[100%] min-h-[400px] max-md:min-h-[300px] max-sm:min-h-[280px] max-vsm:min-h-[200px] object-fill"},null,8,z)]),t("div",T,[t("button",{onClick:c[0]||(c[0]=o=>V(x).back()),to:{name:"home",params:{to:"group"}},class:"arrow-icon-prev z-50 absolute float-right right-10 -mt-4 duration-500 max-md:right-5"},H),t("div",J,[t("div",K,[t("div",O,[t("span",P,a(e.value.club_name),1),t("span",Q,a(e.value.title),1),t("span",W,a(e.value.type),1),t("span",X,a(e.value.category),1),Y,t("span",Z,a(e.value.date),1)]),t("div",tt,[t("div",et,[st,t("span",ot,a(e.value.description),1)]),t("div",at,[nt,t("span",lt,[t("ul",it,[(n(!0),l(f,null,m(e.value.rounds,o=>(n(),l("li",{key:o},a(o),1))),128))])])]),t("div",ct,[rt,t("span",dt,[t("ul",pt,[(n(!0),l(f,null,m(e.value.guidelines,o=>(n(),l("li",{key:o},a(o),1))),128))])])]),t("div",xt,[t("div",_t,[t("div",ut,[t("div",ht,[C(t("input",{checked:i.value,"onUpdate:modelValue":c[1]||(c[1]=o=>i.value=o),type:"checkbox",id:"cbx-12"},null,8,vt),[[R,i.value]]),ft,mt]),gt]),t("button",{onClick:c[2]||(c[2]=o=>i.value=!i.value),class:"text-lg relative -mt-0.5 font-montserrat text-gray-300"},"I agree to the guidelines")]),i.value?(n(),l("div",wt,[j(N)])):G("",!0)])])])])])])]))}},St=g(bt,[["__scopeId","data-v-2c28861a"]]);export{St as default};
