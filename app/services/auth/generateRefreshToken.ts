import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateRefreshToken = (userId: string) => {
  const payload = { userId };
  const secret: string | undefined = process.env.TOKEN_SECRET;

  if (!secret) throw new Error("Secret is not defined");
  return jwt.sign(payload, secret, { expiresIn: "7d" });
};
