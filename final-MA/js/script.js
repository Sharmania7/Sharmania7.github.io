const slides = document.querySelectorAll(".mySlides");

// Set the current slide index to 0.
let currentSlideIndex = 0;

// Display the current slide and hide all other slides.
function showSlide(slideIndex) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

// Update the slide index when the user clicks the next or previous buttons.
function plusSlides(n) {
  currentSlideIndex += n;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showSlide(currentSlideIndex);
}

// Display the first slide when the page loads.
showSlide(currentSlideIndex);