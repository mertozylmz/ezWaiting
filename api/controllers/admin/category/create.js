var { schemaCategory } = require("../../../validations/category");

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
      let req = this.req;
      let res = this.res;

      let requestParamsCategory = {
        name: inputs.name,
      };

      schemaCategory
        .validate(requestParamsCategory)
        .then(async function () {
          let category = await Category.create(requestParamsCategory).fetch();
          return res.redirect("/admin/category/update/" + category.id +"?success=true");
        })
        .catch(function (err) {
          req.session.yup_errors = err.errors;
          res.redirect("/admin/category/create");
        });
    } catch (error) {
      console.log("Create category error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
