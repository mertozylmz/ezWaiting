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

        return title.issues.length >= 0 && hasCategory;
      });

      let issues = titleHasOneIssue.map((title) => {

        let publishedIssues = title.issues.filter((i) => i.status == "published");

        let sortedPublishedIssues = publishedIssues.sort(function (a, b) {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });

        let issue = sortedPublishedIssues.pop();

        return {
          id: issue.id,
          name: issue.name,
          issueDescription: issue.description,
          thumbImg: issue.thumbImg,
        };
      });

      return exits.success({
        count: titleHasOneIssue.length,
        page: Number(req.param("page")),
        issues: issues,
      });
    } catch (error) {
      sails.log.error("Get post error:", error);
      return exits.invalidUser({ message: "Application key is invalid." });
    }
  },
};
