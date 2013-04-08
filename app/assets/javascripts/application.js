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
var val = 0

function getSpeed(){
	val = $("#amount").val();
	// console.log(val);
}

function moveForward(){
	console.log("Forward");
	console.log(val);	
	$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {forward: val/100}, dataType: "jsonp"});
}

function moveRight(){
	console.log("Right");
	console.log(val);
	$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {turn: val/100}, dataType: "jsonp"});
}

function Reverse(){
	console.log("Reverse");
	console.log(val);
	$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {forward: -val/100}, dataType: "jsonp"});
}

function moveLeft(){
	console.log("Left");
	console.log(val);
	$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {turn: -val/100}, dataType: "jsonp"});
}

function strafeLeft(){
	console.log("Strafe-Left");
	console.log(val);
	$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {strafe: val/100}, dataType: "jsonp"});
}

function strafeRight(){
	console.log("Strafe-Right");
	console.log(val);
	$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {strafe: -val/100}, dataType: "jsonp"});
}

function stopBot(){
	console.log("STOP");
	$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {strafe: 0}, dataType: "jsonp"});
}

$(function(){
	$(document).keydown(function(key){
			switch(parseInt(key.keyCode)){
				case 87: 
					//move forward - "w"
					getSpeed();
					moveForward();
					break;

				case 68:
					//move right - "d"
					getSpeed();
					moveRight();
					break;

				case 83:
					//reverse - "s"
					getSpeed();
					Reverse();
					break;
				
				case 65:
					//move left - "a"
					getSpeed();
					moveLeft();
					break;

				case 90:
					//strafe left - "z"
					getSpeed();
					strafeLeft();
					break;

				case 67:
					//strafe right - "c"
					getSpeed();
					strafeRight();
					break;

				case 32:
					//stop - "space bar"
					stopBot();

				case 72:
					//hammer time - "h"
					val = 50;
					moveForward();
					setTimeout(alert("Can't Touch This"),50000);
					val = 100;
					strafeRight();
					setTimeout(alert("Can't Touch This"), 50000);
					val = 50;
					Reverse();
					setTimeout(alert("Can't Touch This"), 50000);
					val = 100;
					strafeLeft();
					alert("ITS HAMMER TIME");
					stopBot();
			}
	})
});



// $(function(){
// 	$(".btn-success").on("click", function() {
// 		console.log("Forward");
// 		var val = $("#amount").val();
// 		console.log(val);
// 		$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {forward: val/100}, dataType: "jsonp"});
// 	}); 

// 	$(".btn-danger").on("click", function() {
// 		console.log("Reverse");
// 		var val = $("#amount").val();
// 		console.log(val);
// 		$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {forward: -val/100}, dataType: "jsonp"});
// 	}); 

// 	$(".btn-info").on("click", function() {
// 		console.log("Left");
// 		var val = $("#amount").val();
// 		console.log(val);
// 		$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {turn: -val/100}, dataType: "jsonp"});
// 	}); 

// 	$(".btn-warning").on("click", function() {
// 		console.log("right");
// 		var val = $("#amount").val();
// 		console.log(val);
// 		$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {turn: val/100}, dataType: "jsonp"});
// 		//ajax
// 	});

// 	$(".left").on("click", function() {
// 		console.log("SL");
// 		var val = $("#amount").val();
// 		console.log(val);
// 		//ajax
// 		$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {strafe: val/100}, dataType: "jsonp"});
// 	});

// 	$(".right").on("click", function() {
// 		console.log("SR");
// 		var val = $("#amount").val();
// 		console.log(val);
// 		$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {strafe: -val/100}, dataType: "jsonp"});
// 		//ajax
// 	});
// 	$(".btn-primary").on("click", function() {
// 		console.log("STOP");
// 		$.ajax({url: "http://127.0.0.1:8071/motion-control/update", data: {strafe: 0}, dataType: "jsonp"});
// 		//ajax
// 	});
// });