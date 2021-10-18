const BaseError = require("./BaseError");

class HTTP400Error extends BaseError {
  constructor(message = "Bad request") {
    super(message, 400, true);
  }
}

module.exports = HTTP400Error;
