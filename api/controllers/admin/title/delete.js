module.exports = {
  friendlyName: "Delete title",

  description: "Delete title.",

  exits: {
    success: {
      description: "Title deleted succesfully.",
    },
    errorRequest: {
      statusCode: 500
    }
  },

  fn: async function (inputs, exits) {
    try {
      let req = this.req;

      await Title.updateOne({ id: req.param("id") }).set({
        isActive: 0,
        isDeleted: 1,
      });

      return exits.success({
        status: true,
        message: 'Title is deleted.'
      })
    } catch (error) {
      console.log('Delete error: ', error);
      return exits.errorRequest({
        status: false,
        message: 'An error occured.'
      })
    }
  },
};
