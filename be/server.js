import express from 'express';
import cors from 'cors';
import connection from "./db.js"

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Server run : http://localhost:${port}/`)
})

app.get('/', (req, res) =>{
    res.send( { test: 'Server Response Success' } );
})

app.get('/team', (req, res) =>{
    connection.query('select * from team').then(team => {
      console.log(team)
      res.send(team)
    })
})

app.use(cors({
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
}))

app.use(express.urlencoded({ extended: true }))



