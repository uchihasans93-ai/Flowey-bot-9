"use strict";

const logger = require("./logger");

function checkAndUpdateVersion(callback) {
  logger("Version check is disabled by the developer to maintain stability.", "info");
  if (typeof callback === "function") {
    return callback(null);
  }
  return Promise.resolve();
}

module.exports = { checkAndUpdateVersion };
