const { cars } = require("../models");
const { history } = require("../models");

const getCars = () => {
  return cars.findAll({
    include: {
      model: history,
    },
  });
};
const getCarsWithMember = () => {
  return cars.findAll({ attributes: { exclude: ["historyId"] } }, { where: { isActive: true } });
};
const getCarById = (id) => {
  return cars.findOne({ where: { id } });
};
const createCars = async (reqBody) => {
  return await cars.create(reqBody);
};
const updateCars = async (id, reqBody) => {
  return await cars.update(reqBody, { where: { id } });
};
const deleteCars = async (id) => {
  return await cars.update({ isActive: false }, { where: { id } });
};

module.exports = { getCars, getCarsWithMember, createCars, updateCars, deleteCars, getCarById };
