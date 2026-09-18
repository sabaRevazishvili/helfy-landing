// Testimonial slider — infinite, 1 dot per card
const slider = document.querySelector(".testimonial-slider");
const cards = document.querySelectorAll(".testimonial-card");
const dotsContainer = document.getElementById("sliderDots");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

let currentIndex = 0;
const totalCards = cards.length;

function renderDots() {
  dotsContainer.innerHTML = "";
  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

function updateSlider() {
  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = 24; // matches --spacing-lg in px
  const offset = currentIndex * (cardWidth + gap);
  slider.style.transform = `translateX(-${offset}px)`;
  renderDots();
}

function goToSlide(index) {
  // wrap around: infinite loop
  currentIndex = (index + totalCards) % totalCards;
  updateSlider();
}

nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));

window.addEventListener("resize", updateSlider);

// Initial render
updateSlider();
