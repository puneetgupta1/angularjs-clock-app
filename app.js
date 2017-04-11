var app = angular.module("ClockApp", []);

app.controller('ClockCtrl', ['$scope', function($scope){
	var currentTime = new Date();
	$scope.datetime = currentTime.toTimeString();
	$scope.userName = "";
	$scope.updateTime = function() {
		var currentTime = new Date();
		$scope.datetime = currentTime.toTimeString();
	}
}])