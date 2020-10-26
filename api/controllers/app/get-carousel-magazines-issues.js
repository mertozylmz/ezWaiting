module.exports = {
  friendlyName: "Get categories",

  description: "Get categories which has issues",

  inputs: {},

  exits: {
    success: {
      description: "List elements of categories",
      statusCode: 204,
    },
    invalidUser: {
      statusCode: 401,
      description: "The provided user does not exists",
    },
  },

  fn: async function (inputs, exits) {
    try {
      let req = this.req;

      let limit = 20;

      let titles = await Title.find({
        where: {
          isActive: true,
          isDeleted: false,
          isCarousel: true,
        },
        skip: (req.param("page") - 1) * limit,
        limit: limit,
      }).populate("issue", {
        sort: "createdAt DESC",
        limit: 1,
        where: {
          status: "published",
        },
      });

      let allTitles = await Title.find({
        where: {
          isActive: true,
          isDeleted: false,
        },
      }).populate("issue", {
        sort: "createdAt DESC",
        limit: 1,
        where: {
          status: "published",
        },
      });

      let titleHasOneIssue = allTitles.filter((title) => {
        return title.issues.length > 0;
      });

      let issues = titles.map((title) => {
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
