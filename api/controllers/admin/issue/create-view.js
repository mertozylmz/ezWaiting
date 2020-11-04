module.exports = {
  friendlyName: "Create Issue View",

  description: "Render create form for issue",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/issue/create",
    },
  },

  fn: async function (inputs, exits) {
    //Render view as return with layout.
    let req = this.req;

    let userId = req.session.passport.user;

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    let user = await User.findOne({
      id: userId,
    });

    let titles;

    if (user.userRole == "USER_ROLE_PUBLISHER") {
      titles = await Title.find({
        publisher: userId,
        isDeleted: false,
        isActive: true,
      });
    } else {
      titles = await Title.find({ isDeleted: false, isActive: true });
    }

    return exits.success({
      layout: "layouts/layout-admin",
      section: "issue",
      subSection: "issue-create",
      mainName: "Issue",
      mainSubName: "Issue Create",
      titles,
      errors: errors
    });
  },
};
