const mongoose = require("mongoose");

const main = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/aggregate")
    .then(() => console.log("database connected"));
};

module.exports = main;
