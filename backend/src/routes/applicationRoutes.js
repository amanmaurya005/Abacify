import express from "express";
import { createApplication } from "../controllers/applicationController.js";
import { validateRequired } from "../middleware/validate.js";

const router = express.Router();

router.post(
  "/",
  validateRequired(["fullName", "email", "phone", "collegeOrCompany", "skillLevel", "reasonToJoin", "acceptedTerms"]),
  createApplication,
);

export default router;
