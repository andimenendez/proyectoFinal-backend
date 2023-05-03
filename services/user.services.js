const User = require("../models/user.model");

const obtenerUsuarioPorId = async (id) => {
  return await User.find({ _id: id });
};

const buscarPorEmail = async (email) => {
  return await User.findOne({ email });
};

const crearUsuarios = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const editarUsuarios = async (id, userData) => {
  console.log(id);
  console.log(userData);
  return User.findByIdAndUpdate(id, userData);
};

const eliminarUsuario = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  obtenerUsuarioPorId,
  crearUsuarios,
  editarUsuarios,
  eliminarUsuario,
  buscarPorEmail,
};
