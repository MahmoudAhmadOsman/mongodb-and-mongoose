const mongoose = require('mongoose');
const post = mongoose.Schema;


let postSchema = new mongoose.Schema({
	title:{
		type:String,
		require: true
	},

	body:{
		type:String,
		require: true
	},

	author:{
		type:String
	},


	url:{
		type:String
	},

	date:{
		type: Date, default: Date.now

	}

});

//export this modal so that you can use it on other files
const postmodel = module.exports = mongoose.model('Post', postSchema );