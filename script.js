// ===========================
//   STARS BACKGROUND
// ===========================
(function createStars() {
  const container = document.getElementById('stars');
  if (!container) return;

  for (let i = 0; i < 90; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.cssText = [
      `left: ${Math.random() * 100}%`,
      `top: ${Math.random() * 100}%`,
      `--d: ${2 + Math.random() * 4}s`,
      `--delay: ${Math.random() * 5}s`,
      `opacity: ${0.1 + Math.random() * 0.5}`
    ].join(';');
    container.appendChild(star);
  }
})();


// ===========================
//   TYPEWRITER EFFECT
// ===========================
(function typewriter() {
  const roles = [
    'SISWA SRMA 🎓',
    'Web Developer 💻',
    'UI Designer 🎨',
    'Robotika Enthusiast 🤖'
  ];

  const el = document.getElementById('typewriter');
  if (!el) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!isDeleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, isDeleting ? 60 : 100);
  }

  tick();
})();


// ===========================
//   HAMBURGER MENU (Mobile)
// ===========================
(function hamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
})();


// ===========================
//   TOGGLE SECTION TENTANGKU
// ===========================
(function tentangkuToggle() {
  const section = document.getElementById('section-tentangku');
  if (!section) return;

  function toggle(e) {
    e.preventDefault();
    const isHidden = !section.classList.contains('show');
    section.classList.toggle('show');
    if (isHidden) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  const btnNav  = document.getElementById('btn-tentangku');
  const btnHero = document.getElementById('btn-tentangku-hero');
  if (btnNav)  btnNav.addEventListener('click', toggle);
  if (btnHero) btnHero.addEventListener('click', toggle);
})();


// ===========================
//   SMOOTH SCROLL (fallback)
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ===========================
//   SCROLL REVEAL ANIMATION
// ===========================
(function scrollReveal() {
  const targets = document.querySelectorAll(
    '.project-card, .life-card, .skill-item, .about-card, .map-wrap'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity  = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
})();