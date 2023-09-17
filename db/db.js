import express from "express"
import axios from "axios"


const mysql = require('mysql');	// express 를 가져온 것 처럼 mysql 도 가져오자.

connection = mysql.createConnection({
    host:'db-pfe-dev.cw4iktllotnd.ap-northeast-2.rds.amazonaws.com',
    port:'3306',
    user:'pfe',
    password:'test123!',
    database:'demo',
});

module.exports = db;