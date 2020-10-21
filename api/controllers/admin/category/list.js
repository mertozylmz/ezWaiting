module.exports = {
  friendlyName: "List category",

  description: "Render list form for category",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/category/list",
    },
  },

  fn: async function (inputs, exits) {
    let categories = await Category.find({ isDeleted: false });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "category",
      subSection: "category-list",
      categories: categories,
    });
  },
};
