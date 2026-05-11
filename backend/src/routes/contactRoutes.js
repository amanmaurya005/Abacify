import express from "express";
import { createContact } from "../controllers/contactController.js";
import { validateRequired } from "../middleware/validate.js";

const router = express.Router();

router.post("/", validateRequired(["name", "email", "phone", "currentStatus", "message"]), createContact);

export default router;
