const rateLimitMap = {};

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!rateLimitMap[ip]) {
    rateLimitMap[ip] = [];
  }

  // Keep only requests from last 1 minute
  rateLimitMap[ip] = rateLimitMap[ip].filter(
    (time) => currentTime - time < 60000
  );

  if (rateLimitMap[ip].length >= 15) {
    return res.status(429).json({
      error: "Too many requests, please try again later",
    });
  }

  rateLimitMap[ip].push(currentTime);
  next();
};

module.exports = rateLimiter;
