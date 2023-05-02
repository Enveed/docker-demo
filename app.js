const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker Demo!");
});

const server = app.listen(3000, () => {
  console.log("App is currently running on Port 3000!");
});
