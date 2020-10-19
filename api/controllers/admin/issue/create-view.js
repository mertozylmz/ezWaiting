module.exports = {
  friendlyName: "Create Issue View",

  description: "Render create form for issue",

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/issue/create",
    },
  },

  fn: async function (exits) {
    //Render view as return with layout.

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'issue',
      subSection :'issue-create'
    });
  },
};
