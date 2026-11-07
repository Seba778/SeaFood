import { SOCIAL, HOURS, LOCATIONS, SPECIALS, FAVORITES, MENU } from './data.js';

/* ---------- i18n (textos de interfaz; el menú se queda como está impreso) ---------- */
const STR = {
  en: {
    skip: 'Skip to menu',
    'nav.menu': 'Menu', 'nav.specials': 'Specials', 'nav.gallery': 'Photos', 'nav.locations': 'Locations',
    'cta.call': 'Call / Order', 'cta.menu': 'See the menu', 'cta.find': 'Find a location',
    'hero.eyebrow': 'Mariscos · Dallas & Mesquite, TX',
    'hero.title': 'The best seafood<br/>in Dallas.',
    'hero.lead': 'Ceviches, cocteles, boiling pots and fresh fried baskets. You’re in the right place.',
    'fav.title': 'House favorites', 'fav.lead': 'A taste of what comes out of our kitchen every day.',
    'sp.title': 'Daily specials', 'sp.lead': 'Every week, at every location.',
    'sp.ask': 'Ask for price',
    'lunch.title': 'Lunch Specials', 'lunch.when': 'Mon – Fri · 11 AM – 3 PM · from $8.99', 'lunch.cta': 'See lunch menu',
    'menu.title': 'Our menu', 'menu.lead': 'Prices and some dishes vary by location. Choose yours:',
    'menu.printed': 'View printed menu', 'menu.onlyHere': 'Only at this location', 'menu.all': 'Full menu',
    'menu.fine': 'Prices are subject to change without notice. Food may contain small bones & fragments. We fry in peanut oil; canola or olive oil available for sautéed dishes upon request. No additional discounts applied to specially priced items.',
    'menu.warning': 'Warning: there is a risk associated with consuming raw oysters or any raw animal protein. If you have a chronic illness of the liver, stomach or blood, or have immune disorders, you are at greatest risk of illness from raw oysters and should eat oysters fully cooked. If unsure of your risk, consult your physician.',
    'legend.raw': 'Raw or undercooked', 'legend.spicy': 'Spicy', market: 'Market price',
    'gal.title': 'Come hang out', 'gal.lead': 'Full bar, big tables and a laid-back vibe for the whole family.',
    'loc.title': 'Locations & contact', 'loc.lead': 'Three locations across DFW. Call ahead for to-go orders.',
    'loc.hours': 'Hours · all locations', 'loc.directions': 'How to get here', 'loc.openMaps': 'Open in Google Maps', 'loc.seeMenu': 'See its menu', 'loc.selected': 'Your location',
    'footer.follow': 'Follow us',
    'bar.menu': 'Menu', 'bar.directions': 'Directions', 'bar.call': 'Call',
    open: 'Open now', closed: 'Closed', closesAt: 'until', opensAt: 'opens',
    today: 'today', tomorrow: 'tomorrow',
  },
  es: {
    skip: 'Ir al menú',
    'nav.menu': 'Menú', 'nav.specials': 'Especiales', 'nav.gallery': 'Fotos', 'nav.locations': 'Ubicaciones',
    'cta.call': 'Llamar / Ordenar', 'cta.menu': 'Ver el menú', 'cta.find': 'Encuentra tu sucursal',
    'hero.eyebrow': 'Mariscos · Dallas y Mesquite, TX',
    'hero.title': 'Los mejores mariscos<br/>de Dallas.',
    'hero.lead': 'Ceviches, cócteles, boiling pots y canastas fritas al momento. Estás en el lugar correcto.',
    'fav.title': 'Favoritos de la casa', 'fav.lead': 'Un adelanto de lo que sale de nuestra cocina todos los días.',
    'sp.title': 'Especiales del día', 'sp.lead': 'Cada semana, en todas las sucursales.',
    'sp.ask': 'Pregunta el precio',
    'lunch.title': 'Especiales de Comida', 'lunch.when': 'Lun – Vie · 11 AM – 3 PM · desde $8.99', 'lunch.cta': 'Ver menú de comida',
    'menu.title': 'Nuestro menú', 'menu.lead': 'Precios y algunos platillos varían por sucursal. Elige la tuya:',
    'menu.printed': 'Ver menú impreso', 'menu.onlyHere': 'Solo en esta sucursal', 'menu.all': 'Menú completo',
    'menu.fine': 'Precios sujetos a cambio sin previo aviso. Los alimentos pueden contener pequeños huesos y fragmentos. Freímos en aceite de cacahuate; aceite de canola u oliva disponible para platillos salteados a petición. No se aplican descuentos adicionales a artículos con precio especial.',
    'menu.warning': 'Advertencia: existe un riesgo al consumir ostiones crudos o cualquier proteína animal cruda. Si tienes una enfermedad crónica del hígado, estómago o sangre, o trastornos inmunológicos, corres mayor riesgo y debes comer los ostiones bien cocidos. Si tienes dudas, consulta a tu médico.',
    'legend.raw': 'Crudo o poco cocido', 'legend.spicy': 'Picante', market: 'Precio de mercado',
    'gal.title': 'Ven a pasarla bien', 'gal.lead': 'Barra completa, mesas grandes y buen ambiente para toda la familia.',
    'loc.title': 'Ubicaciones y contacto', 'loc.lead': 'Tres sucursales en DFW. Llama para ordenar para llevar.',
    'loc.hours': 'Horario · todas las sucursales', 'loc.directions': 'Cómo llegar', 'loc.openMaps': 'Abrir en Google Maps', 'loc.seeMenu': 'Ver su menú', 'loc.selected': 'Tu sucursal',
    'footer.follow': 'Síguenos',
    'bar.menu': 'Menú', 'bar.directions': 'Cómo llegar', 'bar.call': 'Llamar',
    open: 'Abierto ahora', closed: 'Cerrado', closesAt: 'hasta las', opensAt: 'abre',
    today: 'hoy', tomorrow: 'mañana',
  },
};

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* sin storage */ } },
};

