var App = angular.module("App",[]);

App.controller("textRevealController", function($scope){
	// create new displayText array
	$scope.displayText = [];
	//add newText to displayText array
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
