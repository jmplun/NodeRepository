var request = require('request');
var fs = require('fs');


/* http://rekognition.com/func/api/?api_key={api_key}&api_secret={api_secret}&jobs={jobs}&urls={urls} */


request.post(
    ,config.rekognition.hosturl
    { form: { api_key : config.rekognition.api_key,
              api_secret : config.rekognition.api_secret,
              jobs:'face_part_emotion',
              base64: buff} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);


config.rekognition.hosturl = 'http://rekognition.com/func/api/?';
config.rekognition.api_key ='D5GPzkeu749ekr3t';
config.rekognition.api_secret ='wyU72SWo7N9gk9HN';

http://rekognition.com/func/api/?api_key=1234&api_secret=5678&jobs=face_part&urls=http://farm3.static.flickr.com/2566/3896283279_0209be7a67.jpg


http://localhost:3000/uploads/thumbs/899684e7-7a7e-4886-bda6-6e93b5f2678f.jpg

