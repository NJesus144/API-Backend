require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose.set('strictQuery', false)
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
