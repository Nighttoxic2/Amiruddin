const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) document.documentElement.classList.add('motion-ready');

document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('[data-glass]');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

const syncHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 18);
};
const closeMenu = () => {
  mobileMenu.setAttribute('hidden', '');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = 'Menu';
  document.body.style.overflow = '';
};
const openMenu = () => {
  mobileMenu.removeAttribute('hidden');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.textContent = 'Close';
  document.body.style.overflow = 'hidden';
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });
menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.hasAttribute('hidden');
  isOpen ? openMenu() : closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileMenu.hasAttribute('hidden')) {
    closeMenu();
    menuToggle.focus();
  }
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

if (!prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}
