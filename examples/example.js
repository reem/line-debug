var debug = require('line-debug')('Example Module');

// => Module: Example Module Line: 4 -- Something you want to know about
debug("Something you want to know about.");

// => Module: Example Module Line: 7 -- Another thing you want to know about
debug("Another thing you want to know about.");