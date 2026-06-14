'use strict';

/**
 * nav.js — Luis Badel · Edición Atelier
 * Menú móvil y resaltado de la sección activa en el índice lateral.
 */

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!hamburger || !menu) return;

  function closeMenu() {
    menu.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }

  function openMenu() {
    menu.classList.add('is-open');
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  }

  hamburger.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });
}

function initScrollSpy() {
  const links = document.querySelectorAll('.site-nav__link');
  if (!links.length) return;

  const sections = Array.from(links)
    .map((link) => document.getElementById(link.dataset.section))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('is-active', link.dataset.section === entry.target.id);
        });
      });
    },
    { rootMargin: '-45% 0px -45% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

function initDropdowns() {
  const items = Array.from(document.querySelectorAll('.nav-item--has-menu'));
  if (!items.length) return;

  const closeAll = (except) => {
    items.forEach((item) => {
      if (item === except) return;
      item.classList.remove('is-open');
      const trigger = item.querySelector('.nav-item__trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  };

  items.forEach((item) => {
    const trigger = item.querySelector('.nav-item__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      closeAll(item);
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-item--has-menu')) closeAll(null);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAll(null);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollSpy();
  initDropdowns();
});
