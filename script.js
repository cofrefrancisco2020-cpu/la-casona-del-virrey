(() => {
'use strict';
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#navegacion');
const closeMenu=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menú');};
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const wasOpen=nav.classList.contains('open');closeMenu();if(wasOpen)toggle.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
matchMedia('(min-width:901px)').addEventListener('change',closeMenu);
const filters=document.querySelectorAll('[data-filter]'),dishes=document.querySelectorAll('[data-category]');
filters.forEach(button=>button.addEventListener('click',()=>{
filters.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
let count=0;dishes.forEach(dish=>{const visible=button.dataset.filter==='todos'||dish.dataset.category===button.dataset.filter;dish.hidden=!visible;if(visible){count++;dish.classList.add('visible');}});
document.querySelector('#filter-status').textContent=count+' '+(count===1?'plato disponible':'platos disponibles')+' en '+button.textContent.toLowerCase()+'.';
}));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
document.documentElement.classList.add('js-motion');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));
}
const form=document.querySelector('#reservation-form'),dateInput=document.querySelector('#date');
const localDay=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Santiago',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
dateInput.min=localDay();
form.addEventListener('submit',event=>{
event.preventDefault();dateInput.min=localDay();
const name=form.elements.namedItem('name').value.trim();
if(!name){form.elements.namedItem('name').setCustomValidity('Escribe tu nombre para continuar.');form.elements.namedItem('name').reportValidity();return;}
if(!form.reportValidity())return;
const [y,m,d]=form.elements.date.value.split('-');
const message='Hola, La Casona del Virrey. Quisiera consultar disponibilidad para una reserva.\n\nNombre: '+name+'\nFecha: '+d+'/'+m+'/'+y+'\nHora: '+form.elements.time.value+'\nPersonas: '+form.elements.guests.value+'\nOcasión: '+form.elements.occasion.value+'\n\nQuedo a la espera de su confirmación. ¡Gracias!';
const url='https://wa.me/56953023936?text='+encodeURIComponent(message);
const fallback=document.querySelector('#reservation-fallback');fallback.href=url;fallback.hidden=false;
window.open(url,'_blank','noopener,noreferrer');
document.querySelector('#form-status').textContent='Tu solicitud está lista. Envíala en WhatsApp para que el restaurante confirme la disponibilidad.';
});
form.elements.namedItem('name').addEventListener('input',()=>form.elements.namedItem('name').setCustomValidity(''));
document.querySelector('#year').textContent=new Date().getFullYear();
})();

(() => {
  const popup=document.querySelector('#instagram-popup');
  const key='virrey-instagram-v1-seen';
  let shown=false;
  try { shown=sessionStorage.getItem(key)==='1'; } catch {}
  const remember=()=>{shown=true;try{sessionStorage.setItem(key,'1');}catch{}};
  popup.querySelectorAll('[data-close-popup]').forEach(button=>button.addEventListener('click',()=>popup.close()));
  popup.addEventListener('close',remember);
  popup.querySelector('#popup-instagram-link').addEventListener('click',()=>popup.close());
  popup.addEventListener('click',event=>{
    if(event.target!==popup)return;
    const box=popup.getBoundingClientRect();
    if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)popup.close();
  });
  function announce(){
    if(shown||typeof popup.showModal!=='function')return;
    if(document.hidden||document.activeElement?.closest('#reservation-form')){setTimeout(announce,5000);return;}
    popup.showModal();remember();
  }
  if(!shown)setTimeout(announce,3000);
})();
