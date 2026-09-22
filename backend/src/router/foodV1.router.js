import { Router } from "express"; 
import { foodControllerV1 } from "../controllers/foodV1.controller.js";

export const foodRouterV1 = Router();

foodRouterV1.get("/", foodControllerV1["/"]);
