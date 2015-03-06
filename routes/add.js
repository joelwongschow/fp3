var data = require("../storyData.json");

exports.addStory = function(req, res) {
	console.log(data);
	res.render('add', data);

	var newStory = new Object();
	newStory.title = req.query.title;
	newStory.location = req.query.location;
	newStory.story = req.query.story;
	newStory.imageURL = "http://lorempixel.com/400/200/city";

	data["stories"].push(newStory);
}
