const errorHandler = (err, req, res, next) => {
  console.error("❌ FULL ERROR OBJECT:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    code: err.code || null,
    detail: err.detail || null,
    hint: err.hint || null,
    table: err.table || null,
    constraint: err.constraint || null,
  });
};

module.exports = errorHandler;
