module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  console.error(err);
  res.status(err.statusCode).json({
    message: err.message,
  });
};
