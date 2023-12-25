let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  if (n >= slides.length) {
    slideIndex = slides.length - 1;
  } else if (n < 0) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  const prevButton = document.querySelector("button[data-action='previous']");
  const nextButton = document.querySelector("button[data-action='next']");

  prevButton.disabled = slideIndex === 0;
  nextButton.disabled = slideIndex === slides.length - 1;
}
