const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const {
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  crearUsuarios,
  editarUsuarios,
  eliminarUsuario,
  buscarPorEmail,
  obtenerUsuarioPorNombre,
} = require("../services/user.services");

const getAllUser = async (req, res) => {
  try {
    const resp = await obtenerTodosLosUsuarios();
    if (!resp) {
      res.status(404).json("no hay usuarios");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const resp = await obtenerUsuarioPorId(id);
    if (!resp) {
      res.status(404).json("no se encontro el usuario");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserByName = async (req, res) => {
  try {
    const { name } = req.params;
    const resp = await obtenerUsuarioPorNombre(name);
    if (!resp) {
      res.status(404).json("no se encontro el usuario");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const saltRound = bcrypt.genSaltSync(10);
    const userData = req.body;
    const email = userData.email;
    userData.password = bcrypt.hashSync(userData.password, saltRound);
    const newUser = await crearUsuarios(userData);

    res.status(201).json({
      msg: "Te registraste exitosamente, ya puedes iniciar sesión!👋",
      newUser,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const resp = await editarUsuarios(id, userData);

    if (!resp)
      return res.status(404).json({
        msg: "Ups.. algo fallo, intentelo más tarde",
        msgDev: "usuario no encontrado",
      });

    res.status(200).json({ msg: "modificado con exito", resp });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const editUserMail = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;

    const saltRound = bcrypt.genSaltSync(10);
    userData.password = bcrypt.hashSync(userData.password, saltRound);

    const resp = await editarUsuarios(id, userData);

    if (!resp)
      return res.status(404).json({
        msg: "Ups.. algo fallo, intentelo más tarde",
        msgDev: "usuario no encontrado",
      });

    res.status(200).json({ msg: "modificado con exito", resp });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const recoverPass = async (req, res) => {
  try {
    const { email, password } = req.body;
    const resp = await buscarPorEmail(email);
    console.log(password);
    if (!resp)
      return res.status(404).json({
        msg: "Ups.. algo fallo, contacte al Administrador",
        msgDev: "usuario no encontrado",
      });

    const { id } = resp;
    const userData = { password };

    const saltRound = bcrypt.genSaltSync(10);
    userData.password = bcrypt.hashSync(userData.password, saltRound);

    const sendPass = await editarUsuarios(id, userData);
    res.status(200).json({ msg: "Eviado con exito" });
  } catch (error) {
    res.status(500).json({ msg: "fallo", mdgDev: error.message });
  }
};

const disableUser = async (req, res) => {
  try {
    const { id, disabled } = req.params;

    const resp = await editarUsuarios(id, { disabled });
    console.log(disabled);
    if (!resp) return res.status(404).json("Usuario no encontrado");

    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const isAdministrator = async (req, res) => {
  try {
    const { id, isAdmin } = req.params;
    console.log(isAdmin);
    const resp = await editarUsuarios(id, { isAdmin });
    if (!resp) return res.status(404).json("Usuario no encontrado");

    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await eliminarUsuario(id);
    if (!resp) {
      res.status(404).json("no se encontro el usuario");
      return;
    }
    res.status(200).json("se elimino el usuario");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllUser,
  getUserById,
  getUserByName,
  createUser,
  editUser,
  editUserMail,
  disableUser,
  deleteUser,
  recoverPass,
  isAdministrator,
};
