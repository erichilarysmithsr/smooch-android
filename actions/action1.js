"use strict";
let datafire = require('datafire');

let google_androidpublisher = require('@datafire/google_androidpublisher').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_androidpublisher.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
