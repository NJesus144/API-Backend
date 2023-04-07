import { Router } from "express";
const router = Router();

import { login } from "../controllers/auth.Controller.js";

router.post('/', login)

export default router;
