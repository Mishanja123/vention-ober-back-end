import express from "express";
import {
  currentUser,
  postLogin,
  postSignup,
  refreshTokens,
  logout
} from "../controllers/auth";
import authenticate from "../middleware/authenticate";

const router = express.Router();

router.post("/sign-up", postSignup);

router.post("/login", postLogin);

router.get("/current-user", authenticate, currentUser);

router.get("/refresh", refreshTokens);

router.get("/logout", logout);

export default router;
