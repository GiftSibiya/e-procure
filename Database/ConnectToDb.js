require("dotenv").config();
const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.SERVER_MONGODB_URI);
    console.log("Connected to mongo");
  } catch (err) {
    console.log(err);
  }
}
module.exports = connectToDb;
