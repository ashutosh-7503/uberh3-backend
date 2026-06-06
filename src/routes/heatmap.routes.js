import { Router } from "express";
import { validateHeatmap } from "../middleware/validate.js";
import { heatMapController } from "../controllers/heatmap.controller.js";

const router=Router();

router.get('/heatmap',validateHeatmap,heatMapController);

export default router;

