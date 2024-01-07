require('dotenv').config()
const express = require("express");
const app = express();
// const port = 1911;

app.get("/", (req, res) => {
  res.send("Namaskaram From Backend");
});

app.get("/akhu", (req, res) => {
  res.send("I am AkhilOP");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
