import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { ticTac } from "../controllers/ticTac.controller.js";

const router = Router();
router.route("/").post(verifyJWT, ticTac);

export default router;