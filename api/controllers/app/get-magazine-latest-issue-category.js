module.exports = {
  friendlyName: "Get categories",

  description: "Get categories which has issues",

  inputs: {},

  exits: {
    success: {
      description: "List elements of categories",
      statusCode: 200,
    },
    invalidUser: {
      statusCode: 401,
      description: "The provided user does not exists",
    },
  },

  fn: async function (inputs, exits) {
    try {
      let req = this.req;

      let category = await Category.findOne({ id: req.param("catId") });

      let limit = 20;

      let allTitles = await Title.find({
        where: {
          isActive: true,
          isDeleted: false,
        },
        skip: (req.param("page") - 1) * limit,
        limit: limit,
      })
        .populate("issues")
        .populate("categories");

      let titleHasOneIssue = allTitles.filter((title) => {
        let hasCategory = title.categories.find((c) => {
          return c.id == category.id;
        });

         console.log(hasCategory);
        return title.issues.length > 0 && hasCategory;
      });

      let issues = titleHasOneIssue.map((title) => {
        let issue = title.issues.pop();
        return {
          id: issue.id,
          name: issue.name,
          issueDescription: issue.description,
          thumbImg: issue.thumbImg,
        };
      });

      return exits.success({
        count: titleHasOneIssue.length,
        page: req.param("page"),
        issues: issues,
      });
    } catch (error) {
      sails.log.error("Get post error:", error);
      return exits.invalidUser({ message: "Application key is invalid." });
    }
  },
};
