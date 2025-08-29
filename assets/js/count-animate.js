(function () {
  const maxValues = [180, 30, 4];
  const durations = [3000, 2000, 1600];

  const section = document.getElementById("counts");
  if (!section) return;

  let animated = false;

  function animate(el, end, duration) {
    const startTime = performance.now();

    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const val = Math.floor(end * p);
      el.textContent = p < 1 ? val : end + "+"; // final with +
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function inView(el) {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    return r.top < vh && r.bottom > 0 && r.left < vw && r.right > 0;
  }

  function startIfVisible() {
    if (animated) return;
    if (inView(section)) {
      animated = true;
      const boxes = section.querySelectorAll(".count-box");
      boxes.forEach((box, i) => {
        const p = box.querySelector("p");
        if (p) animate(p, maxValues[i] || 0, durations[i] || 1500);
      });
      window.removeEventListener("scroll", startIfVisible);
      window.removeEventListener("resize", startIfVisible);
      window.removeEventListener("load", startIfVisible);
    }
  }

  // init
  startIfVisible();
  window.addEventListener("load", startIfVisible, { passive: true });
  window.addEventListener("scroll", startIfVisible, { passive: true });
  window.addEventListener("resize", startIfVisible);
})();