'use strict';

const http = require('http');

const statusCodes = Object.keys(http.STATUS_CODES);
const isBetween = (min, max) => (value) => value >= min && value < max;

const getStatusesByRange = (range) => statusCodes.filter(isBetween(range, range + 100));

const statusClasses = {
  information: getStatusesByRange(100),
  success: getStatusesByRange(200),
  redirect: getStatusesByRange(300),
  clientError: getStatusesByRange(400),
  serverError: getStatusesByRange(500),
};

const getStatusDefinition = (status) => ({
  status,
  message: http.STATUS_CODES[status],
});

const isValidClass = (classType) => Object.prototype.hasOwnProperty.call(statusClasses, classType);

module.exports = {
  isValidClass,
  statusCodes,
  statusClasses,
  getStatusDefinition,
};
