module.exports = {
  friendlyName: "Create Title View",

  description: "Render create form for title",

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/title/create",
    },
  },

  fn: async function (exits) {
    //Render view as return with layout.

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'title',
      subSection :'title-create'
    });
  },
};
