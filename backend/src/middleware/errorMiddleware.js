export function notFound(req, _res, next) {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
}

export function errorHandler(error, _req, res, _next) {
  const statusCode = error.statusCode || (error.name === "ValidationError" ? 400 : 500);

  if (error.name === "ValidationError") {
    const message = Object.values(error.errors)
      .map((item) => item.message)
      .join(", ");
    res.status(400).json({ success: false, message });
    return;
  }

  if (error.code === 11000) {
    res.status(409).json({ success: false, message: "Duplicate submission detected" });
    return;
  }

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Internal server error" : error.message,
  });
}
