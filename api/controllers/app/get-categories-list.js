module.exports = {
  friendlyName: "Get categories",

  description: "Get categories which has issues",

  inputs: {},

  exits: {
    success: {
      description: "List elements of categories",
    },
    invalidUser: {
      statusCode: 401,
      description: "The provided user does not exists",
    },
  },

  fn: async function (inputs, exits) {
    try {
      let issues = await Issue.find({
        isDeleted: false,
        isActive: true,
      }).populate("title");

      let issueCategories = issues.map((issue) => ({
        category: issue.title.id,
      }));

      let categoriesUniqueList = _.uniq(issueCategories);

      let categories = [];

      for (var i = 0; i < categoriesUniqueList; i++) {
        let category = await Category.findOne({
          id: categoriesUniqueList[i].category,
        });

        categories.push(category);
      }

      return exits.success({
        categories,
      });
    } catch (error) {
      sails.log.error("Get post error:", error);
      return exits.invalidUser({ message: "Application key is invalid." });
    }
  },
};
