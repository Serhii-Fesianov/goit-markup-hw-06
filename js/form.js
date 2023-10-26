// const reviewsForm = document.querySelector('[name="reviews-form"]');
// const agreement = document.querySelector('[name="user_agreement"]');
// const formBtn = document.querySelector('[data-modal-send]');

// agreement.addEventListener('input', event => {
//   let isChecked = Boolean(event.target.checked) ? true : false;
//   event.target.setAttribute('value', isChecked);

//   if (!isChecked) {
//     formBtn.setAttribute('disabled', true);
//   } else {
//     formBtn.removeAttribute('disabled');
//   }
// });

// reviewsForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const { user_name, user_email, user_pass, storage, user_agreement } =
//     event.target.elements;
//   console.log('User name: ', user_name.value);
//   console.log('storage =>', storage.value);
// });

// const valueSpan = document.querySelector('.value');