// Get all of our friend data
var storyData = require('../storyData.json');

exports.view = function(req, res){
	console.log(storyData);
	var random_num = Math.random();

  if(random_num > 0.5)
  {
    res.render("index", storyData);
  }
  else
  {
    res.render("index_alternate", storyData)
  }


};
