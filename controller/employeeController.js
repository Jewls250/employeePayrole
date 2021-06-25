const express = require("express");
const connection = require("../config/connection");

module.exports = (app) => {
  // Create all our routes and set up logic within those routes where required.
  //   app.get("/", (req, res) => {
  //     cat.all((data) => {
  //       const hbsObject = {
  //         cats: data,
  //       };
  //       console.log(hbsObject);
  //       res.render("index", hbsObject);
  //     });
  //   });

  app.post("/api/employee", (req, res) => {
    const query = connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        age: req.body.age,
        id_number: req.body.employeeid,
        email: req.body.email,
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} product inserted!\n`);
      }
    );

    // logs the actual query being run
    console.log(query.sql);
  });

  // app.put("/api/cats/:id", (req, res) => {
  // const condition = `id = ${req.params.id}`;

  // console.log("condition", condition);

  // cat.update(
  //     {
  //     sleepy: req.body.sleepy,
  //     },
  //     condition,
  //     (result) => {
  //     if (result.changedRows === 0) {
  //         // If no rows were changed, then the ID must not exist, so 404
  //         return res.status(404).end();
  //     }
  //     res.status(200).end();
  //     }
  // );
  // });
};
