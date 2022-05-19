'use strict';

/**
 *  latest controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest.latest');
