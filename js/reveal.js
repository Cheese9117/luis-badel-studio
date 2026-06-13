'use strict';

/**
 * reveal.js — Luis Badel · Edición Atelier
 * Revela elementos con [data-reveal] al entrar en el viewport.
 */

function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  targets.forEach((target) => observer.observe(target));
}

document.addEventListener('DOMContentLoaded', initReveal);
