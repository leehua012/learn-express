const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('static'));

app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded => username=xxx&pwd=yyy
app.use(express.json()) // parse application/json => {"username":

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/login", (req, res) => {
    console.log("POST /login");
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.pwd);
    res.send("POST /login");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});