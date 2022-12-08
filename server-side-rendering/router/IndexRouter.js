const express = require("express")

const router = express.Router()

// router level middleware
router.get("/", (req, res) => {
  res.render("index", { title: "Home", login: false, user: [] })
})

router.get("/about", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>About</title>
        </head>
        <body>
          <h1>About</h1>
          </body>
          </html>
          `)
})

module.exports = router