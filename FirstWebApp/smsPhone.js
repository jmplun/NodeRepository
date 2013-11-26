// create a twilio client
var client = require('twilio','AC521c486d83786f933dc5b91f542498af','08f85c25cf4b606e4fd159177a3cdd0d');

//Send an SMS text message
client.sendSms({

    to:'+61416219256', // Any number Twilio can deliver to
    from: '+14692426443', // A number you bought from Twilio and can use for outbound communication
    body: 'word to your mother.' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
});