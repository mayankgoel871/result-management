const express = require("express");
const app = express();
const resultRouter = require("./Routes/routes.js");
require("./database/mongoose.js");
app.use("/results", resultRouter);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server started");
});
