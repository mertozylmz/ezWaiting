module.exports = {
  friendlyName: "Login",

  description: "Login admin passport method.",

  inputs: {
    user: {
      type: "json",
    },
    info: {
      type: "json",
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: "Logged in succesfully.",
    },
    invalid: {
      description: "The provided values are invalid",
      extendedDescription:
        "If this request was sent from a graphical user interface, the request " +
        "parameters should have been validated/coerced _before_ they were sent.",
      statusCode: 400,
    },
    errorRequest: {
      statusCode: 500,
    },
  },

  fn: async function (inputs, exits) {
    const passport = require("passport");

    let req = this.req;
    let res = this.res;

    try {
      passport.authenticate("local", function (err, user) {
        if (err || !user) {
          return res.redirect("/auth/login?loginError=true");
        }
        req.login(user, function (err) {
          if (err) res.send(err);
          return res.redirect("/admin/dashboard");
        });
      })(req, res);
    } catch (error) {
      console.log(error);
      return exits.invalid({ message: "Oops you credientials are wrong." });
    }
  },
};
