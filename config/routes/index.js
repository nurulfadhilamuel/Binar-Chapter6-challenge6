const router = require("express").Router();
const Auth = require("./auth");
const cars = require("./cars");

// import package swagger
const swaggerUi = require("swagger-ui-express");
// import file json
const swaggerDocument = require("../../docs/swagger.json");

// API server
router.use("/api/auth/", Auth);
router.use("/api/cars/", cars);

// APi docs
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = router;
