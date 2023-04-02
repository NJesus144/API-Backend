const express = require("express");
const app = express();
const connectDatabase = require("./src/database/db");

const userRouter = require("./src/routes/user.route");

const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
