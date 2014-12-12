angular.module('studentBoard')
.controller('studentsCtrl', function($scope, $routeParams){
	$scope.cohort = $routeParams;
	if ($routeParams.course === 'web-dev') $scope.cohort.course = 'Web Development';
	else if ($routeParams.course === 'ios') $scope.cohort.course = 'iOS';

	if ($routeParams.type === 'immersive') $scope.cohort.type = 'Immersive';
	else if ($routeParams.type === 'after-hours') $scope.cohort.type = 'After Hours';
})