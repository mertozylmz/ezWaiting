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

      let limit = 20;

      let titles = await Title.find({
        where: {
          isActive: true,
          isDeleted: false,
        },
        skip: (req.param("page") - 1) * limit,
        limit: limit,
      }).populate("issues");

      let titleHasOneIssue = titles.filter((title) => {
        return title.issues.length > 0;

      });

      let issues = titleHasOneIssue.map((title) => {
        let publishedIssues = title.issues.filter((i) => i.status == "published");

        if (publishedIssues.length === 0) {
          return null;
        }

        let sortedPublishedIssues = publishedIssues.sort(function (a, b) {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });

        let issue = sortedPublishedIssues.pop();

        return {
          id: issue.id,
          name: issue.name,
          issueDescription: issue.description,
          thumbImg: issue.thumbImg ? issue.thumbImg : "No picture found",
        };
      });

      let isAllIssuesPublished = issues.every((issue) => issue != null);

      return exits.success({
        count: titleHasOneIssue.length,
        page: Number(req.param("page")),
        issues: isAllIssuesPublished ? issues : [],
      });
    } catch (error) {
      sails.log.error("Get post error:", error);
      return exits.invalidUser({ message: "Application key is invalid." });
    }
  },
};
