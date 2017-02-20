/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 50
});

$(document).ready(function(){


$(".owl-carousel").owlCarousel({
  navigation : true, // Show next and prev buttons
  pagination: false,
  slideSpeed : 700,
  paginationSpeed : 700,
  navigation: false,
  singleItem:true,
  addClassActive: true,
  transitionStyle : "fadeUp",
});
$(".owl-carousel1").owlCarousel ({
    navigation : true, // Show next and prev buttons
    pagination: false,
    slideSpeed : 700,
    paginationSpeed : 700,
    navigation: false,
    singleItem:true,
    addClassActive: true,
    transitionStyle : "fadeUp",

    afterMove: function(){
    	// var currentSlide = slider.find('.active');
  		// pagination.removeClass('active');
  		// console.log( currentSlide.length );
  		// pagination.eq(currentSlide.index()).addClass('active');
      //
  		// var folds = $('.fold-bg').children('div');
  		// folds.removeClass('active');
  		// folds.eq(currentSlide.index()).addClass('active');
      //
  		// var title = pagination.eq(currentSlide.index()).html();
  		// $('#section-title').html(title);
    }
  });
  //
	// var slider = $this.find('.tab-content');
  // var pagination = $this.find('.tab-navigation').find('li');
	// slider.owlCarousel({
  //     navigation : true, // Show next and prev buttons
  //     pagination: false,
  //     slideSpeed : 700,
  //     paginationSpeed : 700,
  //     navigation: false,
  //     singleItem:true,
  //     addClassActive: true,
  //     transitionStyle : "fadeUp",
  //
  //     afterMove: function(){
  //     	var currentSlide = slider.find('.active');
  //   		pagination.removeClass('active');
  //   		console.log( currentSlide.length );
  //   		pagination.eq(currentSlide.index()).addClass('active');
  //
  //   		var folds = $('.fold-bg').children('div');
  //   		folds.removeClass('active');
  //   		folds.eq(currentSlide.index()).addClass('active');
  //
  //   		var title = pagination.eq(currentSlide.index()).html();
  //   		$('#section-title').html(title);
  //     }
  //   });
  //
  //
	//   var s = slider.data('owlCarousel');
  //   pagination.click(function(e){
	// 	e.preventDefault();
	// 	var theIndex = $(this).index();
	// 	var currentSlide = slider.find('.active');
  //
	// 	var entry = currentSlide.find('.entry'),
	// 		widget = currentSlide.find('.widget');
  //
	// 	entry.css('position', 'relative');
	// 	entry.velocity({ left: '-50px', opacity:0 }, { duration: 300, ease: 'ease-out' });
	// 	widget.velocity({ right: '-140px', opacity:0 }, { duration: 300, ease: 'ease-out' });
  //
	// 	setTimeout(function(){
	// 		s.goTo(theIndex);
	// 		entry.velocity({ left: '0', opacity:1}, { delay: 500 });
	// 		widget.velocity({ right: '-59px', opacity:1 }, { delay: 500 });
	// 	}, 650);
	// });



});
