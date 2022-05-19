'use strict';

/**
 * latest service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest.latest');
