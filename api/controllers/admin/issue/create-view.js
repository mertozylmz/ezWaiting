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
    const titles = await Title.find();

    return exits.success({
      layout: "layouts/layout-admin",
      section: "issue",
      subSection: "issue-create",
      titles,
    });
  },
};
