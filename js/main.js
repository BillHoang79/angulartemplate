var app = angular.module('app', ['controllers']);
//Wrong way to dec
// var MainController = function($scope) {
//	$scope.val = "re23"	
//	}

// app.controller('MainController', function($scope) {
//   $scope.val = "test456"
//})


//Production way to declare modules, creates dependency, be broken into own files
angular.module('controllers', []).controller('MainController', function($scope) {
	$scope.val = "test789"
})

