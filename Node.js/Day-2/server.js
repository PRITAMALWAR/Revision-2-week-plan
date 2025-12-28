const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = 3080;

const USER = { username: "admin", password: "1234" };

function authMiddleware(req, res, next) {
  const authCookie = req.cookies.auth;

  if (!authCookie) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (authCookie === `${USER.username}:${USER.password}`) {
    next();
  } else {
    res.status(401).json({ message: "Invalid cookie" });
  }
}


// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.cookie("auth", `${username}:${password}`, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
    });
    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to your dashboard!" });
});

app.post("/logout", (req, res) => {
  res.clearCookie("auth");
  res.json({ message: "Logged out successfully" });
});

app.get("/", (req, res) => {
  res.send("Hello! this is home page");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
