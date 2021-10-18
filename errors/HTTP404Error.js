const BaseError = require("./BaseError");

class HTTP404Error extends BaseError {
  constructor(message = "Not found") {
    super(message, 404, true);
  }
}

module.exports = HTTP404Error;
