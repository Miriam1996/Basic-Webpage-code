$(document).ready(function(){
	//reverses postive or negative whole numbers
	function reverseNumber(number){
		if(Number==null){
			return 0;
		}
		else if(isNaN(number)){
			return 0;
		}
		else{
			var sign = -1;
			var num = Number(number);
			if(num>0){
				sign =1;
			}
			var num = Math.abs(num);
			var result = 0;
			if(num <10){
				return num;
			}
			while(num>0){
				result*=10;
				result+=num%10;
				if(num<10){
					break;
				}
				num/=10;
				num = Math.floor(num);

			}
			return result * sign;

		}
		
	}
	console.log(reverseNumber('95315'));
  //display current date in mm/dd/yyyy format
	function getCurrentDate(){
		var d = new Date();
		var dd = String(d.getDate()).padStart(2,'0');
		var mm = String(Number(d.getMonth()+1)).padStart(2,'0');
		var yyyy = String(d.getFullYear());
		var currDate = mm+"-"+dd+"-"+yyyy;
		console.log(currDate);
		return currDate;

	}
	$('#date').html('Current Date: ' + getCurrentDate());
	$('#signin').click(function(){
		//get username and password on submit
		var username = $('input[name=UserName]').val();
		var password  = $('input[name=Password]').val();
		console.log(username + password);
		if(username!=''&&password!=''){
			alert('Welcome ' + username);
		}
		



	});

	$('#submit').click(function(){
		var num = $('input[name=num]').val();
		$('#result').html(reverseNumber(num));

	});
});
