const { users } = require("../models");

const checkEmail = (email) => {
  return users.findOne({ where: { email } });
};
const creatUser = async (reqBody) => {
  return await users.create(reqBody);
};
const getUser = (id) => {
  return users.findOne({ where: { id } });
};
const updtaeToAdmin = async (id) => {
  return await users.update({ roleId: 2 }, { where: { id } });
};
module.exports = {
  checkEmail,
  creatUser,
  getUser,
  updtaeToAdmin,
};
