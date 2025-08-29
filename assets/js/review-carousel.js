const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item');
const btns = document.querySelectorAll('.btn');

let intervalId;

function reset() {
  for (let i = 0; i < items.length; i++) {
    btns[i].classList.remove('expand');
    items[i].classList.remove('animation');
  } 
}

function animate(i) {
  reset();
  btns[i].classList.add('expand');
  items[i].classList.add('animation');
  slider.style.transform = `translateX(${-i * slider.offsetWidth}px)`;
  currentIndex = i;
}

function scrollTo(i) {
  animate(i);
}

const activate = (e) => {
  if (e.target.matches('.btn')) {
    clearInterval(intervalId);
    scrollTo(Number(e.target.dataset.index));
    startAutoAnimate();
  }
};

function startAutoAnimate() {
  intervalId = setInterval(() => {
    let nextIndex = (currentIndex) % items.length;
    animate(nextIndex);
  }, 5000);
}

const init = () => {
  animate(0);
  startAutoAnimate();
};

window.addEventListener('load', init, false);
window.addEventListener('click', activate, false);