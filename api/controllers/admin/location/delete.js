module.exports = {
  friendlyName: "Delete location",

  description: "Delete location.",

  exits: {
    success: {
      description: "Location deleted succesfully.",
    },
    errorRequest: {
      statusCode: 500
    }
  },

  fn: async function (inputs, exits) {
    try {
      let req = this.req;

      await Location.updateOne({ id: req.param("id") }).set({
        isActive: 0,
        isDeleted: 1,
      });

      return exits.success({
        status: true,
        message: 'Location is deleted.'
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
