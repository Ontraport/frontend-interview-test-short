
function textRevealController($scope){
	
	$scope.displayText = [];

	$scope.addOne = function(){
		//get seconds
		var date = new Date();
		var secs = date.getSeconds();
		//push thoughts to displayText array
		if($scope.newText){
		$scope.displayText.push($scope.newText + ' - ' + secs);
		$scope.newText= '';
		}
	};

 }
