const { users } = require("../app/models");

module.exports = async function (req, res, next) {
  try {
    const user = await users.findByPk(req.user.id);
    if (user.roleId == 2 || user.roleId == 3) return next();
    throw new Error();
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "Can only be accessed by admin and super admin",
    });
  }
};
