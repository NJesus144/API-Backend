import express from 'express'
import connectDatabase from './src/database/db.js';
import userRouter from './src/routes/user.route.js'

const port = 3000;
const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
