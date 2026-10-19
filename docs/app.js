
const pages = [...document.querySelectorAll('.page')];
const navBtns = [...document.querySelectorAll('.nav-btn')];
const crumbTitle = document.getElementById('crumbTitle');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const pageNames = {home:'Inicio',p1:'Práctica 01',p2:'Práctica 02',p3:'Práctica 03',p4:'Práctica 04',p5:'Práctica 05',jarvis:'Proyecto JARVIS'};

function showPage(id){
  pages.forEach(p => p.classList.toggle('active', p.id === id));
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.page === id));
  crumbTitle.textContent = pageNames[id] || id;
  location.hash = id;
  window.scrollTo({top:0, behavior:'smooth'});
  sidebar.classList.remove('open');
}
navBtns.forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.page)));
document.querySelectorAll('.jump').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.target)));
menuBtn?.addEventListener('click',()=>sidebar.classList.toggle('open'));
const initial = location.hash.replace('#','');
if(pageNames[initial]) showPage(initial);

// Tabs practice 2
const tabButtons = [...document.querySelectorAll('.tab')];
const tabPages = [...document.querySelectorAll('.tab-page')];
tabButtons.forEach(btn => btn.addEventListener('click', () => {
  tabButtons.forEach(b => b.classList.toggle('active', b===btn));
  tabPages.forEach(p => p.classList.toggle('active', p.id === btn.dataset.tab));
}));

// Practice 1 simulation
const p1Scene = document.getElementById('p1Scene');
const cubes = [...document.querySelectorAll('#p1Scene .cube')];
const p1Play = document.getElementById('p1Play');
const p1Reset = document.getElementById('p1Reset');
const p1Mass = document.getElementById('p1Mass');
const p1Drag = document.getElementById('p1Drag');
const p1Gravity = document.getElementById('p1Gravity');
const p1Kinematic = document.getElementById('p1Kinematic');
const p1MassVal = document.getElementById('p1MassVal');
const p1DragVal = document.getElementById('p1DragVal');
let p1Running = false;
function resetP1(){
  cubes[0].style.top = '60px';
  cubes[1].style.top = '60px';
  cubes[2].style.top = '60px';
  cubes.forEach(c=>c.style.transition='none');
  void p1Scene.offsetWidth;
}
function runP1(){
  cubes.forEach(c=>c.style.transition='top 1.6s cubic-bezier(.22,.61,.36,1)');
  if(!p1Gravity.checked || p1Kinematic.checked){
    cubes.forEach(c => c.style.top = '60px');
    return;
  }
  const drag = Number(p1Drag.value);
  const duration = Math.max(0.5, 1.6 + drag * 0.12);
  cubes.forEach(c=>c.style.transition=`top ${duration}s cubic-bezier(.22,.61,.36,1)`);
  cubes.forEach(c => c.style.top = '264px');
}
p1Mass?.addEventListener('input',()=>p1MassVal.textContent=p1Mass.value);
p1Drag?.addEventListener('input',()=>p1DragVal.textContent=p1Drag.value);
p1Play?.addEventListener('click',()=>{ resetP1(); setTimeout(runP1,40); });
p1Reset?.addEventListener('click',resetP1);
resetP1();

// Practice 2 track
const p2Speed = document.getElementById('p2Speed');
const p2SpeedVal = document.getElementById('p2SpeedVal');
const p2Mode = document.getElementById('p2Mode');
const trackBall = document.getElementById('trackBall');
const p2Launch = document.getElementById('p2Launch');
const p2TrackReset = document.getElementById('p2TrackReset');
function resetTrack(){
  trackBall.style.transition='none';
  trackBall.style.left='112px';
  trackBall.style.top='102px';
}
function launchTrack(){
  const speed = Number(p2Speed.value);
  const fast = speed >= 8;
  const mode = p2Mode.value;
  const duration = Math.max(1, 4.8 - speed*0.35);
  trackBall.style.transition=`left ${duration}s linear, top ${duration}s ease-in`;
  if(fast && mode === 'discrete'){
    // simulate tunneling through obstacle
    trackBall.style.left='600px';
    trackBall.style.top='270px';
  }else{
    trackBall.style.left='460px';
    trackBall.style.top='220px';
    setTimeout(()=>{
      trackBall.style.transition='left .9s ease, top .9s ease';
      trackBall.style.left='360px';
      trackBall.style.top='180px';
    }, duration*1000);
  }
}
p2Speed?.addEventListener('input',()=>p2SpeedVal.textContent=p2Speed.value);
p2Launch?.addEventListener('click',()=>{resetTrack(); setTimeout(launchTrack,40)});
p2TrackReset?.addEventListener('click',resetTrack);
resetTrack();

