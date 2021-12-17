import { Router } from "express";
import EntityController from "../controllers/entityController";
const router = Router();

router.post("/entities/filter", EntityController.filter);
export default router;
