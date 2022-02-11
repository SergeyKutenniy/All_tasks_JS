// Линивая загрузка изображений

/* <style>
    .feed img {
        transform: translateX(-50%);
    opacity: 0;
    transition: all 500ms linear 1000ms;
    width: 640px;
    height: 480px;
    object-fit: cover;
    }

    .feed img.appear {
        transform: translateX(0);
    opacity: 1;
    }
</style> */

//в HTML в каждый img добавить loading="lazy" (линивая загрузка), загрузка изображений происходит по мере того как пользователь пролистывает страницу
// class="lazyload" and data-src это для тех браузеров которые не поддерживают ленивую загрузку нативно

if ("loading" in HTMLImageElement.prototype) {
  // figure detection (поддерживает ли браузер атрибут loading - для ленивых изображений)
  console.log("Браузер поддерживает ленивки");

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  console.log("Браузер НЕ поддерживает ленивки");

  const script = document.createElement("script");
  script.src = "ссылка на cdn библиотеку";
  script.integrity = "";
  script.crossOrigin = "";

  document.body.appendChild(script);
}

const lazyImages = document.querySelectorAll("img[data-src]");

lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded, { once: true });
}); // для каждой картинки вешаем событие загрузки. {once: true} - после того как картинка загрузилась и функция отработала один раз, слушание самоудаляется и не висит больше

function onImageLoaded(evt) {
  evt.target.classList.add("appear");
} // добавляем класс для загрузившейся картинки

// Если браузер поддерживает ленивую лзагрузку изображений нативно (из коробки) выполняется код в if, если браузер не поддерживает ленивку с коробки, тогда подключаем библиотеку и динамично вешаем скрип в боди.

// //Пример № 2

// const images = [
//   "image-1.jpeg",
//   "image-2.jpeg",
//   "image-3.jpeg",
//   "image-4.jpeg",
//   "image-5.jpeg",
//   "image-6.jpeg",
//   "image-7.jpeg",
//   "image-8.jpeg",
//   "image-9.jpeg",
//   "image-10.jpeg",
//   "image-11.jpeg",
// ];

// const imageGallery = document.querySelector(".image-gallery");

// renderGallery();

// function renderGallery() {
//   const markup = images
//     .map(
//       (image) => `
//     <li>
//         <img
//         class="lazyload"
//         src="../images/lqip-image.jpeg"   //При первой загрузке страницы сначала загружает  розмытую картинку (подготовленную), вместо всех, а при скроле вниз отрисовывает нужные
//         data-src="../images/${image}"
//         alt="cat"
//         width="900"
//         height="900"
//         />
//     </li>
//   `
//     )
//     .join("");

//   imageGallery.insertAdjacentHTML("beforeend", markup);
// }
