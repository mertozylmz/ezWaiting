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

      let category = await Category.create({ name: inputs.name }).fetch();

      return res.redirect('/admin/category/update/' + category.id);
    } catch (error) {
      console.log("Create category error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
