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
					$('#fizzbuzz').append(listItem + " - fizzBuzz </br/>" );
					document.getElementById('myNumber').value = '';
				} else if ( i%5 === 0){
					$('#fizzbuzz').append(i + " - buzz </br/>" );
					document.getElementById('myNumber').value = '';
				} else if ( i%3 === 0){
					$('#fizzbuzz').append(i + " - fizz </br/>" );
					document.getElementById('myNumber').value = '';
				} else{
					$('#fizzbuzz').append(i + "</br/>" );
					document.getElementById('myNumber').value = '';
				};
			};
		};
	};
	$("#myNumber").keyup(function(event){
		if(event.which == 13){
			event.preventDefault();
			$('#fizzbuzz').append("please refresh to enter another number </br/>" );
			fizzbuzz();
		};
	});
	$("button").click(function(event){
		event.preventDefault();
		$('#fizzbuzz').append("please refresh to enter another number </br/>" );
		fizzbuzz();
	});
});