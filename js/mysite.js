// JavaScript Document

//var clientHeight = document.getElementById('myDiv').clientHeight;
//document.getElementById("myDiv").style.padding = "500px";

//$(window).resize(function(){
 //$(".background").css("padding-bottom", $("#myDiv").height());
//});

var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && !navigator.userAgent.match('CriOS');
if (isSafari == true){
	$("#milog").css("opacity", "0");
}

function loadi(){
	setTimeout(whenload, 1000);
}

function vecpop(){
	$("#vecd").fadeIn(500);
	$("#vecvec").fadeTo(500, 0);
}
function brushpop(){
	$("#brushd").fadeIn(500);
	$("#brushvec").fadeTo(500, 0);
}
function tsapop(){
	$("#tsad").fadeIn(500);
	$("#tsavec").fadeTo(500, 0);
}

function whenload(){
	$(".cloader").fadeOut(500);
	$("#backloader").fadeOut(1000);
	setTimeout(whenload,700);
}
function pgtran(){
	$(".homey").animate({queue: false, top: '100px'});
    $(".homey").fadeOut({queue: false, duration: '10'});
}