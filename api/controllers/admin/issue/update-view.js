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

    let issue = await Issue.findOne({ id: req.param("id") });
    const titles = await Title.find({ isDeleted: false });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "issue",
      subSection: "issue-list",
      issue: issue,
      titles
    });
  },
};
