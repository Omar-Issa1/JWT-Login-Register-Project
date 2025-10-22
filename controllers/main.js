import User from "../models/user.js";
import BadRequestError from "../errors/bad-request.js";
import UnauthenticatedError from "../errors/unauthenticated.js";

const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new BadRequestError("Please provide username and password");
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new BadRequestError("Username already exists");
    }

    const user = await User.create({ username, password });
    const token = user.createJWT();

    res.status(201).json({ user: { name: user.username }, token });
  } catch (error) {
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors)
        .map((val) => val.message)
        .join(", ");
      return res.status(400).json({ msg: message });
    }

    next(error);
  }
};
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide username and password");
  }

  const user = await User.findOne({ username });
  if (!user) {
    throw new UnauthenticatedError("username or password is incorrect");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("username or password is incorrect");
  }

  const token = user.createJWT();
  res.status(200).json({ user: { name: user.username }, token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

export { register, login, dashboard };
