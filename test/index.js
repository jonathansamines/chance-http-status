'use strict';

const tap = require('tap');
const Chance = require('chance');
const httpStatus = require('./../');

const getChance = () => {
  const chance = new Chance();

  chance.mixin({ httpStatus });

  return chance;
};

const getStatusInfoPattern = () => ({
  status: /[0-9]{3}/,
  message: /[a-zA-Z]*/,
});

tap.test('returns random http status when no options are provided', (t) => {
  t.plan(2);

  const chance = getChance();
  const pattern = getStatusInfoPattern();
  const actual = chance.httpStatus();

  t.type(actual, 'object');
  t.match(actual, pattern);
});

tap.test('returns random http status when an empty options object is provided', (t) => {
  t.plan(2);

  const chance = getChance();
  const pattern = getStatusInfoPattern();
  const actual = chance.httpStatus({});

  t.type(actual, 'object');
  t.match(actual, pattern);
});

tap.test('returns a 1xx error when `information` is provided as options.classType', (t) => {
  t.plan(1);

  const chance = getChance();
  const actual = chance.httpStatus({ classType: 'information' });

  t.ok(actual.status >= 100 && actual.status < 200, 'returns a status code between 100 and 199');
});

tap.test('returns a 2xx error when `success` is provided as options.classType', (t) => {
  t.plan(1);

  const chance = getChance();
  const actual = chance.httpStatus({ classType: 'success' });

  t.ok(actual.status >= 200 && actual.status < 300, 'returns a status code between 200 and 299');
});

tap.test('returns a 3xx when `redirect` is provided as options.classType', (t) => {
  t.plan(1);

  const chance = getChance();
  const actual = chance.httpStatus({ classType: 'redirect' });

  t.ok(actual.status >= 300 && actual.status < 400, 'returns a status code between 300 and 399');
});

tap.test('returns a 4xx when `clientError` is provided as options.classType', (t) => {
  t.plan(1);

  const chance = getChance();
  const actual = chance.httpStatus({ classType: 'clientError' });

  t.ok(actual.status >= 400 && actual.status < 500, 'returns a status code between 400 and 499');
});

tap.test('returns a 5xx when `serverError` is provided as options.classType', (t) => {
  t.plan(1);

  const chance = getChance();
  const actual = chance.httpStatus({ classType: 'serverError' });

  t.ok(actual.status >= 500 && actual.status < 600, 'returns a status code between 500 and 599');
});

tap.test('throws an error when an invalid options.classType is provided', (t) => {
  t.plan(1);

  const chance = getChance();
  const expectedError = {
    name: 'Error',
    message: 'classType \'not-valid\' is not valid. Use one of (information,success,redirect,clientError,serverError)',
  };

  const callWithInvalidOption = () => chance.httpStatus({ classType: 'not-valid' });

  t.throws(callWithInvalidOption, expectedError);
});
