'use strict';

const nconf = require('nconf');
const relative_path = nconf.get('relative_path');
module.exports = require('../public/src/modules/helpers.common')(require('./utils'), require('benchpressjs'), relative_path);
