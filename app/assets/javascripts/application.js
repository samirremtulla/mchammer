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
		var val = $("#amount").val();
		console.log(val);
		$.ajax({url: "http://192.168.1.54:8071/motion-control/update", data: {forward: val/100}, dataType: "jsonp"});
	}); 

	$(".btn-danger").on("click", function() {
		console.log("Reverse");
		var val = $("#amount").val();
		console.log(val);
		$.ajax({url: "http://192.168.1.54:8071/motion-control/update", data: {forward: -val/100}, dataType: "jsonp"});
	}); 

	$(".btn-info").on("click", function() {
		console.log("Left");
		var val = $("#amount").val();
		console.log(val);
		$.ajax({url: "http://192.168.1.54:8071/motion-control/update", data: {turn: -val/100}, dataType: "jsonp"});
	}); 

	$(".btn-warning").on("click", function() {
		console.log("right");
		var val = $("#amount").val();
		console.log(val);
		$.ajax({url: "http://192.168.1.54:8071/motion-control/update", data: {turn: val/100}, dataType: "jsonp"});
		//ajax
	});

	$(".left").on("click", function() {
		console.log("SL");
		var val = $("#amount").val();
		console.log(val);
		//ajax
		$.ajax({url: "http://192.168.1.54:8071/motion-control/update", data: {strafe: val/100}, dataType: "jsonp"});
	});

	$(".right").on("click", function() {
		console.log("SR");
		var val = $("#amount").val();
		console.log(val);
		$.ajax({url: "http://192.168.1.54:8071/motion-control/update", data: {strafe: -val/100}, dataType: "jsonp"});
		//ajax
	});
	$(".btn-primary").on("click", function() {
		console.log("STOP");
		$.ajax({url: "http://192.168.1.54:8071/motion-control/update", data: {strafe: 0}, dataType: "jsonp"});
		//ajax
	});

});