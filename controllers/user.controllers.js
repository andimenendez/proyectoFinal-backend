//Logica de negocio
const { validationResult } = require("express-validator");
const {
  obtenerUsuarioPorId,
  crearUsuarios,
  editarUsuarios,
  eliminarUsuario,
  buscarPorEmail,
} = require("../services/user.services");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
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

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const newUser = await crearUsuarios(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const resp = await editarUsuarios(id, userData);

    if (!resp) return res.status(404).json("Usuario no encontrado");

    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const disableUser = async (req, res) => {
  try {
    const { id } = req.params;
    const disable = true;
    const resp = await editarUsuarios(id, { disable });

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
  getUserById,
  createUser,
  editUser,
  disableUser,
  deleteUser,
};
