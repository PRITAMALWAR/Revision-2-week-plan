const express = require("express");
const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(`LOG: ${req.method} ${req.url}`);
  next(); 
};

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token || token !== "secret123") {
    const err = new Error("unauthorized access");
    err.status = 401;
    return next(err);
  }

  next();
};

const timingMiddleware = (req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const endTime = Date.now();
    console.log(`TIME: ${endTime - startTime} ms`);
  });

  next();
};

app.get(
  "/dashboard",
  loggerMiddleware,
  timingMiddleware,
  authMiddleware,
  (req, res) => {
    res.send("Welcome to Dashboard");
  }
);

app.get("/", loggerMiddleware, (req, res) => {
  res.send("Home Page (Public)");
});

app.use((err, req, res, next) => {
  console.error("ERROR:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

let PORT = 8789

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
