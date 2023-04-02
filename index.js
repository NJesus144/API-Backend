const express = require("express");
const userRouter = require("./src/routes/user.route");

const app = express();

app.use("/soma", userRouter);


app.listen(3000);
