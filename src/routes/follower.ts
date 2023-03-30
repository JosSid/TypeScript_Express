import { Request, Response, Router } from "express";
import { createItem, deleteItem, getItem, getItems, updateItem } from "../controllers/followers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getItems);
router.get("/:id", getItem);

router.post("/", createItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export { router };