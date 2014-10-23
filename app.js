$(document).ready(function(){
	$("#myNumber").keyup(function(event){
		if(event.which == 13){
			event.preventDefault();
			$("button").click();
		};
	});
		$("button").click(function(){
			var itemValue = document.getElementById('myNumber');
			var listItem = itemValue.value;
			
			if(!$.trim($('#myNumber').val())){
				alert('please enter valid item in inputbox');
			} else if (listItem%15 === 0){
				$('#fizzbuzz').append(listItem + " fizzBuzz </br/>" );
				document.getElementById('myNumber').value = '';
			} else if ( (listItem%5) === 0){
				$('#fizzbuzz').append(listItem + " buzz </br/>" );
				document.getElementById('myNumber').value = '';
			} else if ( (listItem%3) === 0){
				$('#fizzbuzz').append(listItem + " fizz </br/>" );
				document.getElementById('myNumber').value = '';
			} else{
				$('#fizzbuzz').append(listItem + "</br/>" );
				document.getElementById('myNumber').value = '';
			}
		});
});