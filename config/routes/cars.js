const router = require("express").Router();

// midleware
const isAdmin = require("../../midleware/isAdmin");
const auth = require("../../midleware/auth");

// controller
const { getCars, getCarsWithMember, createCars, updateCars, deleteCars } = require("../../app/controllers/carsController");

// API cars
router.get("/member", auth, getCarsWithMember);
router.get("/", auth, isAdmin, getCars);
router.post("/", auth, isAdmin, createCars);
router.put("/:id", auth, isAdmin, updateCars);
router.delete("/:id", auth, isAdmin, deleteCars);

module.exports = router;
