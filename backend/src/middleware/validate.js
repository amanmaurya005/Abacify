export function validateRequired(fields) {
  return (req, _res, next) => {
    const missing = fields.filter((field) => {
      const value = req.body[field];
      return value === undefined || value === null || value === "";
    });

    if (missing.length > 0) {
      const error = new Error(`Missing required fields: ${missing.join(", ")}`);
      error.statusCode = 400;
      next(error);
      return;
    }

    next();
  };
}
