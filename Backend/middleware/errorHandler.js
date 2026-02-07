const errorHandler = (err, req, res, next) => {
  console.error("❌ FULL ERROR OBJECT:", err);

  // Also log stack if available
  if (err.stack) {
    console.error("❌ STACK:", err.stack);
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    code: err.code || null,
    detail: err.detail || null,
    hint: err.hint || null,
  });
};

module.exports = errorHandler;
