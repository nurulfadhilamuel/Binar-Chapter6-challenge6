const { users } = require("../app/models");

module.exports = async function (req, res, next) {
  try {
    const user = await users.findByPk(req.user.id);
    console.log(user.name);
    if (user.roleId == 3) next();
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "Can only be accessed by super admin",
    });
  }
};
