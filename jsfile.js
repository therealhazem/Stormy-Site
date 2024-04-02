// this is the slider script of the second one
const sliderr = document.querySelector('.sliderr');
const slidess = document.querySelectorAll('.slidee');
let currentIndexx = 0;

function goToSlidee(index) {
  if (index < 0) {
    currentIndexx = slidess.length - 1;
  } else if (index >= slidess.length) {
    currentIndexx = 0;
  } else {
    currentIndexx = index;
  }

  const offsetX = -currentIndexx * 100;
  sliderr.style.transform = `translateX(${offsetX}%)`;
}

function nextSlidee() {
  goToSlidee(currentIndexx + 1);
}

function prevSlidee() {
  goToSlidee(currentIndexx - 1);
}


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function goToSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offsetX = -currentIndex * 100;
  slider.style.transform = `translateX(${offsetX}%)`;
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}
