(function () {

	var answer = document.getElementById("factorial");
	var button = document.getElementById("calculate");

	button.onclick = function () {
		var result = 1;
		var factorialnumber = document.getElementById("num").value;
		for (var i = 1; i <= factorialnumber; i++) {
			result = i * result;
		}
		console.log(result);
		answer.innerHTML = result;
	}

})(); 


