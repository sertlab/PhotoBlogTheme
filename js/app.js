$(document).ready(function(){

	/* For the stixky navigation */

	$('.photo').waypoint(function(direction){

		if(direction == "down"){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');

		}

	},{
		offset:'180px;'
	});


	/* Scroll buttons*/
	$('.js--scroll-to-photos').click(function(){
		$('html,body').animate({scrollTop: $('.photo').offset().top},1000);
	});


	$('.js--scroll-contact').click(function(){
		$('html,body').animate({scrollTop: $('.contact').offset().top},1000);
	});


	/* Animations on scroll */
	$('.photo').waypoint(function(direction){
		$('.js--wp-photo-txt').addClass('animated fadeInDown');
	},{
		offset: '600px;'
	});

	$('.contact').waypoint(function(direction){
		$('.js--wp-contact').addClass('animated fadeInDown');
	},{
		offset: '600px;'
	});

	$('.photo').waypoint(function(direction){
		$('.js--wp-main-photos').addClass('animated bounceInLeft');
	},{
		offset: '600px;'
	});




});