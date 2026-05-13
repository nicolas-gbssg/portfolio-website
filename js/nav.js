const toggle = document.querySelector('.nav-toggle');
const nav    = document.getElementById('site-nav');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});
