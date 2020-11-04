var { schemaUser } = require("../../../validations/user");

module.exports = {
  friendlyName: "Create user",

  description: "Create user for system.",

  inputs: {
    email: {
      type: "string",
      required: true,
      description: "Email value of user for logging in to admin panel.",
    },

    password: {
      type: "string",
      required: true,
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

      let requestParamsUser = {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        address: inputs.address,
        phone: inputs.phone,
        userRole: "USER_ROLE_SUPER_ADMIN",
        createdBy: req.user.id,
      };

      schemaUser
        .validate(requestParamsUser)
        .then(async function () {
          let user = await User.create(requestParamsUser).fetch();

          return res.redirect("/user/update/" + user.id);
        })
        .catch(function (err) {
          req.session.yup_errors = err.errors;
          res.redirect("/admin/user/create");
        });
    } catch (error) {
      console.log("Create user error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
