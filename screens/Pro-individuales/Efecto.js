/* Girar foto */
$(document).ready(function () {
	//Giramos imagenes
	var margin =$("#imagefront").width()/2;
	var width=$("#imagefront").width();
	var height=$("#imagefront").height();

	$("#imageback").stop().css({width:'0px',height:''+height+'px',
marginLeft:''+margin+'px',opacity:'0.5'});
	$("#imagefront").mouseenter(function(){
		$(this).stop().animate({width:'0px',height:''+height+'px',
marginLeft:''+margin+'px',opacity:'0.5'},{duration:500});
		window.setTimeout(function() {
		$("#imageback").stop().animate({width:''+width+'px',height:
''+height+'px',marginLeft:'0px',opacity:'1'},{duration:500});
		},500);
	});
	$("#imageback").mouseenter(function(){
		$(this).stop().animate({width:'0px',height:''+height+'px',
marginLeft:''+margin+'px',opacity:'0.5'},{duration:500});
		window.setTimeout(function() {
		$("#imagefront").stop().animate({width:''+width+'px',height:
''+height+'px',marginLeft:'0px',opacity:'1'},{duration:500});
		},500);
	});

});