"use strict";
let datafire = require('datafire');

let google_androidmanagement = require('@datafire/google_androidmanagement').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_androidmanagement.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
