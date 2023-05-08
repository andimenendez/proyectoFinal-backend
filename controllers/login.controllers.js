const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const searchMail = await User.findOne({ email });
    if (searchMail.disabled) {
      return res.status(401).json({
        msg: "Este correo se encuentra bloqueado, contacte al administrador",
      });
    }

    if (!searchMail)
      return res.status(401).json({ msg: "Usuario o contraseña incorrecto." });
    const match = bcrypt.compareSync(password, searchMail.password);
    if (!match)
      return res.status(401).json({ msg: "Usuario o contraseña incorrecto." });

    const payload = {
      id: searchMail.id,
      email: searchMail.email,
    };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      msg: "Ingresaste con exito",
      token,
      userData: {
        id: searchMail.id,
        name: searchMail.name,
        lastName: searchMail.lastName,
        email: searchMail.email,
        cellphone: searchMail.cellphone,
        isAdmin: searchMail.isAdmin,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
};
