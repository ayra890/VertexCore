const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('#mainNav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const counters=document.querySelectorAll('[data-count]');
const counterObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  const el=entry.target, target=parseFloat(el.dataset.count), decimals=String(target).includes('.')?2:0;
  let start=0, duration=1000, startTime=null;
  function tick(t){if(!startTime)startTime=t; const p=Math.min((t-startTime)/duration,1); const eased=1-Math.pow(1-p,3); el.textContent=(target*eased).toFixed(decimals); if(p<1)requestAnimationFrame(tick)}
  requestAnimationFrame(tick); counterObserver.unobserve(el);
 })
},{threshold:.7});
counters.forEach(c=>counterObserver.observe(c));

const bills=document.querySelectorAll('.bill');
const prices=document.querySelectorAll('.price strong');
bills.forEach(btn=>btn.addEventListener('click',()=>{
 bills.forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const period=btn.dataset.period;
 prices.forEach(p=>p.textContent=p.dataset[period]);
}));

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav a[href^="#"]')];
const sectionObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id));
  }
 })
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>sectionObserver.observe(s));
