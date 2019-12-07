const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const { port } = require("./config/config");
const routes = require("./routes/routes");
require("./db");

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.use("/", routes);

app.listen(port, () => console.log(`server on port ${port}`));
