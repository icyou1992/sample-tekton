const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.get('/', (req, res) =>{
    res.send( { test: 'Server Response Success' } );
})

app.listen(port, () => {
    console.log(`Server run : http://localhost:${port}/`)
})

app.use(cors({
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
}))

app.use(express.urlencoded({ extended: true }))



