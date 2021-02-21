const express = require("express");
const app = express();
const ip = process.env.IP || "localhost";
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");
const enforce = require('express-sslify');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(enforce.HTTPS({ trustProtoHeader: true }))

//ROUTES --------------------------------------------------------

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.resolve("build/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://${ip}:${port}`);
});
