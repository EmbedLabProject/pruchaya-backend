import express from "express";

import * as problemController from "../controllers/problemController.js";

const router = express.Router();

router.get("/", problemController.getProblem);


export default router;