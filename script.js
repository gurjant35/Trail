// ── Nav scroll effect ──
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile nav toggle ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a:not(.dropdown-trigger)').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Fade-up on scroll ──
const fadeEls = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.querySelectorAll('.fade-up')];
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), idx * 90);
    io.unobserve(entry.target);
  });
}, { threshold: 0.08 });
fadeEls.forEach(el => io.observe(el));

// ── Animated number counters ──
const counts = document.querySelectorAll('.count');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const steps  = 1600 / 16;
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

// ── Contact form submit ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Message Sent — We'll be in touch soon!`;
    btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4500);
  });
}

// ── Active nav link on scroll (home page only) ──
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links > li > a[href^="#"]');
if (sections.length && navAnchors.length) {
  const activeIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.nav-links > li > a[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => activeIO.observe(s));
}

// ── Close dropdown on outside click ──
document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.style.opacity = '';
      d.style.pointerEvents = '';
    });
  }
});
