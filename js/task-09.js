function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и
//  выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

const widget = document.querySelector(".widget");
const spanColor = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

changeBtn.addEventListener("click", onBodyBackgraund);

function onBodyBackgraund() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
