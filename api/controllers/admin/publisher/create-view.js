module.exports = {
  friendlyName: "Create Publisher View",

  description: "Render create form for publisher",

  inputs: {

  },

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/publisher/create",
    },
  },

  fn: async function (inputs, exits) {
    //Render view as return with layout.

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'publisher',
      subSection :'publisher-create'
    });
  },
};