let lang = store.get('ss-lang') || ((navigator.language || '').startsWith('es') ? 'es' : 'en');
let locId = store.get('ss-loc') || LOCATIONS[0].id;
if (!LOCATIONS.some((l) => l.id === locId)) locId = LOCATIONS[0].id;
// pestaña del menú: 'all' muestra todas las categorías en la página; un id de MENU muestra solo esa
let catId = 'all';
const CAT_IDS = ['all', ...MENU.map((m) => m.id)];

const t = (k) => STR[lang][k] ?? STR.en[k] ?? k;
const L = (obj) => (typeof obj === 'string' ? obj : obj[lang] ?? obj.en);
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tel = (p) => 'tel:+1' + p.replace(/\D/g, '');
const CHILI = '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M15.5 6.5c2.6.6 4.4 3 4 6.2C18.8 18 12 21.5 4 20.5c5-1.6 8.4-5 9.1-10.6.2-1.8 1-3.1 2.4-3.4Z" fill="#e2412c"/><path d="M15.2 6.6c.1-1.6.9-3 2.6-3.6M14.6 6.8c1.2-.9 2.9-.8 3.9.4" fill="none" stroke="#2f9c56" stroke-width="1.8" stroke-linecap="round"/></svg>';
const tagIcon = (tg) => (tg === 'raw' ? '★' : CHILI);
const money = (p) => (p === 'Market' ? `<span class="market" title="${t('market')}">Market</span>` : /^\d/.test(p) ? `$${p}` : p);
const currentLoc = () => LOCATIONS.find((l) => l.id === locId);

