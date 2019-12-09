const bcrypt = require("bcryptjs");
const users = require("../models/user");

encryptPassword = async password => {
  return bcrypt.hashSync(password, 10);
};

decryptPassword = async (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = { encryptPassword, decryptPassword };
