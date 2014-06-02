var debug = require('../lib');
var demand = require('must');

describe('line-debug', function () {
  it('should exist', function () {
    demand(debug).to.exist();
  });
});
