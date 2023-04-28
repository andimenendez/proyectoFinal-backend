const User = require("../models/user.model");

const obtenerUsuarioPorId = async (id) => {
  return await User.find({ _id: id });
};

const buscarPorEmail = async (email) => {
  return await User.find({ email: email });
};

const crearUsuarios = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const editarUsuarios = async (id, userData) => {};

const eliminarUsuarios = async (id) => {
  return await User.deleteOne({ _id: id });
};

module.exports = {
  obtenerUsuarioPorId,
  crearUsuarios,
  editarUsuarios,
  eliminarUsuarios,
  buscarPorEmail,
};
