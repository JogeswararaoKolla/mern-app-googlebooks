const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log("App is listening at PORT:", PORT);
});

app.get("/", function(req, res) {
  res.send("Hello Welcome to Express");
});
