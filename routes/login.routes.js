const { Router } = require("express");
const route = Router();
const { login } = require("../controllers/login.controllers");

route.post("/", login);

module.exports = route;
