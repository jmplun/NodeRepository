
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

exports.displayImages = function(imgPath){
   return function(req,res){
	   var url = require('url');
	   var fs = require('fs-extra');
	   var file = req.params.files;

	   //c31052eb-2248-4ad6-b138-237a0797c946.jpg
	   //var imgPath ='/Users/jarradplunkett/documents/development/node_1/noderepository/FaceReader/FaceReader1/uploads//thumbs/';
	   var imgPathFinal = imgPath + file;
	   var img = fs.readFileSync(imgPathFinal);
	   res.writeHead(200, {'Content-Type': 'image/gif' });
	   res.end(img, 'binary');
	};
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
	res.render('imageupload', {title: 'Upload New Image' });
};

exports.imagelist = function(db) {
	return function(req,res){
		var collection = db.get("imagecollection");
		collection.find({},{},function(e,docs){
			res.render('imagelist', {
				"imagelist" : docs
			});
		});

	}
}

exports.addimage = function(db,targetPath) {

	   var formidable = require('formidable');
	   var fs = require('fs-extra');
	   var util = require('util');

	   var uuid = require('node-uuid');
	   var uniqueFileName = uuid.v4();

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


		    var collection = db.get('imagecollection');
		    var path = require('path');
            var newFileName = uniqueFileName + path.extname(fileName);
            var tmpThumbs = targetPath + "/thumbs/" + newFileName;

		    collection.insert({
		    	"imagename" : fileName,
		    	"uniquefilename" : newFileName,
		    	"imagepath" : targetPath + newFileName,
		    	"thumbspath" : tmpThumbs
		    }),function (err,doc){

		    	if (err){
		    		res.send("There was a problem adding information to the database");
		    	} else
		    	{
				

		    	}
		    }

			
		   // location to where we want to copy the file
		   fs.copy(tempPath,targetPath + newFileName,function(err){
		    	// write file to thumbnnails file and reise
		   	 var easyImg = require("easyimage");
		   	 easyImg.resize( 
		   	 {
		   	 	src:targetPath + newFileName,
		   	 	dst:tmpThumbs,
		   	 	width:200,
		   	 	height:200
		   	 },
		   	 function(err,image) {
		   	 	if (err) {
		   	 		console.log(err);
		   	 	}

		   	 }

		   	 	);


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
