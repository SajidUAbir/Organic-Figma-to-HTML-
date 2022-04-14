$(function(){

	// preeload
	$(window).load(function(){
		$('.preloader').delay(100).fadeOut(500);
	});

	// back to top
	// $('.bktp i').click(function(){
	// 	$('html, body').animate({
	// 	scrollTop:0
	// 	}, 500 );
	// });

	// back to top show and hide
	// $(window).scroll(function(){
	// 	var btpShowHide = $(this).scrollTop();
	
	// 	if (btpShowHide > 20) {
	// 	$('.bktp i').fadeIn(500);
	// 	} else {
	// 	$('.bktp i').fadeOut(500);
	// 	}
	// });

	// service slider
	$('.fruit_list').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '.ser_prev',
		nextArrow: '.ser_next',
		centerPadding: '0',
		
	  });

	// featured slider
	$('.featured_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.feat_prev',
		nextArrow: '.feat_next',
		
	  });


		// Set the date we're counting down to
	var countDownDate = new Date("Jul 5, 2022 15:37:25").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	document.getElementById("days_two").innerHTML = days;
	document.getElementById("hours_two").innerHTML = hours;
	document.getElementById("minutes_two").innerHTML = minutes;
	document.getElementById("seconds_two").innerHTML = seconds;
	// document.getElementById("demo").innerHTML = days + "d " + hours + "h "
	// + minutes + "m " + seconds + "s ";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
	}, 1000);


	// price range 
	$( "#slider-range" ).slider({
		range: true,
		min: 130,
		max: 500,
		values: [ 130, 250 ],
		slide: function( event, ui ) {
		  $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
	  
	//   xzoom
	
});

$(".xzoom").xzoom();


// nice number
var number = document.querySelector('#el-number');
var priceOut = document.querySelector('#price');
var price = 250.00;
var num1 = 0;

function increase() {
	num1++;
	number.innerText = num1 + "kg";
	priceOut.innerText = "$" + price * num1 + ".00";
}
function decrease() {
	var count = number.innerText = num1;

	if(count === 0) {
		number.innerText = 0;
		
	} 
	else {
		number.innerText = num1-- + "kg";
	}
}


