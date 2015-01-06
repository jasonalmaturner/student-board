var Student = require('../models/student'),
	Q = require('q');

module.exports.getAll = function(){
	var deferred = Q.defer();
	Student.find(function(err, data){
		if(err) return deferred.reject(new Error(err));
		else return deferred.resolve(data);
	});
	return deferred.promise;
}