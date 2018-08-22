'use strict';

const chalk = require('chalk');
const utilCheckRequiredFiles = require('react-dev-utils/checkRequiredFiles');

// Print out errors
module.exports.printErrors = function printErrors(summary, errors) {
  console.log(chalk.red(summary));
  console.log();
  errors.forEach(err => {
    console.log(err.message || err);
    console.log();
  });
};

module.exports.checkRequiredFiles = function checkRequiredFiles(mode, paths) {
  // Warn and crash if required files are missing
  if (!utilCheckRequiredFiles([paths.appIndexJs])) {
    process.exit(1);
  }
  if (mode === 'browser') {
    if (!utilCheckRequiredFiles([paths.appHtml])) {
      process.exit(1);
    }
  }
};
