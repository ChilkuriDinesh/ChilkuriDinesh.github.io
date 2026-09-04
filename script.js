
const loader=document.getElementById('loader'),count=document.getElementById('count'),bar=document.getElementById('bar');
let p=0;const t=setInterval(()=>{p+=Math.floor(Math.random()*9)+4;if(p>=100){p=100;clearInterval(t);setTimeout(()=>loader.classList.add('hidden'),260)}count.textContent=p;bar.style.width=p+'%'},55);
const words=['SCALABLE SYSTEMS','CLOUD PLATFORMS','DEVOPS PIPELINES','AI INFRASTRUCTURE'];let i=0;const role=document.getElementById('roleWord');
setInterval(()=>{i=(i+1)%words.length;role.animate([{opacity:1},{opacity:0}],{duration:160,fill:'forwards'}).onfinish=()=>{role.textContent=words[i];role.animate([{opacity:0},{opacity:1}],{duration:230,fill:'forwards'})}},2400);
const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>o.observe(el));document.getElementById('year').textContent=new Date().getFullYear();
