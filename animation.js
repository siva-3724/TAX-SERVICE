/* FUTURE TAX — premium.js
   Progressive enhancement only: scroll reveals, 3D stacking depth,
   header state, scroll progress, active nav link, card spotlight.
   Safe to load alongside your existing script.js. */
(() => {
  'use strict';

  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktop = window.matchMedia('(min-width: 861px)');
  const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

  /* ---------- Scroll reveal ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    root.classList.add('js');

    const groups = [
      '.hero-content > *', '.hero-visual',
      '.benefit-item', '.trust-item',
      '.section-head', '.about-card', '#about .container > div:last-child > *',
      '.about-point', '.process-step', '.faq-grid details',
      '.contact-copy > *', '.contact-info > *', '.contact-form', '.footer-grid > div'
    ];

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    groups.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add('reveal');
        el.style.setProperty('--d', `${(i % 4) * 90}ms`);
        io.observe(el);
      });
    });
  }

  /* ---------- Scroll-linked work (one rAF-throttled handler) ---------- */
  const header = document.querySelector('.header');
  const cards = Array.from(document.querySelectorAll('.stack-card'));

  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  let ticking = false;

  function update() {
    ticking = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    bar.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;
    if (header) header.classList.toggle('scrolled', y > 24);

    const stacking = desktop.matches && !reduce;
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!stacking || !next) {
        card.style.setProperty('--p', 0);
        return;
      }
      // How far the next card has slid over this one (0 → 1)
      const stuckTop = parseFloat(getComputedStyle(card).top) || 0;
      const gap = next.getBoundingClientRect().top - stuckTop;
      const p = clamp(1 - gap / card.offsetHeight, 0, 1);
      card.style.setProperty('--p', p.toFixed(3));
    });
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  desktop.addEventListener && desktop.addEventListener('change', requestUpdate);
  update();

  /* ---------- Cursor spotlight on service cards ---------- */
  if (!reduce) {
    cards.forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const content = card.querySelector('.service-card');
        if (!content) return;
        const r = content.getBoundingClientRect();
        content.style.setProperty('--mx', `${e.clientX - r.left}px`);
        content.style.setProperty('--my', `${e.clientY - r.top}px`);
      }, { passive: true });
    });
  }

  /* ---------- Active nav link while scrolling ---------- */
  const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => {
          const on = a.getAttribute('href') === `#${entry.target.id}`;
          a.classList.toggle('is-active', on);
          if (on) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }
})();