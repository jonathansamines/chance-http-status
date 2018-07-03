'use strict';

const {
  statusCodes,
  isValidClass,
  statusClasses,
  getStatusDefinition,
} = require('./status-codes');

module.exports = function httpStatusMixin({ classType } = {}) {
  if (classType !== undefined && !isValidClass(classType)) {
    throw new Error(`classType '${classType}' is not valid. Use one of (${Object.keys(statusClasses)})`);
  }

  const acceptableStatusCodes = classType ? statusClasses[classType] : statusCodes;

  const index = this.natural({
    min: 0,
    max: acceptableStatusCodes.length - 1,
  });

  return getStatusDefinition(acceptableStatusCodes[index]);
};
