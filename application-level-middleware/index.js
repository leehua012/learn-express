const express = require("express")

const app = express()

// middleware function
// 3 params: request, response, next

// application level middleware
// app.use, app.get, app.post, app.put, app.delete, app.all, app.patch, app.options, app.head
var funt1 = function (req, res, next) {
  console.log("funt1")
  next()
}

var funt2 = function (req, res, next) {
  console.log("funt2")
  next()
}

var requestTime = function (req, res, next) {
  // req.requestTime = Date.now()
  req.requestTime = new Date().toLocaleString()
  next()
}

app.use(requestTime)

app.get("/", (req, res) => {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

// this middleware will be called for all routes after this
// match all routes
app.use(funt1)

// only match /home
app.use("/home", funt2)

app.get("/example", (req, res) => {
  res.send("Example")
})


app.listen(3000, () => {
  console.log("Example app listening on port 3000!")
})