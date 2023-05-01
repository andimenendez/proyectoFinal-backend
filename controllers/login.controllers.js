const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const searchMail = await User.findOne({ email });

    if (searchMail) {
      const match = bcrypt.compareSync(password, searchMail.password);
      if (match) {
        return res.status(200).json("Logueo con éxito");
      }
      res.status(401).json("Usuario o contraseña incorrecto.");
    } else {
      res.status(404).json("Usuario o contraseña incorrecto.");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
};
