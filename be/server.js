
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyparser = require("body-parser");

const dbConfig = require("./config.js");

const app = express();
const port = 8080;

var connection = mysql.createConnection(dbConfig)

connection.connect(err => {
  if(err) console.log(err)
  else console.log("connected to db")
})

app.use(cors({
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
}))

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.listen(port, () => {
    console.log(`Server run : http://localhost:${port}/`)
})

app.get('/', (req, res) =>{
  res.send( { test: 'Server Response Success' } );
})


app.get('/team', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  
  connection.query("select * from team;", (err, data) => {
    console.log(data)

    res.send(data)
  })
})


app.post('/team', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req)
  connection.query(`insert into team (name, phone) values (?, ?);`, [req.body.name, req.body.phone], (err, rows, fields) => {
    res.send(rows)
  })
})


