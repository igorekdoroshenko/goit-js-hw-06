// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputName = document.querySelector("input");
const spanName = document.querySelector("span");

inputName.addEventListener("input", () => {
  if (inputName.value === "") {
    spanName.textContent = "Anonymous";
  } else {
    spanName.textContent = inputName.value;
  }
});
