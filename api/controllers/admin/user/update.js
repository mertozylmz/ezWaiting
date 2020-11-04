var { schemaUser } = require("../../../validations/user");

module.exports = {
  friendlyName: "Update user",

  description: "Update user for system.",

  inputs: {
    email: {
      type: "string",
      description: "Email value of user for logging in to admin panel.",
    },

    password: {
      type: "string",
      description: "Password value of the user for loggin in to admin panel.",
    },

    firstName: {
      type: "string",
      description: "Publisher role first name value.",
    },

    lastName: {
      type: "string",
      description: "Publisher last name value.",
    },

    address: {
      type: "string",
      description: "Address value of the Publisher role.",
    },

    phone: {
      type: "string",
      description: "Phone value of the Publisher role.",
    },
  },

  exits: {
    invalidRequest: {
      statusCode: 500,
    },
  },

  fn: async function (inputs, exits) {
    try {
      let res = this.res;
      let req = this.req;

      let requestParamsUser;

      if (inputs.password) {
        requestParamsUser = {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          address: inputs.address,
          phone: inputs.phone,
          modifiedBy: req.user.id,
        };

        schemaUser
          .validate(requestParamsUser)
          .then(async function () {
            await User.updateOne({ id: req.param("id") }).set();

            return res.redirect("/admin/user/update/" + req.param("id"));
          })
          .catch(function (err) {
            req.session.yup_errors = err.errors;

            return res.redirect("/admin/user/update/" + req.param("id"));
          });
      } else {
        requestParamsUser = {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          password: inputs.password,
          address: inputs.address,
          phone: inputs.phone,
          modifiedBy: req.user.id,
        };

        schemaUser
          .validate(requestParamsUser)
          .then(async function () {
            await User.updateOne({ id: req.param("id") }).set(
              requestParamsUser
            );

            return res.redirect("/admin/user/update/" + req.param("id"));
          })
          .catch(function (err) {
            req.session.yup_errors = err.errors;

            return res.redirect("/admin/user/update/" + req.param("id"));
          });
      }
    } catch (error) {
      console.log("Create user error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
