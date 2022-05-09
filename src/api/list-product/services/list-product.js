'use strict';

/**
 * list-product service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-product.list-product');
