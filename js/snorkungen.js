class Snorkungen{constructor(){function t(t){return new Promise(e=>{setTimeout(()=>{e(2)},t)})}let e=20,n=10;const r=t=>"object"==typeof t,i=t=>"string"==typeof t,o=t=>"number"==typeof t,s=t=>"function"==typeof t,l=t=>(t.sort(()=>1),t),c=t=>(t.sort(()=>2),t),a=t=>!t,u=(t,e)=>e.appendChild(document.createElement(t)),h=(t,e,n)=>t.setAttribute(e,n),d=(t,e)=>t.textContent=e,p=(t,i,s)=>{let l,c;if(!(o(i)&&o(s)&&r(t)))return!1;l=a(l)?i:0,c=a(c)?s:0,t.style.left=l-e+e+"px",t.style.top=c-n+n+"px"};this.verifyType=((t,e)=>{if(!i(e))return!1;switch(e){case"object":return r(t);case"number":return o(t);case"string":return i(t);case"function":return s(t);default:return!1}}),this.createEl=((t,e)=>!(!r(e)||!i(t))&&u(t,e)),this.removeEl=(t=>!!r(t)&&t.parentNode.removeChild(t)),this.setAttribute=((t,e,n)=>!!(r(t)&&i(e)&&i(n))&&h(t,e,n)),this.setTextContent=((t,e)=>!(!r(t)||!i(e))&&d(t,e)),this.emptyElement=(t=>!!r(t)&&(t.innerHTML="")),this.styleDisplay=((t,e)=>!(!i(e)||!r(t))&&(t.style.display=e)),this.tooltip=new function(){let t=u("div",document.body);h(t,"class","tooltip"),h(t,"hidden",""),this.click=(e=>{t.removeAttribute("hidden"),p(t,e.clientX,e.clientY),t.textContent=e.target.dataset.tooltip,setTimeout(function(){h(t,"hidden","")},4500),t.onclick=(e=>{h(t,"hidden","")})})},this.assault=((t,e)=>{if(!r(e)||!i(t))return!1;if("encode"==e.type){let n="",r="";for(let r=0;r<t.length;r++)32==t.charCodeAt(r)?n+=e.n*e.n2+".":n+=t.charCodeAt(r)+e.magicNumber+".";let i=l(n.split("."));for(let t=0;t<i.length;t++)i[t]==e.n*e.n2&&"."==i[t].charAt(0)&&(i[t]=i[t].substr(1)),r+=i[t]+".";return btoa(e.n*e.n2+r+"Snorkungen")}if("decode"==e.type){let n=atob(t),r=c(n.split(".")),i="";e.n=parseInt(r[r.length-1])/e.n2;for(let t=1;t<r.length-1;t++)r[t]==e.n*e.n2?i+=" ":i+=String.fromCharCode(r[t]-e.magicNumber);return i}}),this.animateWord=(async(e,n,s)=>{if(i(e)&&r(n)&&o(s)){sk.emptyElement(n);let r=e.split(""),i=n.children;r.forEach(t=>{let e=u("span",n);d(e,t)});for(let e=0;e<r.length;e++)h(i[e],"class","show-span"),await t(s);return!0}return!1})}}