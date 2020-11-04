module.exports = {
  friendlyName: "Create User View",

  description: "Render create form for user",

  inputs: {

  },

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/user/create",
    },
  },

  fn: async function (inputs, exits) {
    //Render view as return with layout.

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'user',
      subSection :'user-create',
      mainName: 'User',
      mainSubName: 'User Create',
      errors: errors
    });
  },
};
