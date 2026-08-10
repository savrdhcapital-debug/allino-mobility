document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('main section, .stats, .how, .app-promo, .hero').forEach((section,i)=>{
    if(!section.classList.contains('hero')) section.classList.add('reveal-up');
    section.classList.add('home-animate');
  });
  const cards=document.querySelectorAll('.vehicle-card,.feature-card,.stat,.how .steps>div,.app-promo>*');
  cards.forEach(c=>c.classList.add('reveal-up'));
  const els=document.querySelectorAll('.home-animate,.reveal-up,.reveal-left,.reveal-right');
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -50px'});
  els.forEach(e=>obs.observe(e));
});
