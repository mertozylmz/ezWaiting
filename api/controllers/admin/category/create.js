module.exports = {
  friendlyName: "Create category",

  description: "Create category for system.",

  inputs: {
    name: {
      type: "string",
      required: true,
      description: "Name value of category.",
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

      let user = await User.create({
        name: inputs.name,
        createdBy: req.user.id
      }).fetch();

      return res.redirect('/category/update/'+user.id);
    } catch (error) {
      console.log("Create category error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