// Practice 2 trigger
const ship2 = document.getElementById('ship2');
const spaceScene = document.getElementById('spaceScene');
const spawnMsg = document.getElementById('spawnMsg');
document.getElementById('p2ShipMove')?.addEventListener('click',()=>{
  ship2.style.left='48%';
  ship2.style.top='176px';
  setTimeout(()=>{
    spaceScene.classList.add('spawned');
    spawnMsg.textContent='Trigger activado: se generaron planetas y asteroides';
  },800);
});
document.getElementById('p2TriggerReset')?.addEventListener('click',()=>{
  ship2.style.left='80px';
  ship2.style.top='180px';
  spaceScene.classList.remove('spawned');
  spawnMsg.textContent='Al entrar al trigger se crean planetas y asteroides';
});

// Practice 3 cannon
const projectiles = document.getElementById('projectiles');
let projCounter = 0;
function fireProjectile(){
  const el = document.createElement('div');
  el.className = 'proj';
  const id = projCounter++;
  el.style.left='405px';
  el.style.bottom='200px';
  projectiles.appendChild(el);
  setTimeout(()=>{
    el.style.transition='transform 1.2s ease-out, opacity 1.2s ease-out';
    el.style.transform='translate(280px,-170px)';
    el.style.opacity='0';
  },10);
  setTimeout(()=>el.remove(),3000);
}
document.getElementById('cannonFire')?.addEventListener('click',fireProjectile);
document.getElementById('cannonReset')?.addEventListener('click',()=>projectiles.innerHTML='');

// Practice 4 UI fire
let ammo = 10;
const ammoReadout = document.getElementById('ammoReadout');
const uiFire = document.getElementById('uiFire');
const uiFlash = document.getElementById('uiFlash');
uiFire?.addEventListener('click',()=>{
  if(ammo <= 0){ uiFire.textContent='SIN BALAS'; return; }
  ammo -= 1;
  ammoReadout.textContent = ammo;
  uiFlash.classList.remove('show');
  void uiFlash.offsetWidth;
  uiFlash.classList.add('show');
  if(ammo === 0) uiFire.textContent='SIN BALAS';
});

// Practice 5 latency
const ids = ['sense','net','compute','act'];
function updateLatency(){
  const s = Number(document.getElementById('senseSlider').value);
  const n = Number(document.getElementById('netSlider').value);
  const c = Number(document.getElementById('computeSlider').value);
  const a = Number(document.getElementById('actSlider').value);
  document.getElementById('senseVal').textContent = `${s} ms`;
  document.getElementById('netVal').textContent = `${n} ms`;
  document.getElementById('computeVal').textContent = `${c} ms`;
  document.getElementById('actVal').textContent = `${a} ms`;
  document.getElementById('barSense').style.width = `${s*10}%`;
  document.getElementById('barNet').style.width = `${Math.min(100,n*7)}%`;
  document.getElementById('barCompute').style.width = `${Math.min(100,c*7)}%`;
  document.getElementById('barAct').style.width = `${a*10}%`;
  const total = s+n+c+a;
  document.getElementById('latencyTotal').textContent = `${total} ms`;
  const state = document.getElementById('latencyState');
  state.className = 'latency-state';
  if(total <= 20){ state.classList.add('good'); state.textContent = 'Apta para XR'; }
  else if(total <= 30){ state.classList.add('warn'); state.textContent = 'Límite aceptable'; }
  else { state.classList.add('bad'); state.textContent = 'Riesgo de mareo / retardo'; }
}
ids.forEach(id => document.getElementById(id+'Slider')?.addEventListener('input', updateLatency));
updateLatency();
