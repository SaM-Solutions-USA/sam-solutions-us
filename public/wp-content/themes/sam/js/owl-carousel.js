jQuery(function($){ 
	var clientSlider = $(".client-slider.owl-carousel");	
	if (clientSlider.length) { 
	  clientSlider.owlCarousel({
		nav: false,
		loop: true,
		margin: 40,
		dots: false,
		lazyLoad: true,
		autoplay: true,
		autoWidth: true,
		smartSpeed: 500,
		autoplayTimeout: 2500,
		autoplayHoverPause: true,
		responsiveClass: true
	  }); 
	}

	var customSlider = $(".custom-slider--reviews.owl-carousel");	
	if (customSlider.length) { 
	  customSlider.owlCarousel({
		center: false,
		items:1,
		autoWidth: false,
		loop:true,
		margin:30,
		nav: false,
		dots: true,
		stagePadding: 25,
		lazyLoad: true,
		responsive:{
		  1200:{
			  nav: true,
			  center: true,
			  autoWidth: true,
			  stagePadding: 30
		  },

		  1000:{
			  center: true,
			  autoWidth: true,
			  stagePadding: 30
		  },

		  992:{
			  center: true,
			  autoWidth: true,
			  stagePadding: 30
		  }
		}
	  }); 
	}
	var advantagesDisadvantagesSlider = $(".advantages-disadvantages.owl-carousel");	
	if (advantagesDisadvantagesSlider.length) { 
	  advantagesDisadvantagesSlider.owlCarousel({
		margin:20,
		responsive:{
		  900:{
			  items:3,
			  loop:true
		  },

		  680:{
			  items:2.3,
			  loop:true
		  },

		  320:{
			  items:1.3,
			  loop:true,
		  }
		}
	  });
	}

	var teamSlider = $(".slider-team-new.owl-carousel");	
	if (teamSlider.length) {
	  teamSlider.owlCarousel({
		margin:10,
		nav: false,
		dots: false,
		lazyLoad: true,
		responsive:{
		  900:{
			  items:4,
			  loop:true
		  },

		  680:{
			  items:3.2,
			  loop:true
		  },

		  370:{
			  items:2.2,
			  loop:true,
		  }
		}
	  });  
	}
});
