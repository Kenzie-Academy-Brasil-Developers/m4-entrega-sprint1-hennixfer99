import express from "express";
import userRouter from "./routes/users.routes"
const app = express();
app.use(express.json());

const users = [];

app.use("/users", userRouter)

app.listen(3000)


export default app

