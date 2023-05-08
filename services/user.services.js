const User = require("../models/user.model");

const obtenerTodosLosUsuarios = async (id) => {
  return await User.find({});
};

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
  return User.findByIdAndUpdate(id, userData);
};

const obtenerUsuarioPorNombre = async (name) => {
  const regex = new RegExp(name, "i");

  return await User.find({ name: { $regex: regex } });
};

const eliminarUsuario = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  crearUsuarios,
  editarUsuarios,
  eliminarUsuario,
  buscarPorEmail,
  obtenerUsuarioPorNombre,
};
