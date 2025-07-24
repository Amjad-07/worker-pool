const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'PRIVATE_SQL_IP', // replace later
  user: 'testuser',
  password: 'testpass',
  database: 'testdb'
});

conn.connect(err => {
  if (err) throw err;
  console.log("Connected to Cloud SQL!");
  conn.end();
});
