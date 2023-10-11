import{r,_ as g,n as f,p as _,o as m,c as h,b as t,t as o,j as v,e as p,q as b,s as w}from"./index-2e617587.js";const k=a=>{const s=r([]),l=r([null]),e=r(0),i=r(0),n=r("");return{item:s,error:l,location:n,lat:e,lng:i,load:async()=>{try{let d=await fetch("http://localhost:3000/items/"+a);if(!d.ok)throw Error("That item does not exist.");s.value=await d.json(),e.value=s.value.latitude_breedtegraad,i.value=s.value.longitude_lengtegraad,n.value=e.value+" , "+i.value}catch(d){l.value=d.message}}}},y={props:["id"],setup(a){const{item:s,error:l,location:e,load:i}=k(a.id);i(),console.log(e);let n;return f(()=>{n=_.map("map").setView([50.85,4.35],13),_.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(n);let u=_.icon({iconUrl:"../src/assets/images/map-marker-check.png",iconSize:[38,39],iconAnchor:[0,0],popupAnchor:[0,0],shadowSize:[38,95],shadowAnchor:[22,94]});_.marker([50.85,4.35],{icon:u}).addTo(n)}),{item:s,error:l}}},c=a=>(b("data-v-339c68c5"),a=a(),w(),a),x={key:0},S={key:1},I={class:"z-1"},z={class:"font-bold text-4xl font-sans"},T={class:"pt-5"},V=c(()=>t("br",null,null,-1)),A={class:"pt-5"},B=c(()=>t("br",null,null,-1)),N=c(()=>t("hr",{class:"mt-5"},null,-1)),j={class:"pt-5"},q=["href"],C=c(()=>t("br",null,null,-1)),E=["href"],L={class:"pt-5"},M=c(()=>t("hr",{class:"mt-5"},null,-1)),D=c(()=>t("div",{id:"map",class:"mymap z-10"},null,-1)),O={key:2},U=c(()=>t("p",null,"Loading ...",-1)),Z=[U];function F(a,s,l,e,i,n){return m(),h("div",null,[e.error?(m(),h("div",x,[t("p",null,o(e.error),1)])):v("",!0),e.item?(m(),h("div",S,[t("div",I,[t("h3",z,o(e.item.nom_du_musee),1),t("p",T,[p(o(e.item.adresse)+" ",1),V,p(o(e.item.code_postal_postcode)+" "+o(e.item.commune_gemeente),1)]),t("p",A,[p(o(e.item.telephone_telefoon)+" ",1),B,p(o(e.item.e_mail),1)]),N,t("p",j,[t("a",{href:e.item.site_web_website,target:"_blank"},o(e.item.site_web_website),9,q),C,t("a",{href:e.item.facebook,target:"_blank"},o(e.item.facebook),9,E)]),t("p",L,o(e.item.coordonnees_geographiques)+" "+o(e.item.longitude_lengtegraad)+" "+o(e.item.latitude_breedtegraad),1),M]),D])):(m(),h("div",O,Z))])}const H=g(y,[["render",F],["__scopeId","data-v-339c68c5"]]);export{H as default};
