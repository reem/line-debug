var debug = require('../lib')('Test');
var demand = require('must');

// WARNING: If you change ANYTHING in this file please check
// that you haven't changed the line number of the line number
// test. If you have, change the test!

describe('line-debug', function () {
  var processOut;
  var logged;

  beforeEach(function () {
    logged = "";
    processOut = process.stdout.write;
    process.stdout.write = function (string) {
      logged = string;
    };
  });

  afterEach(function () {
    logged = "";
    process.stdout.write = processOut;
  });

  it('should exist', function () {
    demand(debug).to.exist();
  });

  it('should log to the console', function () {
    debug("Hello");
    demand(!!logged).to.be.true();
  });

  it('should log the module name', function () {
    debug("Hello");
    demand(logged).to.match(/Module: Test.*/);
  });

  it('should log the correct line number', function () {
    debug("Hello"); // Pay attention if you move this line!!!
    demand(logged).to.match(/Module: Test -- Line: 40.*/);
  });

  it('should log the correct message and format', function () {
    debug("Hello");
    demand(logged).to.match(/Module: Test -- Line: \d+ -- Hello/);
  });
});
