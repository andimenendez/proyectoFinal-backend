const { Router } = require("express");
const route = Router();
// const { body } = require("express-validator");
const {
  getUserById,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/user.controllers");

// const { emailValidation } = require("../helpers/user.validations");

route.get("/get-by-id/:id", getUserById);

route.post("/create-user", createUser);

route.patch("/edit-user/:id", editUser);

route.delete("/delete-user/:id", deleteUser);

module.exports = route;
