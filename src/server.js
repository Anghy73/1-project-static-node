const express = require("express");
const morgan = require("morgan");
const path = require("path");

const indexRouter = require("./routes/index");

const app = express();

// settings
app.set("serverName", "Static");
app.set("port", 7000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// middleware
app.use(morgan("dev"));

// Routing
app.use(indexRouter);

app.use("/static", express.static(path.join(__dirname, "/static")));

app.listen(7000, () => {
  console.log(
    `Server ${app.get("serverName")} started on port ${app.get("port")}`
  );
});
