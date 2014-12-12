// I could also use jQuery for this task but I believe using Angular is a better solution for this project.

angular.module("displayText", [])
	.controller("submitText", function($scope) {
		$scope.outputArr = [];
		$scope.print = function() { 
			var date = new Date();
			var sec = date.getSeconds();
			var result = $scope.inputText + " - " + sec;
			$scope.outputArr.push(result);
			$scope.inputText = '';
		};
	});