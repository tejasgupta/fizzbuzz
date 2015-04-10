$(document).ready(function(){
	var fizzbuzz = function() {
		var itemValue = document.getElementById('myNumber');
		var listItem = itemValue.value;
		
		if(!$.trim($('#myNumber').val())){
			alert('please enter valid item in inputbox');
		} else if (listItem%1 != 0){
			alert('please enter valid item in inputbox');
		} else { 
			for(i = 1; i <= listItem; i++){
				if ( i%15 === 0){
					$('#fizzbuzz').append("<li>" + i + " - BURST </li></br/>" );
					document.getElementById('myNumber').value = '';
				} else if ( i%5 === 0){
					$('#fizzbuzz').append("<li>"+ i + " - buzz </li></br/>" );
					document.getElementById('myNumber').value = '';
				} else if ( i%3 === 0){
					$('#fizzbuzz').append("<li>"+ i + " - fizz </li></br/>" );
					document.getElementById('myNumber').value = '';
				} else{
					$('#fizzbuzz').append("<li>"+ i + "</li></br/>" );
					document.getElementById('myNumber').value = '';
				};
			};
		};
	};
	$("#myNumber").keyup(function(event){
		if(event.which == 13){
			event.preventDefault();
			$('#fizzbuzz').html('');
			fizzbuzz();
		};
	});
	$("button").click(function(event){
		event.preventDefault();
		$('#fizzbuzz').html('');
		fizzbuzz();
	});
});