const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const oracledb = require('oracledb');

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
}); 

app.use(bodyParser.json());


// database
//const db = require("./models");
//const Role = db.role;

//db.sequelize.sync();
// force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => { console.log('Drop and Resync Database with { force: true }');initial();});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "test" });
});

app.use(cors());
//require('./routes/auth.routes')(app);
//require('./routes/user.routes')(app);
//require("./routes/customer.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "admin"
  });

 /*  Role.create({
    id: 2,
    name: "mod"
  }); */

  Role.create({
    id: 2,
    name: "user"
  });
}