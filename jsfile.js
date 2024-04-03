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



const menu = document.querySelector("#menu");
const hambutton = document.querySelector("#hambutton");
let stat = 0;

hambutton.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  if (stat === 0) {
    hambutton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[35px] sm:w-[50px] transition-transform transform-gpu active:rotate-90" @click="toggleEffect">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;
    stat++;
  } else {
    hambutton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[35px] sm:w-[50px] transition-transform transform-gpu active:rotate-90" @click="toggleEffect">
        <path fill-rule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
      </svg>
    `;
    stat--;
  }
});

  // Get the icon element
  const icon = document.getElementById('hamicon');

    // Function to toggle effect on click
  function toggleEffect() {
  icon.classList.toggle('rotate-90');
  icon.classList.toggle('scale-110');
    }

    // Add click event listener to the icon
  icon.addEventListener('click', toggleEffect);