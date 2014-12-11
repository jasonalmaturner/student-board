angular.module('studentBoard', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/login', {
		templateUrl: '/app/views/login/login.html',
		controller: 'loginCtrl'
	})

	$locationProvider.html5Mode(true);
})