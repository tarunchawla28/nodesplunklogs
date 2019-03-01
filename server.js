'use strict';

const express = require('express');
//const logger = require('./logger').logger;
var SplunkLogger = require("splunk-logging").Logger;

// Constants
const PORT = 3008;
const HOST = '127.0.0.1';

//configuring splunk
var config = {
    token: "41e5eb28-6bbd-4cb9-ba84-c0c3fd4ab418",
    url: "https://input-prd-p-bbf4wqlthvsb.cloud.splunk.com:8088"
};

var Logger = new SplunkLogger(config);


// App
const app = express();
app.get('/', (req, res) => {
    //logger.debug({ req: req.originalUrl, method: req.method }, 'Received a Request');
    //logger.info({ req: req.originalUrl, method: req.method, resStatus: res.statusCode }, 'Sending Response');
    Logger.send({ req: req.originalUrl, method: req.method, message: 'Received a Request' }, function (err, resp, body) {
    });
    Logger.send({ req: req.originalUrl, method: req.method, resStatus: res.statusCode, message: 'Sending Response' }, function (err, resp, body) {
    });

    //logger.error('There was no Error');
    res.send('Welcome Tarun Family to Fargate world!!! !Running Internal Application!!..\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
