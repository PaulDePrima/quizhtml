$(document).ready(function() {
	$("#p3").click(function() {
	$("#Q1").show();
	$("#QA").show();
	$("#QI").show();
	$("#pic").animate({left: '+=500px'},"slow");
	//$("#pic").animate({top: '+=125px'},"slow");
	$("#pic").animate({left: '-=500px'},"slow");
	//$("#pic").animate({top: '+=125px'},"slow");
	//$("#pic").animate({left: '+=125px'},"slow");
	//$("#pic").animate({top: '-=125px'},"slow");
	//$("#pic").animate({left: '-=125px'},"slow");
	//$("#pic").animate({top: '-=125px'},"slow");
	$("img").css("border", "25px solid green");
	});
	$("#pic").click(function() {
		$("#pic").animate({left: '+=500px'},"slow");
	//$("#pic").animate({top: '+=125px'},"slow");
	$("#pic").animate({left: '-=500px'},"slow");
	//$("#pic").animate({top: '+=125px'},"slow");
	//$("#pic").animate({left: '+=125px'},"slow");
	//$("#pic").animate({top: '-=125px'},"slow");
	//$("#pic").animate({left: '-=125px'},"slow");
	//$("#pic").animate({top: '-=125px'},"slow");
	});
});

$(document).ready(function() {
	$("#QA").click(function() {
	$("#AQ").show();
	$("#Q2").show();
	$("#QA2").show();
	$("#QI2").show();
	$("img").css("border", "25px solid green");
	});
});

$(document).ready(function() {
	$("#QI").click(function() {
	$("#IQ").show();
	$("#Q2").show();
	$("#QA2").show();
	$("#QI2").show();
	$("img").css("border", "25px solid green");
	});
});

$(document).ready(function() {
	$("#QA2").click(function() {
	$("#AQ2").show();
	$("#Q3").show();
	$("#QA3").show();
	$("#QI3").show();
	$("img").css("border", "25px solid green");
	});
});

$(document).ready(function() {
	$("#QI2").click(function() {
	$("#IQ2").show();
	$("#Q3").show();
	$("#QA3").show();
	$("#QI3").show();
	$("img").css("border", "25px solid green");
	});
});


$(document).ready(function() {
	$("#QA3").click(function() {
	$("#AQ3").show();
	});
});

$(document).ready(function() {
	$("#QI3").click(function() {
	$("#IQ3").show();
	});
});
