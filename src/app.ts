import { errorHandler } from "./middlewares/errorHandler";
import express, { Application } from "express";
import useRouter from "./routes/user.routes";

export const app: Application = express();
app.use(express.json());

app.use("/api", useRouter);
app.use(errorHandler);
