const express = require("express");
const connection = require("../config/connection")

module.exports = (app) => {
// Create all our routes and set up logic within those routes where required.
    app.get("/", (req, res) => {
        cat.all((data) => {
            const hbsObject = {
            cats: data,
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
        });

        app.post("/api/payroll", (req, res) => {
        const query = connection.query(
                "INSERT INTO payroll SET ?",
                {
                position: req.body.position,
                job_description: req.body.job_description,
                id_number: req.body.id_number,
                wage: req.body.wage,
                hours_worked: req.body.hours_worked,
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
}
// Export routes for server.js to use.

