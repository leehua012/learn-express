const express = require("express")

const router = express.Router()

// router level middleware
router.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Login</title>
        </head>
        <body>
          <h1>Login</h1>
          </body>
          </html>
          `)
})

router.get("/forget", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Forgot Password</title>
        </head>
        <body>
          <h1>Forgot Password</h1>
          </body>
          </html>
          `)
})

module.exports = router