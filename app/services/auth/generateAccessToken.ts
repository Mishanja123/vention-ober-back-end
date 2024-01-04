import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateAccessToken = (userId: string) => {
  const payload = { userId };
  const secret: string | undefined = process.env.TOKEN_SECRET;
  if (!secret) throw new Error("Secret is not defined");
  return jwt.sign(payload, secret, { expiresIn: "15m" });
};
