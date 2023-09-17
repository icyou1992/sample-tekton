
import express, { urlencoded } from 'express';
import cors from 'cors';
import { createConnection } from 'mysql';

const app = express();
const port = 8080;

let db = createConnection({
  // connectionLimit: 10,
  // acquireTimeout: 30000, //30 secs
  host: 'db-pfe-dev.cw4iktllotnd.ap-northeast-2.rds.amazonaws.com',
  user: 'pfe',
  password: 'test123!',
  database: 'demo',
  port: 3306,
});

app.use(cors({
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
}))

app.use(urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server run : http://localhost:${port}/`)
})

app.get('/', (req, res) =>{
  res.send( { test: 'Server Response Success' } );
})

app.get('/team', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  db.connect(err => {
    if(err) { console.log(err) }
    else { console.log("???") }
  })
  db.query('select * from team', (err, data) => {
    console.log(err);
    console.log(data);
    res.send(data);
  })
})





