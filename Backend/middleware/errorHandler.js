const errorHandler = (err, req, res, next) => {
  console.error("❌ FULL ERROR:", err); // <-- important

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    code: err.code || null,
  });
};

module.exports = errorHandler;
