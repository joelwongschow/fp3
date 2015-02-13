// Get all of our friend data
var storyData = require('../storyData.json');

exports.view = function(req, res){
	console.log(storyData);
	res.render('index', storyData);

};