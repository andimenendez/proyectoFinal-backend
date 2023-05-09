const User = require("../models/user.model");

const emailValidation = async (email) => {
  const searchMail = await User.findOne({ email });

  if (searchMail) {
    throw new Error(`El mail ${email} ya se encuentra registrado`);
  }
  return false;
};

module.exports = {
  emailValidation,
};
