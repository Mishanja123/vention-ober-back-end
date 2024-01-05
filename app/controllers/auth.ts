import User from "../models/user";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { generateAccessToken } from "../services/auth/generateAccessToken";
import { generateRefreshToken } from "../services/auth/generateRefreshToken";

dotenv.config();

export const postSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const { first_name, last_name, email, phone, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
      first_name,
      last_name,
      email,
      phone,
      password: hashedPassword,
      role: "user",
    });
    res.status(201).json({
      message: `Signup successful`,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error " + err });
  }
};

//     "first_name" : "Rostyslav",
//     "last_name" : "Tester",
//     "email": "test@gmail.com",
//     "phone" : "57809812121",
//     "password" : "qwerty1"

export const postLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } }); //move logic to services

    if (!user) {
      return res
        .status(401)
        .json({ message: "User with provided email doesn't exist" });
    }
    const doMatch = await bcrypt.compare(password, user.password);
    if (!doMatch) {
      return res.status(401).json({ message: "wrong-password" }); //for i18n - create key value pairs
    } else {
      const accessToken = generateAccessToken(user.id);
      const refreshToken = generateRefreshToken(user.id);
      return res
        .status(201)
        .header("Authorization", `Bearer ${accessToken}`)
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .json({
          message: `Name ${user.first_name}`,
        });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error " + error });
  }
};
