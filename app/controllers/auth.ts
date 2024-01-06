import User from "../models/user";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { generateAccessToken } from "../services/auth/generateAccessToken";
import { generateRefreshToken } from "../services/auth/generateRefreshToken";
import { ControllerFunction } from "../types/ControllerFunction";
import jwt, { JwtPayload } from "jsonwebtoken";

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
      role: "user"
    });
    res.status(201).json({
      message: `Signup successful`
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
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res
        .status(401)
        .json({ message: "User with provided email doesn't exist" });
    }
    const doMatch = await bcrypt.compare(password, user.password);
    if (!doMatch) {
      return res.status(401).json({ message: "wrong-password" });
    } else {
      const accessToken = generateAccessToken(user.id);
      const refreshToken = generateRefreshToken(user.id);
      return res
        .status(200)
        .header("Authorization", `Bearer ${accessToken}`)
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000
        })
        .json({
          message: `Name ${user.first_name}`
        });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error " + error });
  }
};

export const currentUser: ControllerFunction = async (req, res) => {
  try {
    const { first_name, email } = req.user!;

    res.status(200).json({
      first_name,
      email
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const refreshTokens = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const refreshToken = req.cookies["refreshToken"];

  if (!refreshToken) {
    return res.status(403).json("Forbidden");
  }

  try {
    const { id } = jwt.verify(
      refreshToken,
      process.env.TOKEN_SECRET as string
    ) as JwtPayload;

    const newAccessToken = generateAccessToken(id);
    const newRefreshToken = generateRefreshToken(id);

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "strict"
    });

    res
      .header("Authorization", `Bearer ${newAccessToken}`)
      .json({ message: "Token refreshed successfully." });
  } catch (error) {
    return res.status(400).json({ message: "Invalid refresh token." });
  }
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("refreshToken", { path: "/" });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
