import{_ as m,r as i,o,c as r,b as e,F as f,d as _,t as d,w as g,e as n,f as v,g as h}from"./index-54bd394c.js";const w={setup(){const t=i(0);let s=i("0");const u=i("null");i([]);let l=i([{message:"Foo"},{message:"Bar"}]),c=i([{id:1,postdate:"01/01/2023",title:"title 1",subtitle:"subtitle 1",author:"Ann",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis felis urna, eget malesuada orci volutpat et. Integer euismod lectus sed est tristique hendrerit. Nam hendrerit id neque non dictum. Aenean tempor mi eget nisl efficitur vestibulum. Pellentesque vitae convallis velit. Fusce quis placerat nisi. Donec vel neque fermentum elit ultricies rhoncus. Vivamus nec tellus vel velit eleifend facilisis."},{id:2,postdate:"01/01/2023",title:"title 2",subtitle:"subtitle 1",author:"Bram",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis felis urna, eget malesuada orci volutpat et. Integer euismod lectus sed est tristique hendrerit. Nam hendrerit id neque non dictum. Aenean tempor mi eget nisl efficitur vestibulum. Pellentesque vitae convallis velit. Fusce quis placerat nisi. Donec vel neque fermentum elit ultricies rhoncus. Vivamus nec tellus vel velit eleifend facilisis."}]);return{varBoolean:t,varNumber:s,varString:u,items:l,structuredData:c}}},$={class:"font-bold text-2xl pt-2"};function q(t,s,u,l,c,p){return o(),r("div",null,[e("ul",null,[(o(!0),r(f,null,_(l.items,a=>(o(),r("li",null,[e("p",$,d(a.message),1)]))),256))])])}const N=m(w,[["render",q]]),V={setup(){i("0");let t=i("0");function s(){t.value++}function u(){t.value--}return g(t,(l,c)=>{}),{varNumberCount:t,addTo:s,removeFrom:u}}},y={class:"font-bold text-2xl pb-2"};function A(t,s,u,l,c,p){return o(),r("div",null,[e("div",null,[e("p",y,"Count: "+d(l.varNumberCount),1)]),e("button",{class:"text-2xl pt-2 m-5 mr-5",onClick:s[0]||(s[0]=a=>l.addTo())},"+"),e("button",{class:"text-2xl pt-2 m-5",onClick:s[1]||(s[1]=a=>l.removeFrom())},"-")])}const D=m(V,[["render",A]]),F={setup(){let t=i([{id:1,postdate:"01/01/2023",title:"title 1",subtitle:"subtitle 1",author:"Ann",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis felis urna, eget malesuada orci volutpat et. Integer euismod lectus sed est tristique hendrerit. Nam hendrerit id neque non dictum. Aenean tempor mi eget nisl efficitur vestibulum. Pellentesque vitae convallis velit. Fusce quis placerat nisi. Donec vel neque fermentum elit ultricies rhoncus. Vivamus nec tellus vel velit eleifend facilisis."},{id:2,postdate:"01/01/2023",title:"title 2",subtitle:"subtitle 1",author:"Bram",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis felis urna, eget malesuada orci volutpat et. Integer euismod lectus sed est tristique hendrerit. Nam hendrerit id neque non dictum. Aenean tempor mi eget nisl efficitur vestibulum. Pellentesque vitae convallis velit. Fusce quis placerat nisi. Donec vel neque fermentum elit ultricies rhoncus. Vivamus nec tellus vel velit eleifend facilisis."}]);return console.log(t),{structuredData:t}}},T={class:"font-bold text-2xl"};function k(t,s,u,l,c,p){return o(),r("div",null,[e("ul",null,[e("ul",null,[(o(!0),r(f,null,_(l.structuredData,a=>(o(),r("li",null,[e("p",T,d(a.title),1),n(" "+d(a.author)+" "+d(a.body),1)]))),256))])])])}const B=m(F,[["render",k]]),C={components:{dataVars:N,dataAddapt:D,dataStructured:B}},I=e("p",{class:"font-bold text-4xl pb-5 font-sans"},"Example on different variables:",-1),S=e("p",{class:"pb-5"},[n("This example corresponds with the component in the folder "),e("b",null,"components/view/dataexamples/dataVars.vue"),n(". It will show two elements from an array called "),e("b",null,'"items"'),n(' and shows all the values corresponding with the key "message":')],-1),L=e("hr",{class:"mt-5 mb-5"},null,-1),E=e("p",{class:"font-bold font-sans text-xl"},"Example on addapting variables with functions:",-1),P=e("p",{class:"pb-5"},[n("This example corresponds with the component in the folder "),e("b",null,"components/view/dataexamples/dataAddapt.vue"),n(". It will sghow the computed value for the variable "),e("b",null,'"varNumberCount"'),n(". We have integrated two function that are launched by clicking two buttons of our template. The watch method to follow up the results of the functions:")],-1),W=e("hr",{class:"mt-5 mb-5"},null,-1),Y=e("p",{class:"font-bold font-sans text-xl"},"Example on structured data:",-1),j=e("p",{class:"pb-5"},[n("This example corresponds with the component in the folder "),e("b",null,"components/view/dataexamples/dataStructured.vue"),n(" It will show all values for each key in the structured data, that is stored in an Array. The array that contains all values is called "),e("b",null,'"structuredData"'),n(". You can see it as a simple list of values:")],-1),z=e("hr",{class:"mt-5 mb-5"},null,-1);function G(t,s,u,l,c,p){const a=v("dataVars"),b=v("dataAddapt"),x=v("dataStructured");return o(),r("div",null,[I,S,h(a),L,E,P,h(b),W,Y,j,h(x),z])}const J=m(C,[["render",G]]);export{J as default};