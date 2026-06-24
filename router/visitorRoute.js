import express from "express";
import { trackVisitor, getTrackVisitorController, deleteVisitorByIdController } from "../controllers/visitorController.js";

const router = express.Router();

router.post("/track", trackVisitor);
router.get("/track", getTrackVisitorController);
router.delete("/track/:id", deleteVisitorByIdController);

export default router;