import express from "express";
import { postLogin, postSignup } from "../controllers/auth";

const router = express.Router();

router.post("/api/auth/sign-up", postSignup);

router.post("/api/auth/login", postLogin);

export default router;
