const router = require("express").Router();

// midleware
const isSuperAdmin = require("../../midleware/isSuperAdmin");
const auth = require("../../midleware/auth");

// controller
const { login, register, toAdmin } = require("../../app/controllers/authController");

// API auth
router.post("/login", login);
router.post("/register", register);
router.put("/makeAdmin/:id", auth, isSuperAdmin, toAdmin);

module.exports = router;