/* ---------- horario / abierto ahora (hora de Texas) ---------- */
function texasNow() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, mins: Number(get('hour')) * 60 + Number(get('minute')) };
}
const toMins = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const hoursFor = (day) => HOURS.find((h) => h.days.includes(day));
function fmtTime(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const h12 = ((h + 11) % 12) + 1;
  return `${h12}${m ? ':' + String(m).padStart(2, '0') : ''} ${h < 12 ? 'AM' : 'PM'}`;
}
function openStatus() {
  const { day, mins } = texasNow();
  const today = hoursFor(day);
  if (mins >= toMins(today.open) && mins < toMins(today.close)) {
    return { open: true, text: `${t('open')} · ${t('closesAt')} ${fmtTime(today.close)}` };
  }
  const before = mins < toMins(today.open);
  const next = before ? today : hoursFor((day + 1) % 7);
  return { open: false, text: `${t('closed')} · ${t('opensAt')} ${before ? t('today') : t('tomorrow')} ${fmtTime(next.open)}` };
}
function renderStatus() {
  const s = openStatus();
  const html = `<span class="dot ${s.open ? 'dot--open' : ''}"></span>${esc(s.text)}`;
  $('#heroStatus').innerHTML = html;
  document.querySelectorAll('[data-status]').forEach((el) => { el.innerHTML = html; });
}

/* ---------- favoritos ---------- */
function renderFavorites() {
  $('#favorites').innerHTML = FAVORITES.map((f) => `
    <figure class="fav">
      <div class="fav__img"><img src="/img/platillos/${f.img}-600.webp" srcset="/img/platillos/${f.img}-600.webp 600w, /img/platillos/${f.img}-1200.webp 1200w" sizes="(min-width: 900px) 340px, 75vw" alt="${esc(f.name)}" loading="lazy" /></div>
      <figcaption>
        <span class="fav__name">${esc(f.name)}</span>
        <span class="fav__price">${money(f.price)}</span>
        <span class="fav__note">${esc(L(f.note))}</span>
      </figcaption>
    </figure>`).join('');
}

/* ---------- especiales ---------- */
function renderSpecials() {
  const { day } = texasNow();
  const todayIdx = { 1: 0, 2: 1, 3: 2 }[day];
  $('#specialsGrid').innerHTML = SPECIALS.map((s, i) => `
    <article class="special special--${s.color} ${i === todayIdx ? 'is-today' : ''}">
      ${i === todayIdx ? `<span class="special__today">${t('today')}</span>` : ''}
      <h3>${esc(L(s.day))}</h3>
      <ul>${s.items.map(([n, p]) => `<li><span>${esc(n)}</span><b>${p ? '$' + p : `<small>${t('sp.ask')}</small>`}</b></li>`).join('')}</ul>
    </article>`).join('');
}

/* ---------- menú ---------- */
function itemFor(item) {
  if (item.only && !item.only.includes(locId)) return null;
  if (item.replace?.[locId]) return { ...item, ...item.replace[locId] };
  return item;
}
function renderPrice(item) {
  if (item.prices) {
    return `<div class="item__prices">${item.prices.map(([l, p]) => `<span><small>${esc(l)}</small> ${money(p)}</span>`).join('')}</div>`;
  }
  return `<span class="item__price">${money(item.price)}</span>`;
}
function renderMenu() {
  const loc = currentLoc();
  $('#menuLocSwitch').innerHTML = LOCATIONS.map((l) => `
    <button type="button" role="radio" aria-checked="${l.id === locId}" tabindex="${l.id === locId ? 0 : -1}" class="loc-pill ${l.id === locId ? 'is-active' : ''}" data-loc="${l.id}">
      ${esc(l.name)}<small>${esc(l.city)}</small>
    </button>`).join('');
  $('#locSummary').innerHTML = `<span>${esc(loc.street)}, ${esc(loc.cityLine)}</span><a href="${tel(loc.phones[0])}">${esc(loc.phones[0])}</a>`;

  $('#catNav').innerHTML = CAT_IDS.map((id) => `
    <button type="button" role="tab" class="cat-tab" id="tab-${id}" data-cat="${id}" aria-controls="menuBody"
      aria-selected="${id === catId}" tabindex="${id === catId ? 0 : -1}">${id === 'all' ? t('menu.all') : esc(L(MENU.find((m) => m.id === id).title))}</button>`).join('');
  renderCategory();
}

