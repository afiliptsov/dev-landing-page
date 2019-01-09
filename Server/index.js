require("dotenv").config();
const path = require("path");

const express = require("express");

const port = process.env.port || 3009;

const app = express();

app.use(express.static(`${__dirname}/../`));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.js"));
});

// app.use(express.static(`${__dirname}/../build`));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
