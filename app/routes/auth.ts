import express from "express";
import auth from "../controllers/auth";
import authenticate from "../middleware/authenticate";

const router = express.Router();

router.post("/sign-up", auth.postSingUp);

router.post("/login", auth.postSingIn);

router.get("/current-user", authenticate, auth.getCurrentUser);

router.get("/refresh", auth.getRefreshTokens);

router.get("/logout", auth.postLogOut);

export default router;
