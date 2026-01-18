import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/contact", registerUser);

export default router;
