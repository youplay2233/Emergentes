'use strict';
const main = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const scrim = document.getElementById('scrim');
const menuToggle = document.getElementById('menuToggle');
const imageDialog = document.getElementById('imageDialog');
const mobile = window.matchMedia('(max-width:650px)');
let currentPage = '';
let menuOpen = false;
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number = i => String(i + 1).padStart(2, '0');
const card = p => `<a class="practice-card" href="#${p.id}"><div class="card-image"><img src="${p.image}" alt="${escapeHTML(p.alt)}" width="1672" height="941" loading="lazy"><span class="card-index">${p.number} / ${p.id === 'latencia' ? 'TEMA' : 'PRÁCTICA'}</span></div><div class="card-copy"><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.shortSummary)}</p><div class="card-bottom"><span>${escapeHTML(p.category)}</span><b aria-hidden="true">↗</b></div></div></a>`;
const figure = p => `<figure class="practice-figure"><div class="figure-bar"><span class="figure-dot"></span><span class="figure-dot"></span><span class="figure-dot"></span><span>UNITY EDITOR / ${escapeHTML(p.title)}</span></div><button class="figure-button" data-zoom="${p.image}" data-caption="${escapeHTML(p.caption)}" aria-label="Ampliar recreación de ${escapeHTML(p.title)}"><img src="${p.image}" alt="${escapeHTML(p.alt)}" width="1672" height="941" fetchpriority="high"><span class="zoom-label">⤢ Ampliar imagen</span></button><figcaption><span class="caption-tag">${p.id === 'latencia' ? 'VISTA CONCEPTUAL' : 'RECREACIÓN GENERADA'}</span><span>${escapeHTML(p.caption)}</span></figcaption></figure>`;
function renderHome() {
  return `<div class="page"><section class="hero"><div><span class="eyebrow">DEL AULA A LA REALIDAD MIXTA</span><h1>Las bases de Unity.<br>El comienzo de <em>JARVIS.</em></h1><p class="hero-copy">Seis temas del curso, sus escenas recreadas y una propuesta para convertirlos en un taller de ingeniería en Meta Quest 3.</p><div class="button-row"><a class="button primary" href="#jarvis">Explorar el proyecto <span>↗</span></a><a class="button secondary" href="#inicio/practicas">Ver las prácticas <span>↓</span></a></div></div><a class="hero-visual" href="#jarvis" aria-label="Ver propuesta del proyecto JARVIS"><img src="assets/jarvis.webp" alt="Recreación del editor Unity con un ensamble sencillo sobre una mesa en realidad mixta" width="1672" height="941" fetchpriority="high"><span class="hero-visual-tag">UNITY / META QUEST 3</span><div class="hero-visual-bottom"><small>PROYECTO INTEGRADOR · ETAPA 01</small><strong>JARVIS<br>Taller de ingeniería en MR</strong><span>Visualización conceptual del entorno propuesto</span></div></a></section><div class="overview-strip"><div><strong>06</strong><span>Temas documentados<small>5 prácticas + 1 tema teórico</small></span></div><div><strong>01</strong><span>Proyecto integrador<small>Aplicación al taller JARVIS</small></span></div><div><strong>MR</strong><span>Plataforma objetivo<small>Unity + Meta Quest 3</small></span></div></div><section id="inicio-practicas"><div class="section-heading"><div><span class="small-label">RECORRIDO DEL CURSO</span><h2>Una práctica, una escena.</h2></div><p>Resumen breve, componentes utilizados e imagen de cómo se plantea el ejercicio en Unity.</p></div><div class="practice-grid">${PRACTICES.map(card).join('')}</div></section><p class="evidence-note"><strong>Acerca de las imágenes.</strong> Son recreaciones generadas a partir de las presentaciones y de las referencias del editor. Ilustran el montaje propuesto; las pruebas reales en Unity y Quest deberán documentarse con capturas propias.</p><div class="archive"><p><span class="small-label">ANTECEDENTES DEL CURSO</span>Escenarios y animaciones del parque y el estadio.</p><div><a href="https://www.youtube.com/watch?v=SLv5kXOWoNA" target="_blank" rel="noopener noreferrer">Rueda de la fortuna ↗</a><a href="https://youtu.be/I1_78PJ2NCc" target="_blank" rel="noopener noreferrer">Animación del portero ↗</a></div></div></div>`;
}
function renderPractice(p) {
  const index = PRACTICES.indexOf(p);
  const previous = PRACTICES[index - 1];
  const next = PRACTICES[index + 1];
  return `<article class="page"><div class="page-heading"><div><span class="eyebrow">${p.id === 'latencia' ? 'TEMA TEÓRICO' : 'PRÁCTICA'} ${p.number} / UNITY LAB</span><h1>${escapeHTML(p.title)}</h1><p>${escapeHTML(p.summary)}</p></div><span class="page-badge">${escapeHTML(p.category)}</span></div>${figure(p)}<div class="tag-row" aria-label="Conceptos utilizados">${p.tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('')}</div><section aria-label="Resumen del montaje"><div class="section-heading"><h2>${p.id === 'latencia' ? 'Claves del tema' : 'El montaje, en tres pasos'}</h2></div><div class="steps-grid">${p.steps.map((step, i) => `<div class="step"><span>${number(i)} /</span><h3>${escapeHTML(step.title)}</h3><p>${escapeHTML(step.text)}</p></div>`).join('')}</div></section><div class="outcome"><section><h3>${p.id === 'latencia' ? 'Qué se busca comprender' : 'Resultado esperado'}</h3><p>${escapeHTML(p.result)}</p></section><section><h3>Cómo se aplicaría a JARVIS</h3><p>${escapeHTML(p.connection)}</p><a class="button secondary" href="#jarvis/aplicacion" style="margin-top:15px">Ver la adaptación <span>↗</span></a></section></div><p class="source-line">MATERIAL BASE · ${escapeHTML(p.sourceTitle)} · Diapositivas ${escapeHTML(p.sourceSlides)}</p><nav class="practice-pagination" aria-label="Recorrido de prácticas"><a href="#${previous ? previous.id : 'inicio'}"><small>← ANTERIOR</small>${previous ? escapeHTML(previous.title) : 'Vista general'}</a><a href="#${next ? next.id : 'jarvis'}"><small>SIGUIENTE →</small>${next ? escapeHTML(next.title) : 'Proyecto JARVIS'}</a></nav></article>`;
}
function setMenu(open, restoreFocus = false) {
  menuOpen = Boolean(open && mobile.matches);
  sidebar.classList.toggle('open', menuOpen);
  scrim.classList.toggle('visible', menuOpen);
  sidebar.inert = mobile.matches && !menuOpen;
  menuToggle.setAttribute('aria-expanded', String(menuOpen));
  menuToggle.setAttribute('aria-label', menuOpen ? 'Cerrar navegación' : 'Abrir navegación');
  document.body.style.overflow = menuOpen ? 'hidden' : '';
  if (menuOpen) sidebar.querySelector('a').focus();
  if (!menuOpen && restoreFocus) menuToggle.focus();
}
const routeAliases = {home:'inicio',p1:'rigidbody',p2:'colliders',p3:'objetos',p4:'interfaz',p5:'latencia'};
function route() {
  let raw = location.hash.slice(1) || 'inicio';
  if (raw === 'content') {
    if (currentPage) { main.focus(); return; }
    raw = 'inicio';
    history.replaceState(null, '', '#inicio');
  }
  const [requested, section] = raw.split('/');
  let page = routeAliases[requested] || requested;
  const practice = PRACTICES.find(p => p.id === page);
  if (!practice && page !== 'inicio' && page !== 'jarvis') {
    page = 'inicio';
    history.replaceState(null, '', '#inicio');
  }
  const changed = currentPage !== page;
  if (changed) {
    main.innerHTML = page === 'inicio' ? renderHome() : page === 'jarvis' ? JARVIS_PROJECT_HTML : renderPractice(practice);
    currentPage = page;
    const title = page === 'inicio' ? 'Vista general' : page === 'jarvis' ? 'Proyecto JARVIS' : practice.title;
    document.getElementById('breadcrumb').textContent = title.toLocaleUpperCase('es');
    document.title = `${title} · Emergentes / JARVIS Lab`;
    document.querySelectorAll('[data-route]').forEach(link => {
      const active = link.dataset.route === page;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
    if (imageDialog.open) imageDialog.close();
    window.scrollTo({top:0, behavior:'instant'});
    main.focus({preventScroll:true});
  }
  setMenu(false);
  if (section) requestAnimationFrame(() => document.getElementById(`${page}-${section}`)?.scrollIntoView({behavior:'smooth', block:'start'}));
}
document.getElementById('practiceNav').innerHTML = PRACTICES.map(p => `<a class="nav-link" data-route="${p.id}" href="#${p.id}"><span class="nav-num">${p.number}</span>${escapeHTML(p.title)}</a>`).join('');
menuToggle.addEventListener('click', () => setMenu(!menuOpen));
scrim.addEventListener('click', () => setMenu(false, true));
sidebar.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
mobile.addEventListener('change', () => setMenu(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuOpen) { event.preventDefault(); setMenu(false, true); }
  if (event.key === 'Tab' && menuOpen) {
    const links = [...sidebar.querySelectorAll('a[href]')];
    if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); links.at(-1).focus(); }
    if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); links[0].focus(); }
  }
});
main.addEventListener('click', event => {
  const button = event.target.closest('[data-zoom]');
  if (!button) return;
  const img = document.getElementById('dialogImage');
  img.src = button.dataset.zoom;
  img.alt = button.querySelector('img').alt;
  document.getElementById('dialogCaption').textContent = button.dataset.caption;
  imageDialog.showModal();
});
document.getElementById('closeDialog').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => { if (event.target === imageDialog) imageDialog.close(); });
window.addEventListener('hashchange', route);
setMenu(false);
route();
