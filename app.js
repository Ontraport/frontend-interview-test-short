// I could also use jQuery for this task but I believe using Angular is a better solution for this project.

angular.module("displayText", [])
	.controller("submitText", function($scope) {
		$scope.outputArr = [];
		$scope.print = function() { 
			// Calculating the seconds from browser time
			var date = new Date();
			var sec = date.getSeconds();
			// Generating the desired outcome
			var result = $scope.inputText + " - " + sec;
			// Pushing the outputs to the outputArr
			$scope.outputArr.push(result);
			// Reseting the inputText value
			$scope.inputText = '';
		};
	});