const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;

const conn = mongoose.createConnection(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

conn.on("connected", function () {
  console.log("Mongo connected: " + this.name);
});

conn.on("disconnected", function () {
  console.log("Mongo disconnected: " + this.name);
});

conn.on("error", function (err) {
  console.log("Mongo connect error" + JSON.stringify(err));
});

process.on("SIGINT", async () => {
  await conn.close();
  process.exit(0);
});

module.exports = conn;
