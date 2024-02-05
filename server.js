console.log("Starting Web Server");

const express = require('express');
const app = express();
const http = require('http')

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
    console.log(req.body);
    res.json({ test: "success" });
})
app.get("/", function (req, res) {
    res.render("harid");
})
const server = http.createServer(app);
let PORT = 3003;
server.listen(PORT, function () {
    console.log(`The server is running successfullu on port: ${PORT}`);
});