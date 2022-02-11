// При клике на кнопку с курсом нам выдает список только тех курсов где есть указаный на кнопке тег курса

export /*(import)*/ const courses = [
  { name: "HTML", tags: ["html"], prices: 7.99 },
  {
    name: "Machine Learning & Data Science",
    tags: ["python"],
    prices: 49.99,
  },
  {
    name: "Hands-On Python & R In Data Science",
    tags: ["python"],
    prices: 109.99,
  },
  {
    name: "React - The Complete Guide",
    tags: ["js", "react"],
    prices: 11.99,
  },
  {
    name: "The Complete JavaScript Course 2022",
    tags: ["js"],
    prices: 14.99,
  },
  {
    name: "Modern React with Redux",
    tags: ["js", "react"],
    prices: 11.99,
  },
  {
    name: "The Complete 2022 Web Development Bootcamp",
    tags: ["html", "css", "js", "react", "nodejs"],
    prices: 11.99,
  },
  {
    name: "Build Responsive Websites with HTML and CSS",
    tags: ["html", "css"],
    prices: 15.99,
  },
  {
    name: "The Complete Node.js Developer Course",
    tags: ["nodejs"],
    prices: 15.99,
  },
  {
    name: "JavaScript: Understanding the Weird Parts",
    tags: ["js"],
    prices: 15.99,
  },
];

import { courses } from "./courses.js"; // импортируем массив с курсами в другой файл

const buttonContainerRef = document.querySelector(".buttons-container"); // --1--
const coursesContainerRef = document.querySelector(".courses-container");

const filters = courses
  .flatMap((course) => course.tags)
  .filter((item, index, array) => array.indexOf(item) === index); // --2-- выводит массив с уникальными елементами (в данном случае с уникальными тегами)

// const filters = [...new Set(courses.flatMap(course => course.tags))]; //альтернативный варииант поиска уникальных елементов

buttonContainerRef.addEventListener("click", (event) => {
  const currentElement = event.target; // --6-- текущий елемент (кнопка)
  const currentValue = currentElement.dataset.value; // --7-- текущее значение (кнопки) (dataset.value => data-value="${course}" - data-атрибут в HTML)
  const activeElement = document.querySelector(".is-active"); //--10-- ищем активную кнопку

  if (!currentValue) return; // --8-- проверка (если мы кликнули мимо кнопки, то ничего не будет происходить)

  if (activeElement) {
    activeElement.classList.remove("is-active"); // --11-- если уже активная кнопка есть, то мы с этой кнопки удаляем класс (переключение активных кнопок)
  }

  if (currentElement === activeElement) {
    return renderCourses(courses); //--18-- при нажатии воторй раз на кнопку (отмены, отпускаем) список возвращается в исходный вариант
  }

  currentElement.classList.add("is-active"); //--9-- вешаем класс на актувную кнопку

  const filteredCourses = courses.filter(
    (course) => course.tags.includes(currentValue) //--16-- фильтрует список курсов и выводит те которые указаны на кнопке
  );

  renderCourses(filteredCourses); //--17-- вызываем ф-цию фильтрации списка
});

renderFilters(filters); // --5-- вызываем функцию создания кнопок-фильтров
renderCourses(courses); // --14-- вызываем функцию создания списка курса с ценой

function renderFilters(arrayOfBtnValue) {
  const markup = arrayOfBtnValue
    .map(
      (course) =>
        `<button class="button" type="button" data-value="${course}">${course}</button>`
    )
    .join(""); //--3-- создаем разметку с кнопками названия курсов

  buttonContainerRef.insertAdjacentHTML("beforeend", markup); // --4-- добавляем в разметку
}

function renderCourses(arrayOfCourses) {
  coursesContainerRef.innerHTML = ""; //--15-- отрисовка списка происходит каждый раз новая при фильтре по кнопке

  const markup = arrayOfCourses
    .map(
      (course, index) =>
        `<div>${index + 1}. ${course.name} - ${course.prices}</div>`
    )
    .join(""); // --12-- создаем ф-цию которая выводит список курса и цены на него

  coursesContainerRef.insertAdjacentHTML("beforeend", markup); // --13-- добавляем в розметку
}