function renderCategory() {
  const cats = catId === 'all' ? MENU : MENU.filter((m) => m.id === catId);
  const body = $('#menuBody');
  body.setAttribute('aria-labelledby', `tab-${catId}`);
  body.classList.toggle('menu__body--single', catId !== 'all');
  body.innerHTML = cats.map((c) => `
    <section class="cat" id="cat-${c.id}">
      <h3 class="cat__title"><span>${esc(L(c.title))}</span></h3>
      ${c.note ? `<p class="cat__note">${esc(L(c.note))}</p>` : ''}
      <ul class="items">
        ${c.items.map(itemFor).filter(Boolean).map((it) => `
          <li class="item ${it.only ? 'item--exclusive' : ''}">
            <div class="item__head">
              <span class="item__name">${esc(it.name)}${(it.tags || []).map((tg) => `<span class="tag tag--${tg}" title="${t('legend.' + tg)}">${tagIcon(tg)}</span>`).join('')}</span>
              ${it.price ? '<span class="item__dots" aria-hidden="true"></span>' : ''}
              ${it.price ? renderPrice(it) : ''}
            </div>
            ${it.only ? `<span class="item__badge">${t('menu.onlyHere')}</span>` : ''}
            ${it.desc ? `<p class="item__desc">${esc(it.desc)}</p>` : ''}
            ${it.prices ? renderPrice(it) : ''}
          </li>`).join('')}
      </ul>
    </section>`).join('');
}

const smooth = () => (matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth');

function setCat(id, { focus = false, reveal = false } = {}) {
  if (!CAT_IDS.includes(id)) return;
  catId = id;
  document.querySelectorAll('#catNav .cat-tab').forEach((b) => {
    const on = b.dataset.cat === id;
    b.setAttribute('aria-selected', on);
    b.tabIndex = on ? 0 : -1;
  });
  renderCategory();
  // centra la pestaña activa dentro de la barra, sin mover la página
  const nav = $('#catNav');
  const tab = $(`#tab-${id}`);
  nav.scrollLeft = tab.offsetLeft - (nav.clientWidth - tab.offsetWidth) / 2;
  if (focus) tab.focus({ preventScroll: true });
  // si el inicio de la categoría quedó tapado por la barra fija (o se pidió `reveal`), lleva la vista ahí
  const top = $('#menuBody').getBoundingClientRect().top;
  const stickyBottom = $('.topbar').offsetHeight + $('.cat-nav').offsetHeight;
  if (top < stickyBottom || (reveal && top > innerHeight * 0.6)) {
    scrollTo({ top: scrollY + top - stickyBottom - 24, behavior: smooth() });
  }
}

/* ---------- galería + lightbox ---------- */
const PHOTOS = [5, 3, 2, 1, 4].map((n) => ({
  src: `/img/fotos/local-${n}-1600.webp`,
  srcset: `/img/fotos/local-${n}-800.webp 800w, /img/fotos/local-${n}-1600.webp 1600w`,
  full: `/img/fotos/local-${n}-1600.webp`,
}));
function renderGallery() {
  $('#galleryGrid').innerHTML = PHOTOS.map((p, i) => `
    <button type="button" class="photo photo--${i}" data-photo="${i}" aria-label="Seafood Shack ${i + 1}">
      <img src="${p.src}" srcset="${p.srcset}" sizes="(min-width: 900px) 50vw, 100vw" alt="Seafood Shack" loading="lazy" />
    </button>`).join('');
}

const lightbox = $('#lightbox');
let lbList = [];
let lbIdx = 0;
function openLightbox(list, idx) {
  lbList = list; lbIdx = idx;
  lightbox.classList.toggle('lightbox--single', list.length < 2);
  showLb();
  lightbox.showModal();
}
function showLb() { $('#lightboxImg').src = lbList[lbIdx]; }
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target.closest('[data-close]')) lightbox.close();
  if (e.target.closest('.lightbox__prev')) { lbIdx = (lbIdx - 1 + lbList.length) % lbList.length; showLb(); }
  if (e.target.closest('.lightbox__next')) { lbIdx = (lbIdx + 1) % lbList.length; showLb(); }
});
document.addEventListener('keydown', (e) => {
  if (!lightbox.open) return;
  if (e.key === 'ArrowLeft') { lbIdx = (lbIdx - 1 + lbList.length) % lbList.length; showLb(); }
  if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % lbList.length; showLb(); }
});

