const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Express here");
});
app.listen(3001, function () {
  console.log("express coms are good");
});
