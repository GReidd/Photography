// Получаем все элементы с классом "all-photoalbums__link"
const btns = document.getElementsByClassName("all-photoalbums__link");

// Функция для добавления активного класса
function activeClass(btns) {
  // Перебираем все кнопки
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      // Удаляем класс 'active' у всех кнопок
      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("all-photoalbums__link--active");
      }
      // Добавляем класс 'active' к нажатой кнопке
      this.classList.add("all-photoalbums__link--active");
    });
  }
}

// Вызываем функцию для добавления обработчиков событий
activeClass(btns);

document.addEventListener("DOMContentLoaded", () => {
  const filterLinks = document.querySelectorAll(".all-photoalbums__link");
  const filterItems = document.querySelectorAll(".filterDiv");

  // Фильтрация по категориям
  filterLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      filterLinks.forEach(link => link.classList.remove("all-photoalbums__link--active"));
      event.target.classList.add("all-photoalbums__link--active");

      const filter = event.target.textContent.toLowerCase();
      filterItems.forEach(item => {
        if (filter === "свадьбы" && item.classList.contains("wedding")) {
          item.style.display = "block";
        } else if (filter === "портреты" && item.classList.contains("portrait")) {
          item.style.display = "block";
        } else if (filter === "пейзажи" && item.classList.contains("landscape")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Изначально отображаем все элементы
  filterItems.forEach(item => {
    item.style.display = "block";
  });
});






// slider
const sliderTrack = document.querySelector('.slider__track');
const slides = Array.from(sliderTrack.children);
const btnLeft = document.querySelector('.photo-albums__btn--left');
const btnRight = document.querySelector('.photo-albums__btn--right');
let currentIndex = 0;

function updateSlider(index) {
  const slideWidth = slides[0].getBoundingClientRect().width + 10; // +10 для учета отступов между слайдами
  sliderTrack.style.transform = `translateX(-${index * slideWidth}px)`;
}

btnLeft.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  updateSlider(currentIndex);
});

btnRight.addEventListener('click', () => {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  updateSlider(currentIndex);
});
