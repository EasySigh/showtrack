import 'bootstrap';
import 'slick-carousel';

var $ = require("jquery");

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 7,
	  slidesToScroll: 3,
	  focusOnSelect: true,
	  infinite: true,
	  autoplay: true,
  	autoplaySpeed: 2000,

  	responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});