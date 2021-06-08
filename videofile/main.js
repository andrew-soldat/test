const btnShowBlock = document.querySelectorAll('.btn-toggle');

if (btnShowBlock.length > 0) {
	btnShowBlock.forEach(item => {
		item.addEventListener('click', function (){
			if (item.classList.contains("show-block")) {
				item.classList.remove('show-block');
			} else {
				addClass(item);
			}
		})
	});
}

function addClass(currentItem) {
	btnShowBlock.forEach((item) => {
		item.classList.remove('show-block');
	})
	item = currentItem;
	item.classList.add('show-block');
};

document.addEventListener('click', function(e){
	if (!e.target.closest('.hidden-block, .btn-toggle')) {
		btnShowBlock.forEach(item => {
			if (item.classList.contains('show-block')) {
				item.classList.remove('show-block');
			}
		})
	}
});
		
const body = document.querySelector('body'),
		header = document.querySelector('header'),
		burgerButton = document.querySelector('.header__burger'),
		menuNav = document.querySelector('.header__nav'),
		anchorLinks = document.querySelectorAll('.anchor');

window.addEventListener('scroll', function () {
	if (window.scrollY > 400) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}
});
		
burgerButton.addEventListener('click', function (e) {
	burgerButton.classList.toggle('active');
	menuNav.classList.toggle('active');
	body.classList.toggle('lock');
});

const closeMenuNav = () => {
   burgerButton.classList.remove('active');
   menuNav.classList.remove('active');
   body.classList.remove('lock');
};

document.addEventListener('click', function (e) {
   if (!e.target.closest('.header__nav, .header__burger')) {
      closeMenuNav();
   }
});
		
anchorLinks.forEach((link) => {
   link.addEventListener('click', function (e) {
      closeMenuNav();
   });
});

const btnToggleTheme = document.querySelector('.info-video__btn-theme'),
		wrapperPage = document.querySelector('.wrapper-page-video'),
		imgMainBlack = document.getElementById('img-main-black'),
		imgMainWhite = document.getElementById('img-main-white'),
		imgGetCourse = document.getElementById('img-get-course');


btnToggleTheme.addEventListener('click', function (){
	wrapperPage.classList.toggle('white');

	if (wrapperPage.classList.contains('white')) {
		imgMainBlack.style.display = "none";
		imgMainWhite.style.display = "block";
	} else {
		imgMainBlack.style.display = "block";
		imgMainWhite.style.display = "none";
	}
});

const btnOpenPopup = document.querySelector('.button');
const popupOrder = document.querySelector('.popup-order');
const btnClosePopup = document.querySelector('.popup-order__close');

const closePopup = () => {
   body.classList.remove('lock');
   popupOrder.classList.remove('open');
};

btnOpenPopup.addEventListener('click', function (e) {
	e.preventDefault();
	body.classList.add('lock');
	popupOrder.classList.add('open');
});

btnClosePopup.addEventListener('click', function (e) {
   e.preventDefault();
   closePopup();
});

popupOrder.addEventListener('click', function (e) {
   if (!e.target.closest('.popup-order__content')) {
      closePopup();
   }
});

$(function () {
   $('a[href^="#"]').click(function (event) {
      var target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top - 80}, 800);
      return false;
   });

   $('#phone').mask('+375 (99) 999-99-99');
   $('#unp').mask('999999999');
});

const blockThanks = document.querySelector('.form__thanks');

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
				blockThanks.classList.add('show');
				setTimeout(function(){
					blockThanks.classList.remove('show');
				},5000)
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