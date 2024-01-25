const express = require("express");
const path = require("path");
const PORT = 80;

const app = express();
app.use(express.static(path.join(__dirname, '')));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  res.sendFile(__dirname + "/searchMarkup.js");
  res.sendFile(__dirname + "/index.js");
});

app.listen(PORT, () => {
  console.log(`Server1 is running on >> http://localhost:${PORT}`);
});