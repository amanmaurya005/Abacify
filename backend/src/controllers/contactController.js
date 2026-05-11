import Contact from "../models/Contact.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);

  res.status(201).json({
    success: true,
    message: "Message received successfully",
    data: { id: contact._id, createdAt: contact.createdAt },
  });
});
