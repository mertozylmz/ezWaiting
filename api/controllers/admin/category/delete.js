module.exports = {
  friendlyName: "Delete category",

  description: "Delete category.",

  exits: {
    success: {
      description: "Category deleted succesfully.",
    },
    errorRequest: {
      statusCode: 500
    }
  },

  fn: async function (inputs,exits) {

    try {
      let req = this.req;

      await Category.updateOne({id: req.param('id') })
      .set({
        isActive: false,
        isDeleted: true,
        modifiedBy: req.user.id
      });

      return exits.success({
        status: true,
        message: 'Category is deleted.'
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
