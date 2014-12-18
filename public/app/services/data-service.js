angular.module('studentBoard')
.service('dataService', function(){
	var cohorts = [
	{
		course: 'Web Development',
		type: 'Immersive',
		image: 'assets/images/webdev-lappy.png',
		description: 'Students spend 12 weeks completely immersed in the cirriculum. Students learn the following technologies: HTML, CSS, JavaScript, jQuery, AngularJS, NodeJS, MongoDB.'
	},
	{
		course: 'Web Development',
		type: 'After Hours',
		image: 'assets/images/webdev-lappy.png',
		description: 'Students spend 12 weeks learning part-time to code. Students learn the following technologies: HTML, CSS, JavaScript, jQuery, AngularJS.'
	},
	{
		course: 'iOS',
		type: 'Immersive',
		image: 'assets/images/ios-phone.png',
		description: 'Students spend 12 weeks completely immersed in the cirriculum. Students learn the following technologies: xCode, Swift, App Store Deployment.'
	},
	{
		course: 'iOS',
		type: 'After Hours',
		image: 'assets/images/ios-phone.png',
		description: 'Students spend 12 weeks learning part-time to code. Students learn the following technologies: xCode, Swift, App Store Deployment.'

	}
	];

	this.getCohorts = function(){
		return cohorts;
	}
})