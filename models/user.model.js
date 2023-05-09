const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "Este campo es requerido"],
  },

  lastName: {
    type: String,
    required: [true, "Este campo es requerido"],
  },

  email: {
    type: String,
    required: [true, "Este campo es requerido"],
  },

  password: {
    type: String,
    required: [true, "Este campo es requerido"],
  },

  cellphone: {
    type: Number,
    required: [true, "Este campo es requerido"],
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("user", userSchema);
