// About section slideshow

const slides = document.querySelectorAll(".slides img");
let index = 0;
let timer;

function showSlide(newIndex) {
  slides[index].classList.remove("active");
  index = (newIndex + slides.length) % slides.length; // Wraps around when finished
  slides[index].classList.add("active");
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

// Buttons

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

function startTimer() {
  timer = setInterval(nextSlide, 5000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

startTimer();
