const BaseError = require("./BaseError");

class APIError extends BaseError {
  constructor(
    message = "Internal server error",
    statusCode = 500,
    isOperational = true
  ) {
    super(message, statusCode, isOperational);
  }
}

module.exports = APIError;
