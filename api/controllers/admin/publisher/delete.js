module.exports = {
  friendlyName: "Delete publisher",

  description: "Delete publisher.",

  exits: {
    success: {
      description: "Publisher deleted succesfully.",
    },
    errorRequest: {
      statusCode: 500
    }
  },

  fn: async function (inputs,exits) {

    try {
      let req = this.req;

      await User.updateOne({id: req.param('id') })
      .set({
        isActive: false,
        isDeleted: true,
        modifiedBy: req.user.id
      });

      return exits.success({
        status: true,
        message: 'Publisher is deleted.'
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
