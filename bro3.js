$("document").ready(function(){
	$('#pic1').on('mouseenter',function(){//On mouse hover
		$('#pic1').addClass('hidden');
		$('#pic2').removeClass('hidden');
	});
	$('#pic2').on('mouseleave',function(){//On Mouse Leave
		$('#pic2').addClass('hidden');
		$('#pic1').removeClass('hidden');
	});

	$("input[name=check]").change(function(){
		if(this.checked)
			$("input[type=submit]").prop('disabled',false);
		else
			$("input[type=submit]").prop('disabled',true);
	});

	$("form").submit(function(){
		console.log($("input[name=username]").val());
		console.log($("input[name=password]").val());
		if($("input[name=username]").val()=="admin" && $("input[name=password]").val()=="password")
			alert("hi admin!");
	});
});