module.exports = app => { 
  const dbConfig = require("../config/db.config.js");
  const oracledb = require('oracledb');
 
 
 async function selectAllEmployees(req, res) {
  try {
    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    });
 
    let query = 'SELECT * FROM ng_haberler';
    // run query to get all employees
    result = await connection.execute(query);

  } catch (err) {
    //send error message
    return res.send(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
    if (result.rows.length == 0) {
      //query return zero employees
      return res.send('query send no rows');
    } else {
      //send all employees
      return res.send(result.rows);
    }

  }
}
 
app.get('/haberler', function (req, res) { 
  selectAllEmployees(req, res);
})
 
 
 

};