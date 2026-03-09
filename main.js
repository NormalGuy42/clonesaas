/* ============================================
   CloneSaaS — Main JS
   Handles card entrance orchestration & cursor glow
   ============================================ */

// Subtle pointer-follow glow on cards
function initCardGlow() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Reduced motion: skip animations if user prefers
function respectsMotion() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  if (respectsMotion()) {
    initCardGlow();
  }
});
