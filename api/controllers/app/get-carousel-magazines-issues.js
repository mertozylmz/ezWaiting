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
          isCarousel: true,
        },
        skip: (req.param("page") - 1) * limit,
        limit: limit,
      }).populate("issues");

      let titleHasOneIssue = titles.filter((title) => {
        return title.issues.length > 0;
      });

      let issues = await titleHasOneIssue.map(async (title) => {
        let issue = title.issues.pop();

        let pdf = await Pdf.findOne({
          issue: issue.id,
          isDeleted: false,
          isActive: true
        });

        return {
          id: issue.id,
          name: issue.name,
          issueDescription: issue.description,
          thumbImg: (pdf) ? pdf.thumbImg : null ,
        };
      });

      let finalIssues = await Promise.all(issues);

      return exits.success({
        count: titleHasOneIssue.length,
        page: Number(req.param("page")),
        issues: finalIssues,
      });
    } catch (error) {
      sails.log.error("Get post error:", error);
      return exits.invalidUser({ message: "Application key is invalid." });
    }
  },
};
