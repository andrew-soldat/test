const body = document.querySelector('body'),
   header = document.querySelector('header'),
   burgerButton = document.querySelector('.header__burger'),
   menuNav = document.querySelector('.header__nav'),
   links = document.querySelectorAll('.link');

window.addEventListener('scroll', function () {
   if (window.scrollY > 400) {
      header.classList.add('scroll');
   } else {
      header.classList.remove('scroll');
   }
});

const closeMenuNav = () => {
   burgerButton.classList.remove('active');
   menuNav.classList.remove('active');
   body.classList.remove('lock');
};

document.addEventListener('click', function (e) {
   if (!e.target.closest('.header__list, .header__burger')) {
      closeMenuNav();
   }
});

burgerButton.addEventListener('click', function (e) {
   burgerButton.classList.toggle('active');
   menuNav.classList.toggle('active');
   body.classList.toggle('lock');
});

links.forEach((link) => {
   link.addEventListener('click', function (e) {
      closeMenuNav();
   });
});

const formButtons = document.querySelectorAll('.btn-form'),
   popupForm = document.querySelector('.popup'),
   popupCloseButton = document.querySelector('.popup__close'),
   form = document.getElementById('form-registration'),
   valuePackage = document.getElementById('valuePackage'),
   textChoosePackege = document.getElementById('textChoosePackege');

const closePopup = () => {
   popupForm.classList.remove('open');
   body.classList.remove('lock');
};

formButtons.forEach((item) => {
   item.addEventListener('click', function () {
		form.valuePackage.value = item.dataset.value;
		textChoosePackege.innerHTML = `«${item.dataset.value}»`;
      popupForm.classList.add('open');
      body.classList.add('lock');
   });
});

popupCloseButton.addEventListener('click', function (e) {
   e.preventDefault();
   closePopup();
});

popupForm.addEventListener('click', function (e) {
   if (!e.target.closest('.popup__content')) {
      closePopup();
   }
});

$(function () {
   $('a[href^="#"]').click(function (event) {
      var target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top - 54 }, 800);
      return false;
   });

   $('#phone').mask('+375 (99) 999-99-99');
   $('#unp').mask('999999999');
});

const blockThanks = document.querySelector('.form__thanks');
const btnF = document.querySelector('.ffff');

btnF.addEventListener('click', function (e) {
	console.log('fff');
	blockThanks.classList.add("show");
	setTimeout(function () {
		blockThanks.classList.remove("show");
	},10000)
	
})

document.addEventListener('DOMContentLoaded', function () {
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
				alert('Ошибка')
			}
      }

      function formValidate(form) {
         let error = 0;
         let formRequired = document.querySelectorAll('._required');

         for (let i = 0; i < formRequired.length; i++) {
            const input = formRequired[i];
            let unp = document.getElementById('unp');
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
            } else if (input.classList.contains('_company')) {
               if (input.value !== '' && unp.value === '') {
                  formAddError(unp);
                  error++;
               } else {
                  formRemoveError(unp);
               }
            } else {
               if (input.value === '') {
                  formAddError(input);
                  error++;
               }
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
