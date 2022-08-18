let a = 0;
$(window).scroll(function () {
   var oTop = $('.number').offset().top - window.innerHeight;
   if (a == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
         var $this = $(this),
            countTo = $this.attr('data-count');
         $({
            countNum: $this.text(),
         }).animate(
            {
               countNum: countTo,
            },
            {
               duration: 1500,
               easing: 'swing',
               step: function () {
                  $this.text(Math.floor(this.countNum));
               },
               complete: function () {
                  $this.text(this.countNum);
               },
            }
         );
      });
      a = 1;
   }
});