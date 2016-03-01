angular.module('starter')
  
.controller('profileController', function($scope, $wakanda) {
	$wakanda.init().then(function(ds){
		ds.Profile.$all().$promise.then(function(data){
			$scope.profiles = data.result;
		});
	});
});