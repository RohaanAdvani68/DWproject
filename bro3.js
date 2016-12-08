$("document").ready(function(){
	$('#pic1').on('mouseenter',function(){//On mouse hover
		$('#pic1').addClass('hidden');
		$('#pic2').removeClass('hidden');
	});
	$('#pic2').on('mouseleave',function(){//On Mouse Leave
		$('#pic2').addClass('hidden');
		$('#pic1').removeClass('hidden');
	});
});