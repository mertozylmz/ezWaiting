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
        status: 'published',
      }).populate("title");

      let generalCategories = [];

      let issueCategories = await issues.map(async (issue) => {
        let titleCategories = await Title.findOne({
          id: issue.title.id,
        }).populate("categories");

        for (var i = 0; i < titleCategories.categories.length; i++) {
          let category = await Category.findOne({
            id: titleCategories.categories[i].id,
          });

          generalCategories.push(category);
        }
      });

      await Promise.all(issueCategories);

      let categories = _.uniq(generalCategories);

      return exits.success({
        categories,
      });
    } catch (error) {
      sails.log.error("Get post error:", error);
      return exits.invalidUser({ message: "Application key is invalid." });
    }
  },
};
