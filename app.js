console.log("Starting Web Server");

const express = require('express');
const app = express();

const fs = require("fs");

let user;
fs.readFile('database/user.json', "utf8", (err, data) => {
    if (err) {
        console.log("ERROR: ", err);
    } else {
        user = JSON.parse(data);
    }
})
//MongoDB connect
const db = require('./server').db();

//1 Kirish code -  express ga kirib kelishga bog'liq kodlar
app.use(express.static("public"));
app.use(express.json()); // kirib kelayotgan json formatdagi data ni object holatida bizga o'girib beradi
app.use(express.urlencoded({ extended: true })); //html formdan post qilingan narsalarni express server qabul qilishi un xizmat qiladi

//2: Session

//3 View codes (ejs- backendda frontendni yasash uchun xizmat qiladigan muhit  (npm i ejs)). 

app.set("views", "views");
app.set('view engine', 'ejs');

//4 - Routing codes
app.post("/create-item", (req, res) => {
    console.log("user entered / creat item");
    console.log(req.body);
    const new_reja = req.body.reja
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops);
       res.json(data.ops[0]);
        // if (err) {
        //     console.log(err);
        //     res.end('something went wrong');
        // } else {
        //     res.end('successfully added');
        // }
    });
    // code with db here
});

app.get("/author", (req, res) => {

    res.render("author", { user: user })
})
app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("Something went wrong!");
            } else {

                res.render("reja", { items: data });
            }
        });

});

module.exports = app;