/* ---------- ubicaciones ---------- */
const ICON = {
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.5" fill="currentColor"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.3 2 10.5 3.5 10.5 6v2H8v3h2.5v11H14V11h2.6l.4-3Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.5 2h-3.2v13.2a2.8 2.8 0 1 1-2.8-2.8c.3 0 .6 0 .8.1V9.2a6 6 0 1 0 5.2 6V8.6a7.6 7.6 0 0 0 4.5 1.4V6.8a4.5 4.5 0 0 1-4.5-4.8Z"/></svg>',
};
const mapSrc = (l) => `https://maps.google.com/maps?q=${encodeURIComponent(`Seafood Shack, ${l.street}, ${l.cityLine}`)}&z=15&output=embed`;

function renderLocations() {
  $('#locList').innerHTML = LOCATIONS.map((l) => `
    <article class="loc" data-loc-card="${l.id}">
      <div class="loc__map">
        <iframe src="${mapSrc(l)}" title="Map · Seafood Shack ${esc(l.name)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
      <div class="loc__body">
        <header class="loc__head">
          <span class="loc__selected">${t('loc.selected')}</span>
          <h3>${esc(l.name)}</h3>
          <span class="loc__status" data-status></span>
        </header>
        <p class="loc__addr">${ICON.pin}<span>${esc(l.street)}<br/>${esc(l.cityLine)}</span></p>
        <p class="loc__phones">${ICON.phone}<span>${l.phones.map((p) => `<a href="${tel(p)}">${esc(p)}</a>`).join('<br/>')}</span></p>
        <div class="loc__how" id="how-${l.id}" tabindex="-1">
          <h4>${t('loc.directions')}</h4>
          <p class="loc__near">${esc(L(l.directions.near))}</p>
          <ol>${l.directions.steps.map((s) => `<li>${L(s)}</li>`).join('')}</ol>
          <a class="loc__gmaps" href="${l.maps}" target="_blank" rel="noopener">${t('loc.openMaps')} ↗</a>
        </div>
        <div class="loc__actions">
          <a class="btn btn--small btn--blue" href="${tel(l.phones[0])}">${t('bar.call')}</a>
          <button type="button" class="link-btn" data-see-menu="${l.id}">${t('loc.seeMenu')}</button>
        </div>
      </div>
    </article>`).join('');

  $('#hoursList').innerHTML = HOURS.map((h) => `<div><dt>${esc(L(h.label))}</dt><dd>${fmtTime(h.open)} – ${fmtTime(h.close)}</dd></div>`).join('');

  markActiveLoc();
}

// marca la sucursal elegida sin reconstruir las tarjetas (así los mapas no se recargan)
function markActiveLoc() {
  document.querySelectorAll('[data-loc-card]').forEach((el) => el.classList.toggle('is-active', el.dataset.locCard === locId));

  // barra móvil apunta a la sucursal elegida
  const bar = $('#mobileBar');
  bar.querySelector('.mobile-bar__call').href = tel(currentLoc().phones[0]);
  // "Cómo llegar" baja a las indicaciones escritas de la sucursal elegida (no abre Google Maps)
  bar.querySelector('[data-i18n="bar.directions"]').href = `#how-${locId}`;
}

