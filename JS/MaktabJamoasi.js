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

const data = [
    {
      id: 1,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Uhaqida malumot",
      detalis:
        "U haqida koproq malumot",
    },
    {
      id: 2,
      title:
        "Uztozning ism familyasi ",
      image: "../Asisent/img/images.jpg",
      description:
        "Uhaqida malumot",
    },
    {
      id: 3,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 3 ning tavsifi",
    },
    {
      id: 4,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 4 ning tavsifi",
    },
    {
      id: 5,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 5 ning tavsifi",
    },
    {
      id: 6,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 6 ning tavsifi",
    },
    {
      id: 7,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 7 ning tavsifi",
    },
    {
      id: 8,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 8 ning tavsifi",
    },
    {
      id: 9,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 9 ning tavsifi",
    },
    {
      id: 10,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 10 ning tavsifi",
    },
    {
      id: 11,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 11 ning tavsifi",
    },
    {
      id: 12,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 12 ning tavsifi",
    },
    {
      id: 13,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 13 ning tavsifi",
    },
    {
      id: 14,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 14 ning tavsifi",
    },
    {
      id: 15,
      image: "../Asisent/img/images.jpg",
      title:
        "Uztozning ism familyasi ",
      description:
        "Bu Uztozning ism familyasi 15 ning tavsifi",
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
