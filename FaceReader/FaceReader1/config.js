var config = {}

config.database = {};
config.rekognition ={};
config.location={};

// mongodb database settings
config.database.host = 'localhost:27017/nodetest1';
config.database.user = 'username';

config.rekognition.hosturl = 'http://rekognition.com/func/api/?';
config.rekognition.api_key ='D5GPzkeu749ekr3t';
config.rekognition.api_secret ='wyU72SWo7N9gk9HN';

config.location.imageFolder="/Users/jarradplunkett/documents/development/node_1/noderepository/FaceReader/FaceReader1/uploads/";
config.location.thumbPath="thumbs/";
// rekogntion api settings
module.exports = config;
