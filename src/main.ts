import { getInitialLang, applyLanguage, type Lang } from './i18n';
import { getInitialTheme, applyTheme, type Theme } from './theme';

function updateScreenshots(theme: Theme): void {
  const attr = theme === 'dark' ? 'shotDark' : 'shotLight';
  for (const img of document.querySelectorAll<HTMLImageElement>('[data-shot-dark][data-shot-light]')) {
    const next = img.dataset[attr];
    if (next && img.getAttribute('src') !== next) {
      img.setAttribute('src', next);
    }
  }
}

// ── Scroll reveal with stagger ────────────────────────
const reveals = document.querySelectorAll<HTMLElement>('.reveal');

if ('IntersectionObserver' in window) {
  const staggerDelays = new Map<Element, number>();
  const grids = document.querySelectorAll(
    '.features__hero, .features__core, .features__extras, .screenshots__grid',
  );

  for (const grid of grids) {
    grid.querySelectorAll('.reveal').forEach((child, i) => staggerDelays.set(child, i * 80));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const delay = staggerDelays.get(entry.target) ?? 0;
          if (delay > 0) {
            setTimeout(() => entry.target.classList.add('reveal--visible'), delay);
          } else {
            entry.target.classList.add('reveal--visible');
          }
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1 },
  );

  for (const el of reveals) observer.observe(el);
} else {
  for (const el of reveals) el.classList.add('reveal--visible');
}

// ── Mobile nav toggle ─────────────────────────────────
const burger = document.querySelector<HTMLButtonElement>('.site-header__burger');
const header = document.querySelector<HTMLElement>('.site-header');

if (burger && header) {
  burger.addEventListener('click', () => header.classList.toggle('site-header--open'));
  for (const link of header.querySelectorAll<HTMLAnchorElement>('.site-header__nav a')) {
    link.addEventListener('click', () => header.classList.remove('site-header--open'));
  }
}

// ── Theme ─────────────────────────────────────────────
let currentTheme: Theme = getInitialTheme();
applyTheme(currentTheme);
updateScreenshots(currentTheme);

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
  updateScreenshots(currentTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    currentTheme = e.matches ? 'dark' : 'light';
    applyTheme(currentTheme);
    updateScreenshots(currentTheme);
  }
});

// ── i18n ──────────────────────────────────────────────
let currentLang: Lang = getInitialLang();
applyLanguage(currentLang);

document.getElementById('lang-toggle')?.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  applyLanguage(currentLang);
});
