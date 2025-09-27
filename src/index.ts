import { app } from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
dotenv.config();

const PORT = process.env.PORT || 2000;

connectDB().then(() => {
  app.listen(8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
