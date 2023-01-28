const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ApiError = require("../../utils/ApiError");
const { checkEmail, creatUser, getUser, updtaeToAdmin } = require("../repositories/authRepository");

const login = async (reqBody) => {
  const { email, password } = reqBody;
  const user = await checkEmail(email);
  if (!user) throw new ApiError(404, "email not found");

  if (bcrypt.compareSync(password, user.password)) {
    // generate token for successfully logged in users
    const token = jwt.sign(
      {
        id: user.id,
      },
      "secret"
    );
    return token;
  } else {
    throw new ApiError(400, "Wrong Password");
  }
};
const register = async (reqBody) => {
  const { name, email, password } = reqBody;

  if (!email) throw new ApiError(400, "email cannot be empty");
  if (!name) throw new ApiError(400, "name cannot be empty");
  if (!password) throw new ApiError(400, "password cannot be empty");
  // validation for email that has been used
  const user = await checkEmail(email);
  if (user) throw new ApiError(401, "email already exist!");

  // validasi for minimum password length
  if (password.length < 8) throw new ApiError(401, "minimum password length must be 8 character");

  // password encryption
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    name,
    email,
    password: hashedPassword,
    roleId: 1,
  };
  return creatUser(newUser);
};
const toAdmin = async (id) => {
  const user = await getUser(id);
  if (!user) throw new ApiError(404, `user white id ${id} not found`);
  if (user.roleId == 2) throw new ApiError(401, `id ${id} already admin`);
  await updtaeToAdmin(id);
  return await getUser(id);
};
module.exports = { login, register, toAdmin };
