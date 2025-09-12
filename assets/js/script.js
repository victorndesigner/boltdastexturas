document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const bindLangButtons = () => {
    document.querySelectorAll('#langBtn, #langBtnTop').forEach(btn => {
      btn.addEventListener('click', () => {
        const span = btn.querySelector('.lang-code');
        if (!span) return;
        span.textContent = (span.textContent === 'BR') ? 'EN' : 'BR';
      });
    });
  };
  bindLangButtons();

  (function highlightNav() {

    const fileNameMatch = location.pathname.match(/[^\/\\]+$/);
    const fileName = fileNameMatch ? fileNameMatch[0].replace('.html','') : 'index';
    
    document.querySelectorAll('.topnav .nav-item').forEach(a => {
      const hrefFile = a.getAttribute('href') || '';
      const hrefName = hrefFile.replace('.html','');
      if(hrefName === fileName) a.classList.add('active');
      else a.classList.remove('active');
    });
  })();
});

function createParticles(num = 50) {
  const wrapper = document.querySelector('.particles-wrapper');
  const colors = [
    'rgba(138,43,226,0.3)',
    'rgba(138,43,226,0.5)',
    'rgba(155,81,224,0.4)'
  ];

  for (let i = 0; i < num; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 6 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 10;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    wrapper.appendChild(particle);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createParticles(60);
});

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const body = document.body;

  if (!hamburgerBtn || !mobileNav) return;

  hamburgerBtn.addEventListener('click', () => {
    const isActive = hamburgerBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');

    if(isActive){
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      body.style.overflow = '';
    });
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 916){
      hamburgerBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      body.style.overflow = '';
    }
  });
});
