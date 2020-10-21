module.exports = {
  friendlyName: "Update view",

  description: "Render update form for title",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/title/update",
    },
  },

  fn: async function (inputs, exits) {
    let req = this.req;

    const title = await Title.findOne({ id: req.param("id") });

    const publishers = await User.find({ userRole: "USER_ROLE_PUBLISHER" });
    const countries = await Country.find();
    const categories = await Category.find();
    const issues = await Issue.find();

    return exits.success({
      layout: "layouts/layout-admin",
      section: "publisher",
      subSection: "publisher-list",
      title,
      publishers,
      countries,
      categories,
      issues,
    });
  },
};
