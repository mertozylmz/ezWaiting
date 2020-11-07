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

      let category = await Category.findOne({ id: req.param('catId') });

      let limit = 20;

      let allTitles = await Title.find({
        where: {
          isActive: true,
          isDeleted: false,
        },
        skip: (req.param("page") - 1) * limit,
        limit: limit,
      }).populate("issues").populate('categories');

      console.log(allTitles);

      let titleHasOneIssue = allTitles.filter((title) => {
        if(category == title.categories.id && title.issues.length > 0){
          return title.issues
        }
      });

      console.log(titleHasOneIssue);

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
