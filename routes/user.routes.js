const { Router } = require("express");
const route = Router();
const { body } = require("express-validator");
const {
  getUserById,
  createUser,
  editUser,
  deleteUser,
  disableUser,
} = require("../controllers/user.controllers");

const { emailValidation } = require("../helpers/user.validations");

route.get("/get-by-id/:id", getUserById);

route.post(
  "/create-user",
  body("email")
    .isEmail()
    .withMessage("El formato de email es incorrecto")
    .notEmpty()
    .withMessage("el campo esta vacio")
    .custom(emailValidation),
  createUser
);

route.patch("/edit-user/:id", editUser);

route.patch("/disable-user/:id", disableUser);

route.delete("/delete-user/:id", deleteUser);

module.exports = route;
