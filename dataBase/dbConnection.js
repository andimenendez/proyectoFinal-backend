const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.URL_DB);
    console.log("Estamos conectados a la db");
  } catch (error) {
    console.log(error);
  }
};

dbConnection();
