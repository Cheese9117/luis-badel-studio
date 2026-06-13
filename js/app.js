'use strict';

/**
 * app.js — Luis Badel · Edición Atelier
 * Botón "volver arriba" y año dinámico del footer.
 */

const BACK_TO_TOP_THRESHOLD = 480;

function initBackToTop() {
  const button = document.getElementById('back-to-top');
  if (!button) return;

  window.addEventListener(
    'scroll',
    () => {
      button.classList.toggle('is-visible', window.scrollY > BACK_TO_TOP_THRESHOLD);
    },
    { passive: true }
  );

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
}

function initRails() {
  document.querySelectorAll('[data-rail]').forEach((rail) => {
    const track = rail.querySelector('[data-rail-track]');
    const prev = rail.querySelector('[data-rail-prev]');
    const next = rail.querySelector('[data-rail-next]');
    if (!track || !prev || !next) return;

    const stepSize = () => {
      const card = track.firstElementChild;
      return card ? card.getBoundingClientRect().width + 32 : track.clientWidth * 0.8;
    };

    const sync = () => {
      const maxScroll = track.scrollWidth - track.clientWidth - 1;
      rail.classList.toggle('rail--static', maxScroll <= 0);
      prev.disabled = track.scrollLeft <= 0;
      next.disabled = track.scrollLeft >= maxScroll;
    };

    prev.addEventListener('click', () => track.scrollBy({ left: -stepSize(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: stepSize(), behavior: 'smooth' }));
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync, { passive: true });

    // Re-sincroniza cuando el riel entra en viewport (las secciones con
    // content-visibility: auto no se miden hasta que se renderizan).
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && sync());
    });
    observer.observe(rail);
    sync();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initFooterYear();
  initRails();
});
