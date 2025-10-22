import CustomAPIError from "../errors/custom-error.js";
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: messages });
  }

  if (err.code && err.code === 11000) {
    const field = Object.keys(err.keyValue);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `${field} already exists` });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Something went wrong, please try again later" });
};

export default errorHandlerMiddleware;
