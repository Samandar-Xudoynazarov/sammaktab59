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
//Slayer uchun
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slide");
let currentIndex = 0;
const slideCount = slideImages.length;

const firstSlideClone = slideImages[0].cloneNode(true);
slides.appendChild(firstSlideClone);

function nextSlide() {
  currentIndex++;

  if (currentIndex > slideCount) {
    slides.style.transition = "none";
    currentIndex = 0;
    updateSlidePosition();

    setTimeout(() => {
      slides.style.transition = "transform 0.5s ease-in-out";
      currentIndex++;
      updateSlidePosition();
    }, 50);
  } else {
    updateSlidePosition();
  }
}

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
const autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 3000)
// Yangiliklar bolimi
const data = [
    {
      id: 1,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Avval xabar berilganidek, joriy yilning 30-sentabr kuni Davlatimiz rahbari pedagoglar bilan o‘tkazilgan ochiq muloqot davomida yurtimizdagi barcha ota-onalar, ustoz va murabbiylarga murojaat qilib, yoshlarning taʼlim – tarbiya masalasiga alohida...",
      detalis:
        " Ochiq ma’ruzadan avval Jan Tirol Maktabgacha va maktab ta’limi vaziri Hilola Umarova bilan uchrashdi. Shundan soʻng u shaxsiy manfaatlar va ijtimoiy farovonlik oʻrtasidagi muvozanatni tushuntirib, xalq farovonligiga erishish boʻyicha qiziqarli ma’ruza oʻtkazdi.Ochiq ma'ruzada 700 ga yaqin ilm-fan vakillari, iqtisodchilar, tadbirkorlar va talabalar qatnashib, o'zlari uchun yangi tajriba va bilimlarga ega bo'lishdi. Nobel mukofoti sovrindori bilan uchrashish va uning ma'ruzasida qatnashish yosh iqtisodchilar uchun ayniqsa, qiziq voqea bo'lib, ular o'zlarini qiziqtirgan savollariga javob olishdi.",
    },
    {
      id: 2,
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      image: "../Asisent/img/12.jpg",
      description:
        "Avval xabar berilganidek, joriy yilning 30-sentabr kuni Davlatimiz rahbari pedagoglar bilan o‘tkazilgan ochiq muloqot davomida yurtimizdagi barcha ota-onalar, ustoz va murabbiylarga murojaat qilib, yoshlarning taʼlim – tarbiya masalasiga alohida...",
    },
    {
      id: 3,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 3 ning tavsifi",
    },
    {
      id: 4,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 4 ning tavsifi",
    },
    {
      id: 5,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 5 ning tavsifi",
    },
    {
      id: 6,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 6 ning tavsifi",
    },
    {
      id: 7,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 7 ning tavsifi",
    },
    {
      id: 8,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 8 ning tavsifi",
    },
    {
      id: 9,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 9 ning tavsifi",
    },
    {
      id: 10,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 10 ning tavsifi",
    },
    {
      id: 11,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 11 ning tavsifi",
    },
    {
      id: 12,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 12 ning tavsifi",
    },
    {
      id: 13,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 13 ning tavsifi",
    },
    {
      id: 14,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 14 ning tavsifi",
    },
    {
      id: 15,
      image: "../Asisent/img/12.jpg",
      title:
        "Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda ",
      description:
        "Bu Maktablarda “Ezgulik, bilim va maʼrifatni qurol qilib, jaholat va yovuzlik yo‘lini to‘saylik!” shiori ostida ota-onalar bilan uchrashuvlar tashkil etilmoqda 15 ning tavsifi",
    },
  ];
  
  const itemsPerPage = 5;
  let currentPage = 1;
  
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
  
  function renderData(page) {
    const container = document.getElementById("container");
    container.innerHTML = "";
  
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = data.slice(startIndex, endIndex);
  
    itemsToShow.forEach((item) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
              <img src=${item.image} id="imgNews" alt="">
              <div>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                  <span>
                      <p>Qo'shilgan vaqt: ${item.addedAt}</p>
                      <button onclick="showMore(${item.id})">Ko'proq ma'lumot</button>
                  </span>
              </div>
          `;
      container.appendChild(div);
    });
    renderPagination();
  }
  function renderPagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";
  
    const totalPages = Math.ceil(data.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.innerText = i;
  
      if (i === currentPage) {
        button.classList.add("active");
      }
  
      button.addEventListener("click", function () {
        currentPage = i;
        renderData(currentPage);
      });
  
      paginationContainer.appendChild(button);
    }
  }
  
  function showMore(id) {
    const item = data.find((d) => d.id === id);
    const detailDiv = document.getElementById("detailDiv");
    const container = document.getElementById("container");
    const paginationContainer = document.getElementById("pagination");
    document.getElementById("Imgspan").innerHTML = `
          <img src=${item.image} id="imgNews" alt="">
      `;
    document.getElementById("detailTitle").innerText = item.title;
    document.getElementById("detailDescription").innerText = item.detalis;
    document.getElementById(
      "detailAddedAt"
    ).innerText = `Qo'shilgan vaqt: ${item.addedAt}`;
    paginationContainer.style.display = "none";
    container.style.display = "none";
    detailDiv.style.display = "block";
  }
  
  function closeDetail() {
    document.getElementById("detailDiv").style.display = "none";
    document.getElementById("container").style.display = "flex";
    document.getElementById("pagination").style.display = "flex";
  }
  renderData(currentPage);
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
