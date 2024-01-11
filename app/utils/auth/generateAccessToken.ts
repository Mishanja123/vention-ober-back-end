import jwt from "jsonwebtoken";


export const generateAccessToken = (userId: number) => {
  const payload = { userId };
  const secret: string | undefined = process.env.TOKEN_SECRET;
  if (!secret) throw new Error("Secret is not defined");
  return jwt.sign(payload, secret, { expiresIn: "15m" });
};
