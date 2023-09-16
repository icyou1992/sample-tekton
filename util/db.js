const mysql = require('mysql');	// express 를 가져온 것 처럼 mysql 도 가져오자.
connection = mysql.createConnection({
    host:'RDS의 엔드포인드',
    port:'RDS의 포트',
    user:'RDS의 마스터 사용자 이름',
    password:'RDS의 마스터 사용자 비밀번호',
    database:'데이터베이스 이름',		// RDS 데이터베이스 식별자가 아님.
});
