module.exports = {
  friendlyName: "Create Title View",

  description: "Render create form for title",

  inputs: {

  },

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/title/create",
    },
  },

  fn: async function (inputs, exits) {
    //Render view as return with layout.

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'title',
      subSection :'title-create'
    });
  },
};
