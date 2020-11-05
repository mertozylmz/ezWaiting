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
    let req = this.req;
    //Render view as return with layout.

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'publisher',
      subSection :'publisher-create',
      mainName: 'Publisher',
      mainSubName: 'Publisher Create',
      errors: errors
    });
  },
};
