module.exports = {
  friendlyName: "Update Issue View",

  description: "Render update form for issue",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/issue/update",
    },
  },

  fn: async function (inputs, exits) {
    let req = this.req;

    let userId = req.session.passport.user;

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    let loggedInUser = await User.findOne({
      id: userId,
    });

    let issue = await Issue.findOne({ id: req.param("id") }).populate('title');

    let pdfs = await Pdf.find({
      issue: issue.id
    });

    const titles = await Title.find({ isDeleted: false });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "issue",
      subSection: "issue-list",
      mainName: 'Issue',
      mainSubName: 'Issue Update',
      issue: issue,
      titles,
      pdfs,
      title: issue.title,
      publisher: loggedInUser,
      errors: errors
    });
  },
};
