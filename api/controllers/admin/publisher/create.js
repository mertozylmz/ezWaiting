var { schemaUser } = require("../../../validations/user");

module.exports = {
  friendlyName: "Create publisher",

  description: "Create publisher for system.",

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

    companyName: {
      type: "string",
      description: "Company name of the Publisher role.",
    },

    firstName: {
      type: "string",
      description: "Publisher role first name value.",
    },

    lastName: {
      type: "string",
      description: "Publisher last name value.",
    },

    webSite: {
      type: "string",
      description: "Website URL of the Publisher role.",
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

      let requestParamsPublisher = {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        companyName: inputs.companyName,
        webSite: inputs.webSite,
        address: inputs.address,
        phone: inputs.phone,
        userRole: "USER_ROLE_PUBLISHER",
        createdBy: req.user.id,
      };

      schemaUser
        .validate(requestParamsPublisher)
        .then(async function () {
          let user = await User.createrequestParamsPublisherfetch();

          return res.redirect("/admin/publisher/update/" + user.id);
        })
        .catch(function (err) {
          req.session.yup_errors = err.errors;
          res.redirect("/admin/publisher/create");
        });
    } catch (error) {
      console.log("Create publisher error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
