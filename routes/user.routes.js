const { Router } = require("express");
const route = Router();
const { body } = require("express-validator");
const {
  getUserById,
  createUser,
  editUser,
  deleteUser,
  disableUser,
  recoverPass,
} = require("../controllers/user.controllers");
const { emailValidation } = require("../helpers/user.validations");
const { jwtvalidator } = require("../middleware/jwtValidation");

route.get("/get-by-id/:id", getUserById);

route.post(
  "/create-user",
  body("email")
    .isEmail()
    .withMessage("El formato de email es incorrecto")
    .not()
    .isEmpty()
    .withMessage("el campo email no puede estar vacio")
    .custom(emailValidation),
  body("password")
    .matches(/^[A-Za-z0-9]{8,16}$/)
    .withMessage("La contraseña no cumple con los requisitos"),
  body("name")
    .not()
    .isEmpty()
    .withMessage("el campo name no puede estar vacio"),
  body("lastName")
    .not()
    .isEmpty()
    .withMessage("el campo lastName no puede estar vacio"),
  body("cellphone")
    .not()
    .isEmpty()
    .withMessage("el campo cellphone no puede estar vacio")
    .matches(/^[0-9]{10,11}$/)
    .withMessage("El número de Celular no cumple los requisitos"),
  createUser
);
route.post("/recover-pass", recoverPass);

route.patch("/edit-user/:id", jwtvalidator, editUser);

route.patch("/disable-user/:id", disableUser);

route.delete("/delete-user/:id", deleteUser);

module.exports = route;
