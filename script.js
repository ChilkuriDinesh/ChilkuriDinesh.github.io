
const loader=document.getElementById("loader");
const count=document.getElementById("loadCount");
const bar=document.getElementById("loaderBar");
let progress=0;
const timer=setInterval(()=>{
  progress += Math.floor(Math.random()*8)+3;
  if(progress>=100){
    progress=100;
    clearInterval(timer);
    setTimeout(()=>loader.classList.add("hidden"),280);
  }
  count.textContent=progress;
  bar.style.width=progress+"%";
},58);

const words=["SCALABLE SYSTEMS","CLOUD PLATFORMS","DEVOPS PIPELINES","AI INFRASTRUCTURE"];
let roleIndex=0;
const roleWord=document.getElementById("roleWord");
setInterval(()=>{
  roleIndex=(roleIndex+1)%words.length;
  roleWord.animate(
    [{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-10px)"}],
    {duration:170,fill:"forwards"}
  ).onfinish=()=>{
    roleWord.textContent=words[roleIndex];
    roleWord.animate(
      [{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}],
      {duration:240,fill:"forwards"}
    );
  }
},2400);

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();

document.querySelectorAll(".project-card,.stat-card,.road-item").forEach(card=>{
  card.addEventListener("pointermove",e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateX(${y*-1.2}deg) rotateY(${x*1.2}deg)`;
  });
  card.addEventListener("pointerleave",()=>card.style.transform="");
});
