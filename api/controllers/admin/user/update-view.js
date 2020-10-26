module.exports = {
  friendlyName: "Update User View",

  description: "Render update form for user",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/user/update",
    },
  },

  fn: async function (inputs,exits) {

    let req = this.req;

    let user = await User.findOne({
      userRole: "USER_ROLE_SUPER_ADMIN",
      id: req.param("id"),
    });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "user",
      subSection: 'user-list',
      user: "user-list",
      mainName: 'User',
      mainSubName: 'User Update',
      user: user,
    });
  },
};
