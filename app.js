const express = require("express");
const app = express();
const port = 8080;

const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then((res) => console.log("Connected to DB."))
  .catch((err) => console.log("errors occured", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("This is the base root page");
});

app.listen(port, () => {
  console.log("Listening to port 8080");
});
