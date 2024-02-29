const express = require("express");
const path = require("path");
const PORT = 80;

const app = express();
app.use(express.static(path.join(__dirname, '')));
app.get(("/", "/search"), (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/detail/", (req, res) => {
  console.log("/detail/");
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server1 is running on >> http://localhost:${PORT}`);
});