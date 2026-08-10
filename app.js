const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
const today=new Date();const tomorrow=new Date(today);tomorrow.setDate(today.getDate()+1);const iso=d=>d.toISOString().slice(0,10);if($('#pickupDate')&&!$('#pickupDate').value)$('#pickupDate').value=iso(today);if($('#returnDate')&&!$('#returnDate').value)$('#returnDate').value=iso(tomorrow);
$('#menuBtn')?.addEventListener('click',()=>$('#nav')?.classList.toggle('open'));$$('.nav a').forEach(a=>a.addEventListener('click',()=>$('#nav')?.classList.remove('open')));
$$('.ride-tab').forEach(btn=>btn.addEventListener('click',()=>{$$('.ride-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active')}));
const toast=$('#toast');function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2800)}
$('#bookingForm')?.addEventListener('submit',e=>{e.preventDefault();showToast('Booking request received. Allino team will contact you shortly.')});$('#contactSubmit')?.addEventListener('click',()=>showToast('Message received. Allino team will contact you shortly.'));
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{const mode=btn.dataset.filter||btn.textContent.trim().toLowerCase();$$('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$$('.vehicle-card').forEach(card=>{const type=(card.dataset.type||card.querySelector('.card-image span')?.textContent||'').toLowerCase();card.style.display=mode==='all'||type===mode?'block':'none'})}));

// Use clean real vehicle photography instead of the earlier flat SVG cut-outs.
const heroImages=[
 ['https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20-%20Alto%20800%20LXi.JPG','https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Activa%206G.jpg','ALTO CNG'],
 ['https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20-%20wagonR.JPG','https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Activa%206G.jpg','WAGONR CNG'],
 ['https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Dzire%20VXi%20VVT.JPG','https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Activa%206G.jpg','DZIRE CNG']
];
let slide=0;const main=$('.main-vehicle img'),bike=$('.bike-photo img'),tag=$('.vehicle-tag');
function showSlide(i){if(!main||!bike)return;slide=(i+heroImages.length)%heroImages.length;main.src=heroImages[slide][0];bike.src=heroImages[slide][1];[main,bike].forEach(img=>{img.style.background='transparent';img.style.objectFit='contain';img.style.mixBlendMode='normal';});if(tag)tag.textContent=heroImages[slide][2];$$('.dots i').forEach((d,n)=>d.classList.toggle('on',n===slide))}
$$('.slider-arrow').forEach(b=>b.addEventListener('click',()=>showSlide(slide+(b.dataset.slide==='next'?1:-1))));
if(main&&bike){showSlide(0);setInterval(()=>showSlide(slide+1),7000)}

// How It Works: trigger staggered reveal + connecting-line progress on scroll.
const howSection=document.querySelector('.how');
if(howSection){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){howSection.classList.add('is-visible');}
  else if('IntersectionObserver' in window){
    const howObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){howSection.classList.add('is-visible');howObserver.unobserve(entry.target);}})},{threshold:.2,rootMargin:'0px 0px -8% 0px'});
    howObserver.observe(howSection);
  }else{howSection.classList.add('is-visible');}
}
