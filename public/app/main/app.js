angular.module('studentBoard', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/login', {
		templateUrl: '/app/views/login/login.html',
		controller: 'loginCtrl'
	})
	.when('/cohorts', {
		templateUrl: '/app/views/cohorts/cohorts.html',
		controller: 'cohortsCtrl'
	})
	.when('/cohorts/:course', {
		templateUrl: '/app/views/students/students.html',
		controller: 'studentsCtrl'
	})

	$locationProvider.html5Mode(true);
})