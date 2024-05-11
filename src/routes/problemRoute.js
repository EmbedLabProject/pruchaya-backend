import express from "express";

import * as problemController from "../controllers/problemController.js";

const router = express.Router();

router.get("/", problemController.getProblem);
router.post("/setStatus", problemController.setProbStatus);
router.post("/getStatus", problemController.getProbStatus);


export default router;