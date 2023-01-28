const { users } = require("../models");

const gatUser = async (id) => {
  return await users.findOne({ where: { id } });
};

module.exports = { gatUser };
