angular.module('studentBoard')
.controller('cohortsCtrl', function($scope, dataService, $location){
	$scope.cohorts = dataService.getCohorts();

	$scope.go = function(course, type){
		if(course === 'Web Development') course = 'web-dev';
		else if (course === 'iOS') course = 'ios';

		if(type === 'Immersive') type = 'immersive';
		else if (type === 'After Hours') type = 'after-hours';
		
		$location.path('/cohorts/' + course).search('type', type);
	}
})