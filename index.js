const ping = require('ping');
 
const host = 'google.com';

setInterval(() => {
  ping.promise.probe(host)
    .then(function (res) {
        console.log(res);
    });
}, 5000);
