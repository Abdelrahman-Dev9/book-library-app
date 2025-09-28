import { Request, Response } from "express";
import { UserModel } from "../../models/User";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ email, password: hashedPassword });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
