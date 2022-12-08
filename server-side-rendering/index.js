const express = require('express');
const app = express();
// const ejs = require('ejs');
const IndexRouter = require("./router/IndexRouter");
const LoginRouter = require("./router/LoginRouter");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.static('static'));

app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded => username=xxx&pwd=yyy
app.use(express.json()) // parse application/json => {"username": "xxx", "pwd": "yyy"}

app.use("/", IndexRouter)
app.use("/login", LoginRouter);

app.get("/data", (req, res) => {
    res.send([1, 2, 3]);
});

app.use((req, res) => {
    res.status(404).send(`
        <html>
            <head>
              <title>404</title>
            </head>
            <body>
              <h1>404</h1>
              <p>Page not found</p>
              <p><a href="/">Back</a></p>
            </body>
        </html>`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});