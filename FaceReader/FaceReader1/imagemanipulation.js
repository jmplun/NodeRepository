


var request = require('request');

request.post(
    'http://www.yoursite.com/formpage',
    { form: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);


config.rekognition.hosturl = 'http://rekognition.com/func/api/?';
config.rekognition.api_key ='D5GPzkeu749ekr3t';
config.rekognition.api_secret ='wyU72SWo7N9gk9HN';


module.exports