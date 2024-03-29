// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  const formElEmail = form.elements.email;
  const formElPassword = form.elements.password;

     if (!formElEmail.value ||!formElPassword.value) {
      alert("Усі поля мають бути заповнені");
       return;
    }
     else {
       const formData = {
         email: formElEmail.value,
         password: formElPassword.value,
       };

       console.log(formData);

    form.reset();
  }
};
