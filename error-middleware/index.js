const express = require("express")
const app = express()
const indexRouter = require("./router/indexRouter")
const loginRouter = require("./router/loginRouter")

app.use(function(req, res, next){
  console.log("====================================")
  console.log("Time: ", new Date().toLocaleDateString())
  console.log("Request URL: ", req.originalUrl)
  console.log("Request Type: ", req.method)
  console.log("Request IP: ", req.ip)
  console.log("====================================")

  console.log("Token Validation ...")

  next()
})

app.use("/", indexRouter)
app.use("/login", loginRouter)


// it should be the last middleware
app.use ((req, res) => {
  console.log("====================================")
  console.log("Time: ", new Date().toLocaleDateString())
  res.status(500).send('INTERNAL SERVER ERROR !')
  console.log("====================================")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})