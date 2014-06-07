(function () {

	var answer = document.getElementById("factorial");
	var button = document.getElementById("calculate");

	button.onclick = function () {
		var factorialnumber = document.getElementById("num").value;
		for (var i = 0; i < factorialnumber; i++) {
			factorialnumber * i
			// factorialnumber *= i;
			// console.log(factorialnumber * i)
			var result = factorialnumber * i
			result * i
			console.log(result * i)
		}
	}


})(); 

/*	

button.onclick = function factorial(num) {
			if (num < 0) {
				return -1;
			}
			else if (num == 0) {
				return 1;
			}
			else {
				return (num * factorial(num-1));
			}
		}

		var result = factorial(num);
		document.write(result);  
*/


	//alert("Factorial of " + n + " is " + product)

/*	function factnum (n) {
		if ((n == 0) || (n == 1))
			return 1
		else {
			result = (n * factorial(n-1) )
			return result
		}
	}*/
	
	// }

	// 	var n = 5
	// var product = 1

	// for (i = 2; i <= n; i++){
		// product = product * i
	// }


