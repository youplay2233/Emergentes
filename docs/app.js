const pages=[...document.querySelectorAll('.content-page')];
const nav=[...document.querySelectorAll('.nav-item')];
const title=document.getElementById('pageTitle');
const sidebar=document.getElementById('sidebar');

const names={
  inicio:'Inicio',
  p1:'Práctica 01 · Rigidbody',
  p2:'Práctica 02 · Colliders',
  p3:'Práctica 03 · Cañón',
  p4:'Práctica 04 · UI',
  p5:'Práctica 05 · Latencia',
  jarvis:'Proyecto JARVIS'
};

function showPage(id){
  pages.forEach(p=>p.classList.toggle('active',p.id===id));
  nav.forEach(n=>n.classList.toggle('active',n.dataset.target===id));
  title.textContent=names[id]||id;
  history.replaceState(null,'','#'+id);
  window.scrollTo({top:0,behavior:'smooth'});
  sidebar.classList.remove('open');
}
nav.forEach(n=>n.addEventListener('click',()=>showPage(n.dataset.target)));
document.querySelectorAll('.jump').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.jump)));
document.getElementById('menuBtn').addEventListener('click',()=>sidebar.classList.toggle('open'));

const initial=location.hash.replace('#','');
if(names[initial]) showPage(initial);

let ammo=10;
const fire=document.getElementById('fireDemo');
const counter=document.getElementById('ammoCounter');
const flash=document.getElementById('shotFlash');
fire.addEventListener('click',()=>{
  if(ammo<=0){fire.textContent='SIN MUNICIÓN';return;}
  ammo--;counter.textContent=ammo;
  flash.classList.remove('flash'); void flash.offsetWidth; flash.classList.add('flash');
  if(ammo===0) fire.textContent='SIN MUNICIÓN';
});