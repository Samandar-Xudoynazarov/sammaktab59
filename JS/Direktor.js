const searchButton = document.getElementById("searchButton");
const searchBar = document.getElementById("searchBar");
const Text = document.querySelector("#Name");
let a = true;
searchButton.addEventListener("click", () => {
  Text.classList.toggle("active");
  searchBar.classList.toggle("active");
  a = !a;
});
//Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('open');  // Menyuni ochish/yopish
    });
});
//   slayder hamkor
let currentSlide = 0;
const totalSlides = 9;
const slider = document.getElementById("sliderXizmat");
const dotsContainer = document.getElementById("dots");

// Chekonlarni yaratish
for (let i = 0; i < totalSlides-4; i++) {
  const dot = document.createElement("button");
  dot.setAttribute("data-slide", i);

  // 'mouseover' hodisasini qo'shamiz
  dot.addEventListener("mouseover", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

// Chekonni yangilash
function updateDots() {
  document.querySelectorAll(".dots button").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Sliderni yangilash
function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

// Chapga o'tish
function prevSlide() {
  currentSlide = currentSlide === 0 ? totalSlides - 5 : currentSlide - 1;
  updateSlider();
}

// O'ngga o'tish
function nextSlide() {
  currentSlide = currentSlide === totalSlides - 5 ? 0 : currentSlide +1;
  updateSlider();
}

// Chekon bilan to'g'ridan-to'g'ri ma'lum slaydga o'tish
function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

// Dastlabki holatda slaydni ko'rsatish
updateSlider();