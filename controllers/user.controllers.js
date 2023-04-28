//Logica de negocio
const {
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  crearUsuarios,
  editarUsuarios,
  eliminarUsuarios,
  buscarPorEmail,
} = require("../services/user.services");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const idExist = await obtenerUsuarioPorId(id);
    console.log(idExist);
    if (idExist.length === 0) {
      res.status(404).json("no se encontro el usuario");
      return;
    }
    res.status(200).json(idExist);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const emailExist = await buscarPorEmail(user.email);
    if (emailExist.length === 0) {
      const newUser = await crearUsuarios(user);
      res.status(201).json(newUser);
      return;
    }
    res.status(400).json("El usuario ya se encuentra registrado.");
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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const idExist = await obtenerUsuarioPorId(id);
    if (idExist.length === 0) {
      res.status(404).json("no se encontro el usuario");
      return;
    }
    const deleteUserById = await eliminarUsuarios(id);
    res.status(200).json("se elimino el usuario");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
