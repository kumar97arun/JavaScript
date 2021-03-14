
var url = 'https://logger.io/log';

function log(message){
    // send https request
    console.log(message);
}

module.exports = log;
//module.exports.endpoints = url;// just importing the url with other name [Just want to keep the url private so not exporting]

