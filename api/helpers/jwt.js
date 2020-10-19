const jwt = require("jsonwebtoken");

module.exports = {
  friendlyName: "JWT create token",

  description: "Jwt create token for logged in user.",

  inputs: {
    user: {
      type: "json",
      description: "User object to be signed from jsonwebtoken sign method.",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    try {
      var token = jwt.sign({ user: inputs.user }, sails.config.custom.secret, {
        algorithm: "HS256",
        issuer: sails.config.custom.issuer,
        audience: sails.config.custom.audience,
      });

      return exits.success({
        token: token,
      });
    } catch (error) {
      return exits.invalid({ message: "Oops there is a problem." });
    }
  },
};
