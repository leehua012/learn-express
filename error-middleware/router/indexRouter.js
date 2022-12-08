const express = require("express")

const router = express.Router()

// router level middleware
router.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Home</title>
        </head>
        <body>
          <h1>Home</h1>
          </body>
          </html>
          `)
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