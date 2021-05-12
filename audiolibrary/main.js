const imgItems = titlesFilter = document.querySelectorAll('.filter__title');

titlesFilter.forEach(item => {
	item.addEventListener('click', function (){
		item.classList.toggle('active');
	})
})

document.addEventListener('click', function(e){
	if (!e.target.closest('.filter__section')) {
		titlesFilter.forEach(item => {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
			}
		})
	}
})