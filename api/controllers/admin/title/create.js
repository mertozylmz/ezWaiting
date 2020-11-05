var { schemaTitle } = require("../../../validations/title");

module.exports = {
  friendlyName: "Create",

  description: "Create title.",

  inputs: {
    name: {
      type: "string",
    },
    rating: {
      type: "string",
    },
    publisher: {
      type: "ref",
    },
    countries: {
      type: "ref",
    },
    categories: {
      type: "ref",
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

      let requestParamsTitle = {
        name: inputs.name,
        rating: inputs.rating,
        publisher: inputs.publisher,
      };

      schemaTitle
        .validate(requestParamsTitle)
        .then(async function () {
          let title = await Title.create(requestParamsTitle).fetch();

          const categories = Array.isArray(inputs.categories)
            ? inputs.categories
            : [inputs.categories];
          const countries = Array.isArray(inputs.countries)
            ? inputs.countries
            : [inputs.countries];

          await Title.addToCollection(title.id, "categories").members(
            categories
          );
          await Title.addToCollection(title.id, "countries").members(countries);

          return res.redirect("/admin/title/update/" + title.id);
        })
        .catch(function (err) {
          req.session.yup_errors = err.errors;
          res.redirect("/admin/title/create");
        });
    } catch (error) {
      console.log("Create title error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
