function getOuterLine () {
  return (new Error()).stack.split('\n')[3].split(':')[1];
}

module.exports = exports = function (moduleName) {
  'use strict';

  return function () {
    console.log.bind(
      console, 
      "Module:", moduleName, 
      "Line:", getOuterLine(), 
      "--").apply(console, arguments);
  };
};