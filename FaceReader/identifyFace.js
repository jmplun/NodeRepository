var request = require('request');
var fs = require('fs');


/* http://rekognition.com/func/api/?api_key={api_key}&api_secret={api_secret}&jobs={jobs}&urls={urls} */


request.post(
    ,config.rekognition.hosturl
    { form: { api_key : config.rekognition.api_key,
              api_secret : config.rekognition.api_secret } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);


config.rekognition.hosturl = 'http://rekognition.com/func/api/?';
config.rekognition.api_key ='D5GPzkeu749ekr3t';
config.rekognition.api_secret ='wyU72SWo7N9gk9HN';


