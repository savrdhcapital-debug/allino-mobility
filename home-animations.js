/* Allino Home — intersection based scroll animation */
(function(){
  const items=document.querySelectorAll('.reveal,.reveal-up,.reveal-left,.reveal-right,.hero-reveal,.stagger');
  if(!items.length)return;
  const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.14,rootMargin:'0px 0px -8% 0px'});
  items.forEach(el=>io.observe(el));
  document.querySelectorAll('.hero,.hero-inner').forEach(el=>el.classList.add('is-visible'));
})();
