const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const connection = require('./config/connection')


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
require("./controller/htmlController")(app);
require("./controller/payrollController")(app);
require("./controller/employeeController")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

connection.connect((err) => {
  if (err) throw err;
  
});
