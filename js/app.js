var App = angular.module("App",[]);

App.controller("textRevealController", function($scope){

	$scope.displayText = [];

	$scope.addOne = function(){
		var secs = new Date().getSeconds();
			if($scope.newText){
				$scope.displayText.push($scope.newText + ' - ' + secs);
				$scope.newText= '';
			} else {
				return false
			}
	};
});
