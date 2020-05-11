#!/usr/bin/env node

const esmRequire = require('esm')(module);
module.exports = esmRequire('./functions/terraformer.js');
