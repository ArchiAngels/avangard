const express = require('express')
const path = require("path");
const mysql = require("mysql");
const app = express()
const port = 3001

// var con = mysql.createConnection({
//   host: "sql203.infinityfree.com",
//   user: "if0_38650905",
//   password: "iqIy33NNMqYl",
//   port:3306
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

const links = {
    main: path.join(__dirname,"./routes/main.html"),
    students: path.join(__dirname,"./routes/students.html"),
    lectors: path.join(__dirname,"./routes/lectors.html"),
}

app.use(express.static('routes'))

app.get('/', (req, res) => {
  res.sendFile(links.main);
})

app.get('/students', (req, res) => {
    res.sendFile(links.students);
})

app.get('/lectors', (req, res) => {
    res.sendFile(links.lectors);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})