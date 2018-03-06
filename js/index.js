$(function() {
	$("#parameters_form").submit(function send(parameter) {
		//Parameters equation user
		let parameterA = $("#parameter1").val();
		let parameterB = $("#parameter2").val();
		let parameterC = $("#parameter3").val();
		// put parameters value in output
		let valor1 = $("#valor1").val(parameterA);
		let valor2 = $("#valor2").val(parameterB);
		let valor3 = $("#valor3").val(parameterC);
		// discriminant solution
		let discriminant = Math.pow(parameterB, 2) - 4 * (parameterA) * (parameterC);
		let discri = Math.sqrt(discriminant);
		//result equation
		function solution() {
			//root1
			let root1 = (-parameterB + discri) / (2 * parameterA).toFixed(2);
			let fixed1 = root1.toFixed(2);
			let result1 = $("#result1").val(fixed1);
			//root2
			let root2 = (-parameterB - discri) / (2 * parameterA).toFixed(2);
			let fixed2 = root2.toFixed(2);
			let result2 = $("#result2").val(fixed2);
		}
		//conditional discriminant
		if (discriminant > 0) {
			solution();
		} else if (discriminant == 0) {
			solution();
		} else {
			let imaginario = "error";
			let result1 = $("#result1").val(imaginario);
			let result2 = $("#result2").val(imaginario);
		}
		parameter.preventDefault()
	});
});