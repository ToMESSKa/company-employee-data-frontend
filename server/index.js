const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

// setup multer for file upload
var storage = multer.diskStorage({
  destination: "./build/files",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
// serving front end build files
app.use(express.static(__dirname + "/../build"));

// route for file upload
app.post("/api/uploadfile", upload.single("myFile"), (req, res, next) => {
  console.log(req.file.originalname + " file successfully uploaded !!");
  res.sendStatus(200);
});

app.get("/resume", (req, res) => {
  const options = {
    root: path.join("./build/files"),
  };
  const fileName = "resume.pdf";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(3000, () => console.log("Listening on port 3000"));