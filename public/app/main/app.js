angular.module('studentBoard', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/login', {
		templateUrl: '/app/views/login/login.html',
		controller: 'loginCtrl'
	})
	.when('/courses', {
		templateUrl: '/app/views/courses/courses.html',
		controller: 'coursesCtrl'
	})
	.when('/courses/:course', {
		templateUrl: '/app/views/students/students.html',
		controller: 'studentsCtrl'
	})

	$locationProvider.html5Mode(true);
})