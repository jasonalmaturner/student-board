var Mongoose = require('mongoose'),
	validate = require('mongoose-validator');

var emailValidator = validate({
	validator: 'isEmail',
	message: 'is not a valid email address.'
})

var biOpts = [0, 1]

var schema = new Mongoose.Schema({
	id: { type: Number },
	session_id: { type: Number },
	password: {type: String },
	first_name: { type: String },
	last_name: { type: String },

	email: {type: String, unique: true, required: true, validate: emailValidator},
	phone: {type: String},
	age: {type: Number},
	gender: {type: String},
	address: {type: String},
	city: {type: String},
	state: {type: String},
	country: {type: String},
	zip: {type: String},

	
	referred_by_user_id: {type: Number},
	t_shirt: {type: String},


	github_url: {type: String},
	github_id: {type: String},
	github_token: {type: String},

	linkedin_url: {type: String},
	linkedin_id: {type: String},
	linkedin_token: {type: String},

	twitter_url: {type: String},
	twitter_id: {type: String},
	twitter_token: {type: String},
	twitter_secret: {type: String},


	facebook_url: {type: String},
	facebook_id: {type: String},
	facebook_token: {type: String},

	portfolio_url: {type: String},

	projectpage_url: {type: String},

	resume_url: {type: String},



	email_public: {type: Number, enum: biOpts },
	phone_public: {type: Number, enum: biOpts },
	city_public: {type: Number, enum: biOpts },
	state_public: {type: Number, enum: biOpts },
	country_public: {type: Number, enum: biOpts },
	company_public: {type: String, enum: biOpts },
	github_public: {type: String, enum: biOpts },
	linkedin_public: {type: String, enum: biOpts },
	twitter_public: {type: String, enum: biOpts },
	portfolio_public: {type: String, enum: biOpts },
	projectpage_public: {type: String, enum: biOpts },
	resume_public: {type: String, enum: biOpts },
	facebook_public: {type: String, enum: biOpts },


	sales_pitch: {type: String},
	job_status: {type: String, enum: [1, 2, 3]},
	company_name: {type: String}

})

module.exports = Mongoose.model('Student', schema)