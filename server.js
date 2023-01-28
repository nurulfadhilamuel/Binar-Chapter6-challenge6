const express = require("express");
const app = express();
const Router = require("./config/routes");
const port = 8000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
