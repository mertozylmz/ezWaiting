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

    let userId = req.session.passport.user

    const titles = await Title.find({ publisher: userId, isDeleted: false, isActive: true });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "issue",
      subSection: "issue-create",
      mainName: 'Issue',
      mainSubName: 'Issue Create',
      titles
    });
  },
};
