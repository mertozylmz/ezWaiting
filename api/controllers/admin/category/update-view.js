module.exports = {
  friendlyName: "Update Category View",

  description: "Render update form for category",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/category/update",
    },
  },

  fn: async function (inputs,exits) {

    let req = this.req;

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    let category = await Category.findOne({
      id: req.param('id')
    });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "category",
      subSection: "category-list",
      mainName: 'Category',
      mainSubName: 'Category List',
      category: category,
      errors: errors
    });
  },
};
