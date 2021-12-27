const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
}); */

//connect to database
const db = mysql.createConnection (
  {
    host: "localhost",
    //your MySQL username,
    user: "root",
    //your MYQL password
    //password: "Sequel2021",
    database: "election"
  },
);

db.connect(function(err){
  if (err) throw err;
  console.log("hello")
})
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
}); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});