const express = require("express");
const app = express();
require("dotenv/config");
const port = process.env.PORT;
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("../routes/user.routes");
require("../dataBase/dbConnection");

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`estamos escuchando el puerto ${port}`);
});
