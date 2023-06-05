const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = async () => {
  return await mongoose.connect(
    process.env.NODE_ENV === "development"
      ? process.env.MONGO_URI_DEV
      : process.env.MONGO_URI
  );
};

module.exports = connectDB;
