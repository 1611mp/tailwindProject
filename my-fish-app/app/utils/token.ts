import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.WEBHOOK_SECRET || "supersecretkey";

export const generateToken = () => {
  return jwt.sign({ timestamp: Date.now() }, SECRET_KEY, { expiresIn: "5m" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};
