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

    userRole: {
      type: "string",
      required: true,
      description:
        "User role string for checking policies and letting use the methods. USER_SUPER_ADMIN | USER_PUBLISHER | USER_MOBILE_USER",
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
    success: {
      description: "Created succesfully.",
    },
    invalidRequest: {
      statusCode: 500,
    },
  },

  fn: async function (inputs, exits) {
    try {

      await User.create({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        companyName: inputs.companyName,
        webSite: inputs.webSite,
        address: inputs.address,
        phone: inputs.phone,
      }).fetch();

      return exits.success({
        status: true,
        message: "New publisher is created.",
      });
    } catch (error) {
      console.log("Create publisher error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
