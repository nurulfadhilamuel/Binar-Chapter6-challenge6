const cars = require("../services/carsService");

const getCarsWithMember = async (req, res) => {
  try {
    const car = await cars.getCarsWithMember();
    res.status(200).json({
      status: "success",
      car,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error.message,
    });
  }
};
const getCars = async (req, res) => {
  try {
    const car = await cars.getCars();
    res.status(200).json({
      status: "success",
      car,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error.message,
    });
  }
};

const createCars = async (req, res) => {
  try {
    const car = await cars.createCars(req.body, req.user.id);
    res.status(201).json({
      status: "success",
      message: "Success created new car",
      car,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error: "data fail added",
    });
  }
};
const updateCars = async (req, res) => {
  try {
    const CarsId = req.params.id;
    const car = await cars.updateCars(CarsId, req.body, req.user.id);
    res.status(200).json({
      status: "success",
      message: "data success updated",
      car,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: "data fail updated",
    });
  }
};
const deleteCars = async (req, res) => {
  try {
    const CarsId = req.params.id;
    await cars.deleteCars(req.user.id, CarsId);
    res.status(200).json({
      status: "success",
      message: "data success deleted",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: "data failed to delete",
    });
  }
};

module.exports = { getCars, getCarsWithMember, createCars, updateCars, deleteCars };
