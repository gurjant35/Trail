/* ═══════════════════════════════════
   RANKORA — Interactions & Animations
═══════════════════════════════════ */

// ── Nav scroll effect ──
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile nav toggle ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Fade-up on scroll ──
const fadeEls = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings inside same parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.fade-up')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => io.observe(el));

// ── Animated number counters ──
const counts = document.querySelectorAll('.count');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const dur    = 1600;
    const step   = 16;
    const steps  = dur / step;
    let current  = 0;

    const tick = () => {
      current += target / steps;
      if (current >= target) {
        el.textContent = target;
      } else {
        el.textContent = Math.floor(current);
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
counts.forEach(el => counterIO.observe(el));

// ── Chart bar animation ──
const chartBars = document.querySelectorAll('.cb');
const chartIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    chartBars.forEach((bar, i) => {
      setTimeout(() => {
        bar.style.transition = `height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`;
      }, i * 80);
    });
    chartIO.unobserve(entry.target);
  });
}, { threshold: 0.3 });
const chartEl = document.querySelector('.chart-bars');
if (chartEl) chartIO.observe(chartEl);

// ── Contact form submit ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Message Sent — We'll be in touch soon!
    `;
    btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}

// ── Smooth active nav link highlight ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const activeIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const match = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => activeIO.observe(s));
