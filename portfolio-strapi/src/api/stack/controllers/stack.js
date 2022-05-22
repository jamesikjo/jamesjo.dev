"use strict";

/**
 *  stack controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

//populate icon in Stack collection
module.exports = createCoreController("api::stack.stack", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany("api::stack.stack", {
      ...query,
      populate: {
        icon: {
          populate: {
            icon: true,
          },
        },
      },
      //   populate: "*",
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
