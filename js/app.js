(function() {

  'use strict';

  // Module declaration and dependencies
  var app = angular.module('app', []).
  controller('datePost', function($scope) {

    $scope.postList = [];
    
    $scope.text = '';
    $scope.submit = function() {
      if ($scope.text) {
        var seconds = new Date().getSeconds();
        $scope.postList.push({text: this.text, second: seconds});
        $scope.text = '';
      }
    }

  });


})();