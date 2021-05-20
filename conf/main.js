
const btnToggleTheme = document.querySelector('.conference__btn-theme'),
		body = document.querySelector('body'),
		imgBg = document.getElementById('img-get-course');

btnToggleTheme.addEventListener('click', function (){
	body.classList.toggle('white');

	if (body.classList.contains('white')) {
		imgBg.src = "./images/get-course-bg-green.png";
	} else {
		imgBg.src = "./images/get-course-bg.png";
	}
});

$(function () {
	$('#phone').mask('+375 (99) 999-99-99');
	$('#unp').mask('999999999');

})

document.addEventListener('DOMContentLoaded', function () {
   let form = document.getElementById('form');

   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);

      if (error === 0) {
         let response = await fetch('index.php', {
            method: 'POST',
            body: formData,
         });
         if (response.ok) {
            let result = await response.json();
            alert(result.message);
            formData.reset();
         } else {
            form.reset();
            alert('Ошибка');
         }
      }

      function formValidate(form) {
         let error = 0;
         let formRequired = document.querySelectorAll('._required');

         for (let i = 0; i < formRequired.length; i++) {
            const input = formRequired[i];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
               if (emailTest(input)) {
                  formAddError(input);
                  error++;
               }
            } else if (
               input.getAttribute('type') === 'checkbox' &&
               input.checked === false
            ) {
               formAddError(input);
               error++;
            } else if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
         return error;
      }

      function formAddError(input) {
         input.parentElement.classList.add('_error');
         input.classList.add('_error');
      }

      function formRemoveError(input) {
         input.parentElement.classList.remove('_error');
         input.classList.remove('_error');
      }

      function emailTest(input) {
         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
            input.value
         );
      }
   }
});