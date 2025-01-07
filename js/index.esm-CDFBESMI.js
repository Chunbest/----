import{a as u}from"./chunk-3QGRG5LW.js";import"./chunk-WBRNLJXY.js";var l=t=>Array.isArray(t)?u.random(t[0],t[1]):t,T=(t,e)=>{for(e=e.toUpperCase();t;){if(t.nodeName===e)return!0;t=t.parentNode}return!1},C=(t,e)=>{var i;if(e.move.includes("emit")){let{emitRadius:a=[50,180]}=(i=e.moveOptions)!==null&&i!==void 0?i:{},s=u.random(0,360)*Math.PI/180,n=[-1,1][u.random(0,1)]*l(a);t.endPos={x:t.x+n*Math.cos(s),y:t.y+n*Math.sin(s)}}},R=(t,e)=>{var i;if(e.move.includes("rotate")){let{angle:a=[-180,180]}=(i=e.moveOptions)!==null&&i!==void 0?i:{};t.endRotation=l(a)}},x=t=>Array.isArray(t)?t.map(e=>e*100):[t*100,t*100],y=class{constructor(t,e,i,a,s,n,o){this.ctx=t,this.x=e,this.y=i,this.color=a,this.radius=s,this.alpha=n,this.lineWidth=o,this.rotation=0}draw(){let{ctx:t,x:e,y:i}=this;t.save(),t.translate(e,i),t.rotate(this.rotation*(Math.PI/180)),t.globalAlpha=this.alpha,this.paint(),this.lineWidth?(t.lineWidth=this.lineWidth,t.strokeStyle=this.color,t.stroke()):(t.fillStyle=this.color,t.fill()),t.globalAlpha=1,t.restore()}},b=class extends y{paint(){this.ctx.beginPath(),this.ctx.arc(0,0,this.radius,0,2*Math.PI),this.ctx.closePath()}},z=class extends y{constructor(t,e,i,a,s,n,o,r){super(t,e,i,a,s,n,r),this.sides=o}paint(){let{ctx:t,sides:e,radius:i}=this;t.beginPath(),t.moveTo(i*Math.cos(0),i*Math.sin(0));for(let a=1;a<=e;a++){let s=a*2*Math.PI/e;t.lineTo(i*Math.cos(s),i*Math.sin(s))}t.closePath()}},k=class extends y{constructor(t,e,i,a,s,n,o,r){super(t,e,i,a,s,n,r),this.spikes=o}paint(){let{ctx:t,spikes:e,radius:i}=this;t.beginPath(),t.moveTo(0,-i);for(let a=0;a<e*2;a++){let s=a*Math.PI/e-Math.PI/2,n=a%2===0?i:i*.5,o=Math.cos(s)*n,r=Math.sin(s)*n;t.lineTo(o,r)}t.closePath()}},P=(t,e,i,a,s)=>{let n=l(a.number),{radius:o,alpha:r=1,lineWidth:m}=a.shapeOptions;r=x(r);let h=[];for(let c=0;c<n;c++){let v=a.colors[u.random(0,a.colors.length-1)],E=[t,e,i,v,l(o),l(r)/100],L=s===b?E:[...E,l(s===k?a.shapeOptions.spikes:a.shapeOptions.sides)],f=new s(...L,l(m));C(f,a),R(f,a),h.push(f)}return h},D=(t,e,i,a)=>P(t,e,i,a,b),S=(t,e,i,a)=>P(t,e,i,a,k),N=(t,e,i,a)=>P(t,e,i,a,z),d=document.createElement("canvas");d.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999",document.body.appendChild(d);var p=d.getContext("2d"),A=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?"touchstart":"click",W=0,O=0,M=()=>{let{clientWidth:t,clientHeight:e}=document.documentElement;d.width=t*2,d.height=e*2,d.style.width=t+"px",d.style.height=e+"px",p.setTransform(1,0,0,1,0,0),p.scale(2,2)},X=t=>{var e,i;W=(e=t.clientX)!==null&&e!==void 0?e:t.touches&&t.touches[0].clientX,O=(i=t.clientY)!==null&&i!==void 0?i:t.touches&&t.touches[0].clientY},Y=t=>{var e,i;let{move:a,moveOptions:s}=t,n={};if(a.includes("emit")){let{radius:o=.1,alphaChange:r=!1,alphaEasing:m="linear",alphaDuration:h=[600,800],alpha:c=0}=(e=s)!==null&&e!==void 0?e:{};n={x:v=>v.endPos.x,y:v=>v.endPos.y,radius:l(o)},r&&(n.alpha={value:l(x(c))/100,easing:m,duration:l(h)})}else if(a.includes("diffuse")){let{diffuseRadius:o=[80,160],lineWidth:r=0,alphaEasing:m="linear",alphaDuration:h=[600,800],alpha:c=0}=(i=s)!==null&&i!==void 0?i:{};n={radius:l(o),lineWidth:l(r),alpha:{value:l(x(c))/100,easing:m,duration:l(h)}}}return a.includes("rotate")&&(n.rotation=o=>o.endRotation),n},H=t=>{for(let e of t)e.draw()},q=u({duration:1/0,update(){p.clearRect(0,0,d.width,d.height)}}),g=null,w=null,I=t=>{w=t,g&&document.removeEventListener(A,g,!1),g=e=>{t.excludeElements.some(i=>T(e.target,i))||(q.play(),X(e),F(W,O))},document.addEventListener(A,g,!1),M(),window.removeEventListener("resize",M,!1),window.addEventListener("resize",M,!1)},F=(t,e)=>{if(!w)return;let{particles:i}=w,a=u().timeline();i.forEach(s=>{var n;let o=[];switch(s.shape){case"circle":o=D(p,t,e,s);break;case"star":o=S(p,t,e,s);break;case"polygon":o=N(p,t,e,s)}a.add({targets:o,duration:l(s.duration),easing:(n=s.easing)!==null&&n!==void 0?n:"linear",update:H,...Y(s)})}),a.play()},U=t=>{document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>I(t),{passive:!0}):I(t)};export{U as default};/*! For license information please see index.esm-CDFBESMI.js.LEGAL.txt */
