const express = require("express")

const app = express()

// 2 params: path, callback (content of the callback is the response)
app.get("/", (req, res) => {
  // res.write("Hello World")
  // res.end()

  // equivalent to res.write() + res.end()
  // res.send("Hello World")

  // res.send() can also send an object
  // res.send({ name: "John", age: 30 })

  // res.send() can also send an array
  // res.send([1, 2, 3])

  // res.send() can also send a boolean
  // res.send(true)

  // res.send() can also send a number
  // res.send(123)

  // res.send() can also send a string
  // res.send("Hello World")

  // res.send() can also send a buffer
  // res.send(Buffer.from("Hello World"))

  // res.send() can also send a stream
  // res.send(fs.createReadStream("index.html"))

  // res.send() can also send a promise
  // res.send(Promise.resolve("Hello World"))

  // res.send() can also send a function
  // res.send(() => "Hello World")

  // res.send() can also send HTML code
  res.send(`
    <html>
      <head>  
        <title>My Page</title>
        </head>
        <body>
          <h1>Hello World</h1>
          <p>This is my page</p>
        </body>
        </html>
        `)
})

app.get("/ab?cd", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ab?cd</title>
        </head>
        <body>
          <h1>Regrex Path</h1>
          <ul>
            <li>abcd</li>
            <li>acd</li>
          </ul>
          </body>
          </html>
          `)
})

app.get('/ab/:id', (req, res) => { 
  res.send(`
    <html>
      <head>
        <title>ab:id</title>
        </head>
        <body>
          <h1>Match /ab/*****</h1>
          <ul>
            <li>ab1</li>
            <li>ab2</li>
          </ul>
          </body>
          </html>
          `)
})

app.get("/ab+cd", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ab+cd</title>
        </head>
        <body>
          <h1>Regrex Path</h1>
          <p>Multiple "b" in the path</p>
          <ul>
            <li>abcd</li>
            <li>abbbcd</li>
            <li>abbbbbbcd</li>
          </ul>
          </body>
          </html>
          `)
})

app.get("/ab*cd", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ab*cd</title>
        </head>
        <body>
          <h1>Regrex Path</h1>
          <p>Can be anything in between 'ab' and 'cd'</p>
          <ul>
            <li>abcd</li>
            <li>ab123cd</li>
            <li>abbbbbbcd</li>
            <li>abxQded2cd</li>
          </ul>
          </body>
          </html>
          `)
})

app.get("/ab(cd)?e", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ab(cd)?e</title>
        </head>
        <body>
          <h1>Regrex Path</h1>
          <p>(cd) can be there or not there</p>
          <ul>
            <li>abe</li>
            <li>abcde</li>
          </ul>
          </body>
          </html>
          `)
})

// multiple callbacks
app.get("/home", (req, res, next) => {
  console.log("The response will be sent by the next function ...")
  // validate token here ...
  // if token is valid, call next()
  next()
}, (req, res) => { 
  res.send("Hello from B!")
})

// a more tidy way to write multiple callbacks
var cb0 = function (req, res, next) {
  console.log("CB0")
  next()
}

var cb1 = function (req, res, next) {
  console.log("CB1")
  next()
}

var cb2 = function (req, res) {
  res.send("Hello from C!")
}

app.get("/example/c", [cb0, cb1, cb2])

// route handlers
app.get("/example/d", [cb0, cb1], (req, res, next) => {
  console.log("the response will be sent by the next function ...")
  next()
}, (req, res) => {
  res.send("Hello from D!")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})