const { history } = require("../models");

const create = async (reqBody) => {
  return await history.create({
    createdBy: reqBody,
  });
};
const updateBy = async (reqBody, id) => {
  return await history.update(
    {
      updatedBy: reqBody,
    },
    { where: { id } }
  );
};
const deleteBy = async (reqBody, id) => {
  return await history.update(
    {
      deletedBy: reqBody,
    },
    { where: { id } }
  );
};

module.exports = { create, updateBy, deleteBy };
