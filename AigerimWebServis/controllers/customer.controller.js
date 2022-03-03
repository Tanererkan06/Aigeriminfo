const Customer = require("../models/customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const customer = new Customer({
    id: req.body.id,
    /* result_code: req.body.result_code,
    result_value: req.body.result_value,
    gender: req.body.gender,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    street: req.body.street,
    postal_code: req.body.postal_code,
    place: req.body.place,
    username: req.body.username,
    mobile: req.body.mobile,
    dob: req.body.dob,
    pob: req.body.pob,
    test_date: req.body.test_date */

   });

   Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

 exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

 exports.findOne = (req, res) => {
  Customer.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};
 

