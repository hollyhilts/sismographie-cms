'use strict';

/**
 * random-question-prompt service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::random-question-prompt.random-question-prompt');
