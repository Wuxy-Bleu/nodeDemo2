var express = require("express");
var app = express();
var fs = require("fs");

app.set("view engine", "ejs");

app.use("/web", express.static("./public"));

app.get("/test", function (req, res) {
    res.send("coming soon");
})

app.get('/pic', function (req, res) {

    fs.readFile("‪1.jpg", "binary", function (err, data) {

        if (err) {
            console.log(err);
            return;
        } else {
            res.write(data, "binary");
            res.end("");
        }
    });
});

app.listen(65431);