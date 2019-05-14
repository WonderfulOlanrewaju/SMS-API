const Nexmo = require('nexmo');
require('dotenv');
const nexmo = new Nexmo({
    apiKey: proccess.env.apiKey, 
    apiSecret: proccess.env.apiSecret,
});

const from = 'Boye-SMS';
const to = '2348169199932' && '2349028320494' ;
const text = 'Evening! awesome from SMS-Hub Buy one car and get two free on freecardealer.com';
nexmo.message.sendSms(from, to, text)