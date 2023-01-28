const repository = require("../repositories/carsRepository");
const { gatUser } = require("../repositories/userRepository");
const { create, updateBy, deleteBy } = require("../repositories/historyRepository");

const ApiError = require("../../utils/ApiError");
const getCars = async () => {
  const cars = await repository.getCars();
  if (!cars) throw new ApiError();
  return cars;
};
const getCarsWithMember = async () => {
  const cars = await repository.getCarsWithMember();
  if (!cars) throw new ApiError();
  const carsAvailable = cars.filter((car) => car.isActive == true);
  return carsAvailable;
};
const createCars = async (reqBody, userId) => {
  // search creator name based on id sent from authentication
  const userAktif = await gatUser(userId);
  // input the name of the car data maker into the history table
  const Createhistory = await create(userAktif.name);
  // get id of newly created table to put in fild history
  const historyId = Createhistory.id;
  // get data from user input to create new cars data
  const { name, price, size } = reqBody;
  const reqbody = { name, price, size, isActive: true, historyId };
  return await repository.createCars(reqbody);
};
const updateCars = async (carsId, reqBody, userId) => {
  const userAktif = await gatUser(userId);
  const { name, price, size } = reqBody;
  const reqbody = { name, price, size };
  const CarById = await repository.getCarById(carsId);
  await updateBy(userAktif.name, CarById.historyId);
  await repository.updateCars(carsId, reqbody);
  return CarById;
};
const deleteCars = async (userId, carsId) => {
  const userAktif = await gatUser(userId);
  const CarById = await repository.getCarById(carsId);
  console.log(userAktif.name);
  console.log(CarById.historyId);
  await deleteBy(userAktif.name, CarById.historyId);
  return await repository.deleteCars(carsId);
};

module.exports = { getCars, getCarsWithMember, createCars, updateCars, deleteCars };
