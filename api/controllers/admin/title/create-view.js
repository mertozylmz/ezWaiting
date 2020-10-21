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
    const publishers = await User.find({ userRole: "USER_ROLE_PUBLISHER" });
    const countries = await Country.find();
    const categories = await Category.find();

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'title',
      subSection :'title-create',
      publishers,
      countries,
      categories
    });
  },
};
