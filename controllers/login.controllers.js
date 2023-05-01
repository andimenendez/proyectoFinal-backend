const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const searchMail = await User.findOne({ email });

    if (!searchMail)
      return res.status(401).json("Usuario o contraseña incorrecto.");
    const match = bcrypt.compareSync(password, searchMail.password);
    if (!match) return res.status(401).json("Usuario o contraseña incorrecto.");

    const payload = {
      id: searchMail.id,
      email: searchMail.email,
    };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    return res.status(200).json({ msg: "Ingresaste con exito", token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
};
