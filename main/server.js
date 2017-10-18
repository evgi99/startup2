/**
 * Created by Evgi on 10/18/2017.
 */
const express = require("express")
const fs = require("fs")

const app = express();

app.use(express.static("main"));
app.use(express.static("dist"));

app.use((req, res , next) => {
    console.log(req.url);
    next();
});

app.listen(5000);
console.log("Listening on localhost:5000 ...")