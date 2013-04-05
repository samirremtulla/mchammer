// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(function(){
	$(".btn-success").on("click", function() {
		console.log("Forward");
		$.ajax({url: "127.0.0.1:8071/motion-control/update", data: {forward: 1}, dataType: "jsonp"});
	}); 

	$(".btn-danger").on("click", function() {
		console.log("Reverse");
		$.ajax({url: "127.0.0.1:8071/motion-control/update", data: {forward: -1}, dataType: "jsonp"});
	}); 

	$(".btn-info").on("click", function() {
		console.log("Left");
		$.ajax({url: "127.0.0.1:8071/motion-control/update", data: {turn: -1}, dataType: "jsonp"});
		
	}); 

	$(".btn-warning").on("click", function() {
		console.log("right");
		$.ajax({url: "127.0.0.1:8071/motion-control/update", data: {turn: 1}, dataType: "jsonp"});
		//ajax
	});

	$(".left").on("click", function() {
		console.log("SL");
		//ajax
		$.ajax({url: "127.0.0.1:8071/motion-control/update", data: {strafe: -1}, dataType: "jsonp"});
	});

	$(".right").on("click", function() {
		console.log("SR");
		$.ajax({url: "127.0.0.1:8071/motion-control/update", data: {strafe: 1}, dataType: "jsonp"});
		//ajax
	});

});