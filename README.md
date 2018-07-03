# chance-http-status

[![Travis](https://img.shields.io/travis/jonathansamines/chance-http-status.svg?style=flat-square)](https://travis-ci.org/jonathansamines/chance-http-status) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/chance-http-status)


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
