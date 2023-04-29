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
    .not()
    .isEmpty()
    .withMessage("el campo esta vacio")
    .custom(emailValidation),
  body("password")
    .matches(/^[A-Za-z0-9]{8,16}$/)
    .withMessage("La contraseña no cumple con los requisitos"),
  body("name"),
  body("lastName"),
  body("cellphone")
    .matches(/^[0-9]{10,11}$/)
    .withMessage("El número de Celular no cumple los requisitos"),
  createUser
);

route.patch("/edit-user/:id", editUser);

route.patch("/disable-user/:id", disableUser);

route.delete("/delete-user/:id", deleteUser);

module.exports = route;
