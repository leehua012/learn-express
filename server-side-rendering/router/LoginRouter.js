const express = require("express")

const router = express.Router()

// router level middleware
router.get("/", (req, res) => {
  console.log(req.query)
  res.render("login", { title: "Login" })
})

router.post("/", (req, res) => {
  console.log("POST /login");
  // console.log(req.body);
  if(req.body.username === "admin" && req.body.password === "123456"){
    console.log("Login success");
    // res.redirect("/data.html");
    res.render("index", { title: "Login-Success", login: true, user: [req.body] })
  } else {
    console.log("Login failed");
    res.render("login", { title: "Login-Try Again" })
  }
  // res.send(`
  //     <html>
  //         <head>
  //           <title>POST /login</title>
  //         </head>
  //         <body>
  //           <h1>POST /login</h1>
  //           <p>username: ${req.body.username}</p>
  //           <p>pwd: ${req.body.password}</p>
  //           <p><a href="/data.html">Data</a></p>
  //           <p><a href="/">Back</a></p>
  //         </body>
  //     </html>`);
});

module.exports = router