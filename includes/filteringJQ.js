// JavaScript Document
$('document').ready(function(){
	window.alert($("h2:first").text());
	var newPage = document.getElementsByTagName("title");
	newPage.innerHTML = 'Hello';
	
	$(".map_container").css({float:'left'});
	
	$(":body").css({backgroundColor:'yellow'});
	
	});
	
