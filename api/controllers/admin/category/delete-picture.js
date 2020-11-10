module.exports = {
  friendlyName: "Delete category picture",

  description: "Delete category picture.",

  exits: {
    success: {
      description: "Category picture deleted succesfully.",
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
        thumbImg: "",
        modifiedBy: req.user.id
      });

      return exits.success({
        status: true,
        message: 'Category picture is deleted.'
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
