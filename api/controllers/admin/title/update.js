module.exports = {


  friendlyName: 'Update',


  description: 'Update title.',


  inputs: {
    name: {
      type: 'string'
    },
    rating: {
      type: 'string'
    },
    publisher: {
      type: 'ref'
    },
    countries: {
      type: 'ref'
    },
    categories: {
      type: 'ref'
    }
  },


  exits: {
    invalidRequest: {
      statusCode: 500
    }
  },


  fn: async function (inputs, exits) {
    try {
      let res = this.res;
      let req = this.req;

      await Title.updateOne({ id: req.param('id') }).set({
        name: inputs.name,
        rating: inputs.rating,
        publisher: inputs.publisher,
        countries: inputs.countries,
        categories: inputs.categories
      });

      return res.redirect("/admin/title/update/" + req.param('id'));

    } catch (error) {
      console.log("Create title error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  }


};
