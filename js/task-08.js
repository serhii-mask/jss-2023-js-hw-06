// --------------------------
const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
   event.preventDefault();

   const dateObject = createObject(event);

   console.log(dateObject);

   return dateObject;
}

// Добавив функцію якщо полів буде більше ніж 2
// Знаю що все тільки ускладнив
function createObject(elem) {
   const object = {};
   for (let i = 0; i < elem.currentTarget.elements.length - 1; i += 1) {
      const name = elem.currentTarget.elements[i].name;
      const value = elem.currentTarget.elements[i].value;

      if (value === '') {
         return alert('Всі поля повинні бути заповнені!');
      }

      object[name] = value;
   }
   formLogin.reset();

   return object;
}
