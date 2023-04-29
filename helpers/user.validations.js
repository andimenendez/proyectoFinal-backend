const User = require("../models/user.model");

const emailValidation = async (email) => {
  const searchMail = await User.find({ email });
  if (searchMail.lenght !== 0) {
    throw new Error(`El mail ${email} ya se encuentra registrado`);
  }
  return false;
};

module.exports = {
  emailValidation,
};
