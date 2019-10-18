const express = require("express");
const logger = require("morgan");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/index.js");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//logger
// app.use(logger("dev"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || process.env.MLAB_DB);

app.listen(PORT, function() {
  console.log("App is listening at PORT:", PORT);
});
