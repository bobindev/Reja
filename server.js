console.log("Starting Web Server");

const express = require('express');
const app = express();
const http = require('http')

//1 - express ga kirib kelishga bog'liq kodlar
app.use(express.static("public"));
app.use(express.json()); // kirib kelayotgan json formatdagi data ni object holatida bizga o'girib beradi
app.use(express.urlencoded({ extended: true })); //html formdan post qilingan narsalarni express server qabul qilishi un xizmat qiladi

//2: Session

//3 ejs- backendda frontendni yasash uchun xizmat qiladigan muhit  (npm i ejs). View codes

app.set("views", "views");
app.set('view engine', 'ejs');

//4 - Routing codes
app.get("/hello", function (req, res) {
    res.end(`<h1>HELLO WORLD by BobTech</h1>`)
});

app.get("/gift", function (req, res) {
    res.end(`<h1>You are at gifts department !</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfullu on port: ${PORT}`);
});