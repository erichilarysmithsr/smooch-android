"use strict";
let datafire = require('datafire');

let google_games = require('@datafire/google_games').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_games.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
