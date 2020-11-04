var { schemaCategory } = require("../../../validations/category");

module.exports = {
  friendlyName: "Update category",

  description: "Update category for system.",

  inputs: {
    name: {
      type: "string",
      description: "Name value of the category.",
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

      let requestParamsCategory = {
        name: inputs.name,
        modifiedBy: req.user.id
      };

      schemaCategory
        .validate(requestParamsCategory)
        .then(async function () {
          await Category.updateOne({ id: req.param('id') }).set(requestParamsCategory);

          return res.redirect("/admin/category/update/" + req.param('id'));
        })
        .catch(function (err) {
          req.session.yup_errors = err.errors;
          res.redirect("/admin/category/update/" + req.param('id'));
        });

    } catch (error) {
      console.log("Update category error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
