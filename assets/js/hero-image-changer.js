const slidesContainer = document.querySelector(".slides");
const totalImages = 6;
let currentIndex = 0;

// Create slides
for (let i = 1; i <= totalImages; i++) {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.style.backgroundImage = `url('assets/images/heroimg/${i}.jpg')`;
  if (i === 1) slide.classList.add("active");
  slidesContainer.appendChild(slide);
}

// Create dots
const dotsContainer = document.querySelector(".dots");
for (let i = 0; i < totalImages; i++) {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots span");

// Functions
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

function nextSlide() {
  let newIndex = (currentIndex + 1) % totalImages;
  showSlide(newIndex);
}

function prevSlide() {
  let newIndex = (currentIndex - 1 + totalImages) % totalImages;
  showSlide(newIndex);
}

function goToSlide(index) {
  showSlide(index);
}

// Arrow events
document.querySelector(".arrow.left").addEventListener("click", prevSlide);
document.querySelector(".arrow.right").addEventListener("click", nextSlide);

// Auto play
setInterval(nextSlide, 5000);
