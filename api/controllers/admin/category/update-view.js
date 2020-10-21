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

    let category = await Category.findOne({
      id: req.param('id')
    });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "category",
      subSection: "category-list",
      category: category
    });
  },
};
