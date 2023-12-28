const express = require("express");
const User = require("../models/user");

const authRoutes = require("../controllers/auth");

const router = express.Router();

router.post("/signup", authRoutes.postSignup);

router.post("/login", authRoutes.postLogin);

module.exports = router;
