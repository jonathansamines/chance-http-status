# chance-http-status

[![npm](https://img.shields.io/npm/v/chance-http-status.svg?style=flat-square)](https://www.npmjs.com/package/chance-http-status)
[![Build Status](https://github.com/jonathansamines/chance-http-status/workflows/Node.js%20CI/badge.svg)](https://github.com/jonathansamines/chance-http-status/actions)

A simple chance mixin to generate random http status information

## Installation

```bash
npm install --save chance-http-status
```

## Usage

```js
  const chance = require('chance');
  const httpStatus = require('chance-http-status');

  chance.mixin({ httpStatus });

  chance.httpStatus({ classType: 'success' });

  // => {
  //  "status": 200,
  //  "message": "successful",
  // }
```

## API

### chance.httpStatus(options) => httpStatusDefinition

+ `options`
  - `options.classType`: The type of http status code. Can be one of `information`, `success`, `redirection`, `clientError` or `serverError`.


### httpStatusDefinition

An object with the following properties:

+ `status` A valid http status code
+ `message` The standard http status message associated with the code
