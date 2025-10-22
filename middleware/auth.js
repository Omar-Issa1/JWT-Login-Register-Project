import UnauthenticatedError from "../errors/unauthenticated.js";
import jwt from "jsonwebtoken";
const authenticationMiddleware = async (req, res, next) => {
  const authheader = req.headers.authorization;
  if (!authheader || !authheader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
  const token = authheader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};

export default authenticationMiddleware;
