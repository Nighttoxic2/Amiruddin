const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const details = {
  linux: {
    title: 'Linux systems support',
    copy: 'Server updates, service checks, basic troubleshooting and remote maintenance in a lab environment.'
  },
  docker: {
    title: 'Docker deployments',
    copy: 'Hands-on container deployment with service restarts, networking, storage volumes and apps including Immich.'
  },
  networking: {
    title: 'Networking and remote access',
    copy: 'Remote access, hosting, and connectivity troubleshooting with practical service configuration experience.'
  },
  support: {
    title: 'Support delivery',
    copy: 'POS hardware/software onboarding, incident diagnosis, user communication and minimising client downtime.'
  }
};

const nodeDetail = document.getElementById('nodeDetail');
document.querySelectorAll('.node').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.node').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    const data = details[button.dataset.node];
    nodeDetail.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 260, easing: 'ease-out' });
    nodeDetail.innerHTML = `<h3>${data.title}</h3><p>${data.copy}</p>`;
  });
});

document.querySelectorAll('[data-tilt]').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -5;
    const rotateY = ((x / rect.width) - 0.5) * 5;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode') ? '◑' : '◐';
});
