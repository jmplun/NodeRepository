var config = {}

config.database = {};
config.rekognition ={};

// mongodb database settings
config.database.host = 'localhost:27017/nodetest1';
config.database.user = 'username';

config.rekognition.hosturl = 'http://rekognition.com/func/api/?';
config.rekognition.api_key ='D5GPzkeu749ekr3t';
config.rekognition.api_secret ='wyU72SWo7N9gk9HN';

// rekogntion api settings
module.exports = config;
