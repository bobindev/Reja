const http = require('http');

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://bob0091:WwOUbEnCWfD7p8pU@cluster0.pjg4rvq.mongodb.net/Reja";
mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
    (err, client) => {
        if (err) console.log("ERROR on connection MOngoDB");
        else {
            console.log("MongoDB connection succeed!");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 7007;
            server.listen(PORT, function () {
                console.log(`The server is running successfullu on port: ${PORT}, http://localhost:${PORT}`);
            });
        }
    });
