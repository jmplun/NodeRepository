
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.helloworld = function(req, res){
	res.render('helloworld', { title: 'Hello, World'});
};

exports.userlist = function(db) {
	return function(req,res) {
		var collection = db.get('usercollection');
		collection.find({},{},function(e,docs){
			res.render('userlist', {
				"userlist" : docs
			});
		});
	};
};


exports.newuser = function(req, res){
	res.render('newuser', { title: 'Add New User'});
};


exports.adduser = function(db){
	return function(req,res) {
		//get form values. 
		var userName = req.body.username;
		var userEmail = req.body.useremail;

		// set our collection that we will be inserting into
		var collection = db.get('usercollection');

		// submit new entey to the database
		collection.insert({
			"username" : userName,
			"email" : userEmail
		}, function (err,doc) {
			if (err) {
				// if it failed return error
				res.send("There was a problem adding information to the database");
			}
			else {
				// if it worked set he header so the address bar doens't still say adduser
				res.location("userlist");
				// and forward to success page
				res.redirect("userlist");
			}
		});
	};
};


exports.imageupload = function(req,res){
	res.render('imageupload', {title: 'Upload New Image'});
};

exports.addimage = function(db) {
	return function(req,res) {
		var fs = require('fs');
		var tmpText = "Successfully Called upload Image man"
		tmpText = tmpText + " test Append"
		console.log(req);
		var tmpPath = req.body.imagename;
		var targetPath = '/uploads/' + req.body.userimage.path;
		res.send(tmpText + tmpPath + " " + targetPath);
	};
}
/*	var fs = require('fs');

	return function(req, res){
		var tmpPath = req.files.userimage.path;
		var targetPath = '/uploads/' + req.files.userimage.name;

		fs.rename(tmpPath,targetPath,function(err){
			if (err) throw err;

			//delete temporary file 
			fs.unlink(tmpPath,function(){
				if (err) throw err;


			});


		});


	};

};
*/