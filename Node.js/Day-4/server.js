const express = require("express");
const app = express();
const simpleRateLimiter = require("./middleware/simpleRateLimiter");
const routes = require("./routes");

app.use(simpleRateLimiter);

app.use("/", routes);

app.listen(8186, () => console.log("Server running on port 8186"));
