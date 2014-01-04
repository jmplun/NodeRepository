
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

exports.addimage = function(db,targetPath) {

	   var formidable = require('formidable');
	   var fs = require('fs-extra');
	   var util = require('util');

	return function(req,res) {
		//console.log(req);
		var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			console.log(util.inspect({fields: fields,files: files}));
		});

		form.on('end',function(fields,files){
			/* temoporary location of uploaded file */
		   var tempPath = this.openedFiles[0].path;

		   /* file name of uploaded file */
		   var fileName = this.openedFiles[0].name;
		   // insert into 
		   var recordId;

		    var collection = db.get('imagecollection');

		    collection.insert({
		    	"imagename" : fileName,
		    	"imagepath" : targetPath + fileName
		    }),function (err,doc){
		    	if (err){
		    		res.send("There was a problem adding information to the database");
		    	} else
		    	{
				console.log('success loaded');
				recordId =collection.id();
				res.send(doc);
				console.log(doc);
				console.log (recordId );

		    	}
		    }
		    console.log('inserted' + collection.id());

			
		   // location to where we want to copy the file
		   fs.copy(tempPath,targetPath + fileName,function(err){
		      if (err) {
		      	console.error(err);
		      } else {
		      	console.log("success!");
		      	res.location("imageupload");
		      	res.redirect("imageupload");
		      };

		   });

		});

	};
}
