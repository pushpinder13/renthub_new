const jwt = require('jsonwebtoken');

const JWT_SECRET = 'jwt_secret_key'; 

const authenticateToken = async(req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token,JWT_SECRET);

      req.user=decoded;
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Not authorized, no token" });
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

module.exports = authenticateToken;
