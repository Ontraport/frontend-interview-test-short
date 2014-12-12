angular.module("displayText", [])
	.controller("submitText", function($scope) {
		$scope.outputArr = [];
		$scope.print = function() { 
			var date = new Date();
			var sec = date.getSeconds();
			var res = $scope.inputText + " - " + sec;
			$scope.outputArr.push(res);
			$scope.inputText = '';
		};
	});