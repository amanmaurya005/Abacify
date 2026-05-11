import Application from "../models/Application.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createApplication = asyncHandler(async (req, res) => {
  const application = await Application.create(req.body);

  res.status(201).json({
    success: true,
    message: "Application submitted successfully",
    data: { id: application._id, createdAt: application.createdAt },
  });
});
