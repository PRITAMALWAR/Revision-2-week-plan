const requests = {};

const simpleRateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;

  if (!requests[ip]) {
    requests[ip] = { count: 1, timer: setTimeout(() => {
      delete requests[ip];
    }, 60000) };
    next();
  } else {
    if (requests[ip].count < 10) {
      requests[ip].count += 1;
      next();
    } else {
      res.status(429).json({ message: "Too many requests. Try again in a minute." });
    }
  }
};

module.exports = simpleRateLimiter;
