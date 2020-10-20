module.exports = {
  friendlyName: "Delete user",

  description: "Delete user.",

  exits: {
    success: {
      description: "User deleted succesfully.",
    },
    errorRequest: {
      statusCode: 500
    }
  },

  fn: async function (inputs) {
    try {
      let req = this.req;

      await User.updateOne({ id: req.param("id") }).set({
        isActive: 0,
        isDeleted: 1,
        modifiedBy: req.user.id
      });

      return exits.success({
        status: true,
        message: 'User is deleted.'
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
