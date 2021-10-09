const express = require("express");
const dotenv = require("dotenv");
const createError = require("http-errors");

const app = express();
dotenv.config();

app.get("/", (req, res, next) => {
  res.send("Homepage");
});

app.use((req, res, next) => {
  next(createError.NotFound("This route does not exist"));
});

app.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
