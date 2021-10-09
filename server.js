const express = require("express");
const createError = require("http-errors");
const UserRoute = require("./Routes/User.route");
const app = express();

require("dotenv").config();
require("./helpers/connections_mongodb");

app.get("/", (req, res, next) => {
  res.send("Homepage");
});

app.use("/user", UserRoute);

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
