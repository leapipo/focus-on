import cors from "cors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { tasksRouter } from "./controllers/tasks.controller";
import { daysRouter } from "./controllers/days.controller";
import { pomodoroRouter } from "./controllers/pomodoro.controller";
import { authRouter } from "./controllers/auth.controller";
import { usersRouter } from "./controllers/user.controller";

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/tasks", tasksRouter);
app.use("/days", daysRouter);
app.use("/pomodoro", pomodoroRouter);
app.use("/users", usersRouter);
app.use("/", authRouter);

export default app;
