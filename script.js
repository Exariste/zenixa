// Intersection Observer for fade-up
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// Navbar scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
});

// Scroll top
document.getElementById('scrollTop').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    document.querySelectorAll('.faq-item').forEach(i => { if(i !== item) i.classList.remove('open'); });
    item.classList.toggle('open');
  });
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if(links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '72px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(15,17,21,0.98)';
    links.style.padding = '20px';
    links.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
  }
});

// Counter animation
function animateCounter(el, target, suffix='') {
  let start = 0;
  const duration = 1500;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start) + suffix;
    if(start >= target) clearInterval(timer);
  }, 16);
}
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.classList.add('counted');
      counterObs.unobserve(e.target);
    }
  });
}, {threshold:.5});
