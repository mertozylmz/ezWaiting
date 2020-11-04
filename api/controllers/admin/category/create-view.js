module.exports = {
  friendlyName: "Create Category View",

  description: "Render create form for category",

  inputs: {

  },

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/category/create",
    },
  },

  fn: async function (inputs, exits) {
    //Render view as return with layout.

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'category',
      subSection :'category-create',
      mainName: 'Category',
      mainSubName: 'Category Create',
      errors: errors
    });
  },
};
