import express from "express";
import { postLogin, postSignup } from "../controllers/auth";

const router = express.Router();

router.post("/sign-up", postSignup);

router.post("/login", postLogin);

export default router;
