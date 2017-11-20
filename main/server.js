/**
 * Created by Evgi on 10/18/2017.
 */
const express = require("express")
const fs = require("fs")
var request = require('request');

const app = express();

app.use(express.static("main"));
app.use(express.static("dist"));

app.use((req, res , next) => {
    console.log(req.url);
    next();
});

app.get("/api/getTableData",(req,res) => {
    const result = [];

    var url = "http://services.groupkt.com/country/get/all"
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            //console.log(body) // Print the json response
            res.send(body.RestResponse)
        }
    })

    // result.push({"name" : "EVGI", "year":"2017"});
    // result.push(dataFromServer.result[0])
    // res.status(200).header("Content-Type","application/json;charset=utf-8").end(JSON.stringify(result));
})

app.listen(5000);
console.log("Listening on localhost:5000 ...")