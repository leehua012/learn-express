const express = require('express');
const app = express();

// setup the server to parse the body of the request (post)
// it should be done before the routes
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded => username=xxx&pwd=yyy
app.use(express.json()) // parse application/json => {"username": "xxx", "pwd": "yyy"}

app.get("/login", (req, res) => {
    console.log("==============================")
    console.log("Query parameters:", req.query);
    console.log("username:", req.query.username);
    console.log("password:", req.query.pwd);
    console.log("==============================")
    res.send(`
        <html>
            <head>
              <title>GET /login</title>
              </head>
              <body>
                <h1>Login</h1>
                <form action="/login" method="post">
                <label for="username">Username</label><br />
                  <input type="text" name="username" placeholder="username" /><br />
                    <label for="pwd">Password</label><br />
                  <input type="password" name="pwd" placeholder="password" /><br /><br />
                  <input type="submit" value="Login" />
                  </form>
                  </body>
                  </html>`);
});

app.post("/login", (req, res) => {
    console.log("==============================")
    console.log("Query parameters:", req.bosy);
    console.log("username:", req.body.username);
    console.log("password:", req.body.pwd);
    console.log("==============================")
    res.send(`
    <html>
        <head>
            <title>POST /login</title>
        </head>
        <body>
            <h1>POST /login</h1>
            <p>username: ${req.body.username}</p>
            <p>pwd: ${req.body.pwd}</p>
        </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});