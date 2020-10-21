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
    country: {
      type: 'ref'
    },
    categories: {
      type: 'ref'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    try {
      let res = this.res;

      let title = await Title.create({
        name: inputs.name,
        rating: inputs.rating,
        publisher: inputs.publisher,
        country: inputs.country,
        categories: inputs.categories
      }).fetch();

      return res.redirect('/title/update/' + title.id);
    } catch (error) {
      console.log("Create title error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  }


};
