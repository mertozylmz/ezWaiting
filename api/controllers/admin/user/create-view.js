module.exports = {
  friendlyName: "Create User View",

  description: "Render create form for user",

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/user/create",
    },
  },

  fn: async function (exits) {
    //Render view as return with layout.

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'user',
      subSection :'user-create'
    });
  },
};
