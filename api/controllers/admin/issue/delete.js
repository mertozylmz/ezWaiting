module.exports = {
  friendlyName: "Delete issue",

  description: "Delete issue.",

  inputs: {

  },

  exits: {
    success: {
      description: "Issue deleted succesfully.",
    },
    errorRequest: {
      statusCode: 500
    }
  },

  fn: async function (inputs, exits) {
    try {
      let req = this.req;

      await Issue.updateOne({ id: req.param("id") }).set({
        isActive: 0,
        isDeleted: 1,
      });

      return exits.success({
        status: true,
        message: 'Issue is deleted.'
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
