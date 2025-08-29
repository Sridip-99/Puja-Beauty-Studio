document.addEventListener('DOMContentLoaded', () => {
  const floatEls = document.querySelectorAll('.float-up');
  const floatDownEls = document.querySelectorAll('.float-down');
  const floatRightEls = document.querySelectorAll('.float-right');
  const floatLeftEls = document.querySelectorAll('.float-left');

  function revealOnScroll() {
    floatEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add('visible');
      }
    });
    floatDownEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add('visible');
      }
    });
    floatRightEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add('visible');
      }
    });
    floatLeftEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  window.addEventListener('resize', revealOnScroll, { passive: true });
  revealOnScroll(); // Initial check
});