function renderSocial() {
  $('#social').innerHTML = Object.entries(SOCIAL).map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}">${ICON[k]}</a>`).join('');
}

/* ---------- textos estáticos ---------- */
function applyStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  $('#langToggle').textContent = lang === 'en' ? 'ES' : 'EN';
}

function renderAll() {
  applyStatic();
  renderFavorites();
  renderSpecials();
  renderMenu();
  renderLocations();
  renderStatus();
}

function setLoc(id) {
  locId = id;
  store.set('ss-loc', id);
  renderMenu();
  markActiveLoc();
}

/* ---------- eventos ---------- */
document.addEventListener('click', (e) => {
  const pill = e.target.closest('[data-loc]');
  if (pill && pill.dataset.loc !== locId) setLoc(pill.dataset.loc);

  const tab = e.target.closest('#catNav [data-cat]');
  if (tab) setCat(tab.dataset.cat);

  const catLink = e.target.closest('[data-cat-link]');
  if (catLink) { e.preventDefault(); setCat(catLink.dataset.catLink, { reveal: true }); }

  const seeMenu = e.target.closest('[data-see-menu]');
  if (seeMenu) {
    setLoc(seeMenu.dataset.seeMenu);
    $('#menu').scrollIntoView({ behavior: smooth() });
  }

  const photo = e.target.closest('[data-photo]');
  if (photo) openLightbox(PHOTOS.map((p) => p.full), Number(photo.dataset.photo));

  if (e.target.closest('#printedMenuBtn')) {
    openLightbox(currentLoc().menuImages.map((m) => `/img/menu/${m}-2800.webp`), 0);
  }
});

// flechas entre pestañas y entre sucursales (patrón ARIA de tabs y radios)
document.addEventListener('keydown', (e) => {
  const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
  if (!dir || lightbox.open) return;
  if (e.target.closest('#catNav')) {
    const i = CAT_IDS.indexOf(catId);
    setCat(CAT_IDS[(i + dir + CAT_IDS.length) % CAT_IDS.length], { focus: true });
    e.preventDefault();
  } else if (e.target.closest('#menuLocSwitch')) {
    const i = LOCATIONS.findIndex((l) => l.id === locId);
    setLoc(LOCATIONS[(i + dir + LOCATIONS.length) % LOCATIONS.length].id);
    $(`#menuLocSwitch [data-loc="${locId}"]`).focus();
    e.preventDefault();
  }
});

$('#langToggle').addEventListener('click', () => {
  lang = lang === 'en' ? 'es' : 'en';
  store.set('ss-lang', lang);
  renderAll();
});

// sombra del header al hacer scroll
const topbar = $('.topbar');
addEventListener('scroll', () => topbar.classList.toggle('is-scrolled', scrollY > 8), { passive: true });

$('#year').textContent = new Date().getFullYear();
renderGallery();
renderSocial();
renderAll();
setInterval(renderStatus, 60_000);

/* ---------- datos estructurados para Google ---------- */
const ld = {
  '@context': 'https://schema.org',
  '@graph': LOCATIONS.map((l) => ({
    '@type': 'Restaurant',
    name: `Seafood Shack - ${l.name}`,
    servesCuisine: ['Seafood', 'Mexican'],
    priceRange: '$$',
    image: location.origin + '/img/fotos/local-5-1600.webp',
    telephone: '+1' + l.phones[0].replace(/\D/g, ''),
    address: { '@type': 'PostalAddress', streetAddress: l.street, addressLocality: l.city, addressRegion: 'TX', postalCode: l.cityLine.slice(-5), addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: l.geo[0], longitude: l.geo[1] },
    hasMap: l.maps,
    sameAs: Object.values(SOCIAL),
    openingHoursSpecification: HOURS.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d]),
      opens: h.open, closes: h.close,
    })),
  })),
};
const s = document.createElement('script');
s.type = 'application/ld+json';
s.textContent = JSON.stringify(ld);
document.head.append(s);
