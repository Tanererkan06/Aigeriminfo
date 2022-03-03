const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.id= customer.id;
  this.result_code= customer.result_code;
  this.result_value= customer.result_value;
  this.gender= customer.gender;
  this.firstname= customer.firstname;
  this.lastname= customer.lastname;
  this.street= customer.street;
  this.postal_code= customer.postal_code;
  this.place= customer.place;
  this.email= customer.email;
  this.mobile= customer.mobile;
  this.dob= customer.dob;
  this.pob= customer.pob;
  this.test_date=customer.test_date;

};

/* Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO test_results SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
}; */

Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM test_results WHERE hash_code= ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customer.getAll = result => {
  sql.query("SELECT * FROM test_results", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


Customer.CustomerCount = (bastar,bittar,result) => {
     
  sql.query(`SELECT SUM(IF(result_value = "p", 1, 0))
  as count_positive, SUM(IF(result_value = "n", 1, 0)) as count_negative FROM test_results 
  WHERE test_date BETWEEN "${bastar}" AND "${bittar}"`, (err, res) => {

    if (err) {
       result(err, res);
      return;
    }

    if (res.length) {
       result(null, res[0]);
      // console.log(res[0]);
      return;
    }

     result({ kind: "not_found" }, null);
  });
};


Customer.Analizm = (testcode,bastar,bittar,result) => {
  console.log("bastar "+ bastar);
  console.log("bittar" + bittar);
  console.log("testcode "+ testcode);


  sql.query(
    `SELECT 
    SUM(IF(result_value = "p", 1, 0)) as count_positive, 
    SUM(IF(result_value = "n", 1, 0)) as count_negative,
    SUM(IF(result_value = "x", 1, 0)) as count_x
    FROM test_results 
    WHERE testcenter_id="${testcode}%"
    AND LENGTH(result_code)>=8 
    AND test_date BETWEEN "${bastar}" AND "${bittar}"`
  , (err, res) => {

    if (err) {

       result(err, res);
      return;
    }

    if (res.length) {
       result(null, res[0]);
       console.log(res[0]);
      return;
    }

     result({ kind: "not_found" }, null);
  });
};


/* Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE test_results SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Customer.remove = (id, result) => {
  sql.query("DELETE FROM test_results WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

Customer.removeAll = result => {
  sql.query("DELETE FROM test_results", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
}; */

module.exports = Customer;
