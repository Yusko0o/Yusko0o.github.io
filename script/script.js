// ============================================================
// TERMINAL TYPEWRITER
// ============================================================
const lines = [
  'Junior Back-end Developer',
  'C++ | Python | Flask | SQL',
  'Building secure, clean systems.',
];
let lineIdx = 0, charIdx = 0, deleting = false;
const el = document.getElementById('terminal-text');

function type() {
  const current = lines[lineIdx];
  if (!deleting) {
    el.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      lineIdx = (lineIdx + 1) % lines.length;
    }
  }
  setTimeout(type, deleting ? 45 : 80);
}
type();

// ============================================================
// SCROLL REVEAL — cards fade in on enter
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => e.target.classList.add('visible'), parseInt(delay));
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
  revealObserver.observe(card);
});

// ============================================================
// SKILL BARS — animate width on scroll
// ============================================================
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar span').forEach(bar => {
        bar.classList.add('animated');
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card').forEach(card => {
  barObserver.observe(card);
});