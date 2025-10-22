import express from "express";
const router = express.Router();
import { register, login, dashboard } from "../controllers/main.js";
import authenticationMiddleware from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/dashboard").get(authenticationMiddleware, dashboard);

export default router;
