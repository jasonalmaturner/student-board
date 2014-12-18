angular.module('studentBoard')
.service('authService', function($http){
	this.login = function(){
		return $http({
			method: 'POST',
			data: {}
		})
	}
})