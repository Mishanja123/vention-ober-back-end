import User from "../models/user";
import { Request, Response, NextFunction } from "express";

export const postSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      return res.status(422).json({ message: "Email already exists" });
    }

    await User.create({
      first_name,
      last_name,
      email,
      phone,
      password,
      role: "user",
    });
    res.status(200).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
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
        .status(422)
        .json({ message: "User with provided email doesn't exist" });
    }
    res.status(200).json({
      message: `Name: ${user.first_name}, Surname: ${user.last_name}, Email: ${user.email}, Phone: ${user.phone}, Role: ${user.role}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error " + error });
  }
};
