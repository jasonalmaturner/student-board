var studentService = require('../services/student-service');

module.exports.getAll = function(req, res){
	studentService.getAll()
		.then(function(students){
			res.json(students);
		}).catch(function(err){
			res.status(500).json(err);
		});
}