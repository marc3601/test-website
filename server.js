const express = require("express");
const app = express();
const ip = process.env.IP || "localhost";
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");
const enforce = require("express-sslify");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const { hostname } = require("os");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

//ROUTES --------------------------------------------------------

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", function (req, res) {
  res.send("api");
});

let Logs = [];

const readDirectory = (req, callback) => {
  fs.readdir("./public/uploads", function (err, items) {
    if (items !== undefined) {
      const links = items.map((item) => {
        return {
          musicSrc: "http://" + req.headers.host + "/uploads/" + item,
          name: item,
        };
      });
      Logs.push(links);
      callback(Logs);
      Logs = [];
    } else {
      return {};
    }
  });
};

app.get("/data", (req, res) => {
  readDirectory(req, (logFiles) => {
    res.send({ files: { ...logFiles } });
  });
});

const fileStorageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/uploads");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "audio/mpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only audio files allowed"));
    }
  },
});

app.post("/data", upload.single("song"), (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://${ip}:${port}`);
});
