module.exports = {
  friendlyName: "List",

  description: "List issue.",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/issue/list",
    },
  },

  fn: async function (inputs, exits) {
    let req = this.req;

    let userId = req.session.passport.user;

    let loggedInUser = await User.findOne({ id: userId });

    let issues = [];

    if (loggedInUser.userRole == "USER_ROLE_PUBLISHER") {
      let titles = await Title.find({
        publisher: userId,
        isDeleted: false,
      }).populate("issues");

      for (var i = 0; i < titles.length; i++) {
        if (titles[i].issues) issues.push(...titles[i].issues);
      }
    } else {
      issues = await Issue.find({
        isDeleted: false,
        isActive: true,
      });
    }

    return exits.success({
      layout: "layouts/layout-admin",
      section: "issue",
      subSection: "issue-list",
      mainName: "Issue",
      mainSubName: "Issue List",
      issues: issues,
    });
  },
};
