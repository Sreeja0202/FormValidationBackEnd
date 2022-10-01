const express = require("express");
const cors = require("cors");
const mongoose = require("./db.js");
const userRoutes = require("./routes/user.routes.js");
const path = require("path");
const { parseArgs } = require("util");

const app = new express();

app.use(express.json());
app.use(cors());
app.use(express.static("./dist/front-end"));

app.use("/users", userRoutes);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/front-end/index.html"));
});

app.listen("3000", () => {
  console.log("Server started @ port 3000");
});
