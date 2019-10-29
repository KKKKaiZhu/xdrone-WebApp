const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 8080;

app.use(bodyParser.json());

if (process.env.MODE === "dev") {
  const cors = require("cors");
  app.use(cors());
}

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// COURSES
const courses = require("./courses/courses.js")(app);

// DRONE
const drone = require("./drone/drone.js")(app);

app.use("/", express.static(path.resolve("../dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
