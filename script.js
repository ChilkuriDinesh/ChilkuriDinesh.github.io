const nav = document.getElementById('siteNav');
const hero = document.getElementById('home');
const links = [...document.querySelectorAll('.nav nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

const heroObserver = new IntersectionObserver(([entry]) => {
  const desktop = window.matchMedia('(min-aspect-ratio: 4/3)').matches;
  if (desktop && entry.intersectionRatio > 0.55) nav.classList.add('on-hero');
  else nav.classList.remove('on-hero');
}, { threshold: [0, .55, 1] });
heroObserver.observe(hero);

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.style.color = a.getAttribute('href') === '#' + entry.target.id ? '#fff' : '');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => sectionObserver.observe(s));

window.addEventListener('resize', () => {
  if (!window.matchMedia('(min-aspect-ratio: 4/3)').matches) nav.classList.remove('on-hero');
});
