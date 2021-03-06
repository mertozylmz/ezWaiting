module.exports = {
  friendlyName: "Get categories",

  description: "Get categories which has issues",

  inputs: {},

  exits: {
    success: {
      description: "List elements of categories",
      statusCode: 200
    },
    invalidUser: {
      statusCode: 401,
      description: "The provided user does not exists",
    },
  },

  fn: async function (inputs, exits) {
    try {
      let req = this.req;

      let pdf = await Pdf.findOne({
        issue: req.param('issueId')
      });

      if(pdf){
        return exits.success({
          url: pdf.zipLink
        });
      }else {
        return exits.success({
          url: "No issue or pdf found"
        });
      }


    } catch (error) {
      sails.log.error("Get post error:", error);
      return exits.invalidUser({ message: "Application key is invalid." });
    }
  },
};
