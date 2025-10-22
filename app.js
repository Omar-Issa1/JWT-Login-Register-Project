import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import connectDB from "./db/connect.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import mainRouter from "./routes/main.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.redirect("/register.html");
});
app.use("/api/v1", mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

let isConnected = false;
const connectToDatabase = async () => {
  if (isConnected) return;
  await connectDB(process.env.MONGO_URI);
  isConnected = true;
  console.log("Connected to MongoDB");
};

export default async (req, res) => {
  await connectToDatabase();
  return app(req, res);
};
