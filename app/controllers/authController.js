const auth = require("../services/authService");

const login = async (req, res) => {
  try {
    const token = await auth.login(req.body);
    res.status(200).json({
      status: "success",
      message: "login successfully",
      token,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
const register = async (req, res) => {
  try {
    const newUser = await auth.register(req.body);
    res.status(201).json({
      status: "success",
      message: "successful registration",
      newUser,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error.message,
    });
  }
};
const toAdmin = async (req, res) => {
  try {
    const newAdmin = await auth.toAdmin(req.params.id);
    res.status(201).json({
      message: "successfully made admin",
      newAdmin,
    });
  } catch (error) {
    res.status(error.statusCode || 404).json({
      status: "fail",
      message: error.message,
    });
  }
};
module.exports = { login, register, toAdmin };
