module.exports = {


  friendlyName: 'Create',


  description: 'Create title.',


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

      let title = await Title.create({
        name: inputs.name,
        rating: inputs.rating,
        publisher: inputs.publisher
      }).fetch();

      const categories = Array.isArray(inputs.categories) ? inputs.categories : [inputs.categories];
      const countries = Array.isArray(inputs.countries) ? inputs.countries : [inputs.countries];

      await Title.addToCollection(title.id, 'categories').members(categories);
      await Title.addToCollection(title.id, 'countries').members(countries);

      return res.redirect('/admin/title/update/' + title.id);
    } catch (error) {
      console.log("Create title error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  }


};
