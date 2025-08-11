// main.js

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('cta');
  btn.addEventListener('click', () => {
    alert('Button Placeholder — toiming siia');
  });
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');

  // Update aria-expanded for accessibility
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});
