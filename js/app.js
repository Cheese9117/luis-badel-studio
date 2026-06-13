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

document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initFooterYear();
});
