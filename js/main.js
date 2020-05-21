/*global $, console, alert*/
$(function () {
	'use strict';

	var winH      = $(window).height(),
		uppernavH = $('.upperbar').innerHeight(),
		navbarH   = $('.navbar').innerHeight(),
		tabs      = $('.work ul li'),
		button    = ('.fa-chevron-circle-up');

	//height of the header
	$('header, .carousel-item').height(winH - (uppernavH + navbarH));

	//link attribute for navbar
  $('nav .links').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).data('links')).offset().top
    }, 1000);
  });

	//Tabs
	$(tabs).click(function () {

		$(this).addClass('active').siblings().removeClass('active');

		$('.image-parent .image').css('opacity', '.1');

		$($(this).data('tabs')).parent().css('opacity', '1');

	});

	//countTo plugin
	$(window).scroll(function () {

		if ($(window).scrollTop() >= ($('#start-counter').offset().top) - 320) {

			$('.counter1, .counter2, .counter3, .counter4').countTo();
		}
	});

	//creat pupup contact
	$('.show-contact').click(function () {
		$('.contact-us').fadeIn();
	});

	$('.contact-us').click(function () {
		$(this).fadeOut();
	});

	$('.popup-box').click(function (e) {
		e.stopPropagation();
	});

	$('.remove-popup').click(function (event) {
		event.preventDefault();
		$('.contact-us').fadeOut();
	});

	var toTop = $('.fa-chevron-circle-up');
	$(window).scroll(function () {

		//show the botton of scroll top
		if ($(window).scrollTop() >= 400) {
			$(toTop).fadeIn();
		} else {
			$(toTop).fadeOut();
		}

	});

	//scroll to top
	$('.fa-chevron-circle-up').click(function () {
		$('html, body').animate({
			scrollTop : 0
		}, 1000);
	});

	AOS.init({
	duration: 600
	});

});
