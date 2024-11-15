const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index.js");

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routes);

const listener = app.listen(8080, () => {
  console.log("App listening on port " + listener.address().port);
});
