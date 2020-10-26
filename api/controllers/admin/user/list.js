module.exports = {
  friendlyName: "List user",

  description: "Render user form for publisher",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/user/list",
    },
  },

  fn: async function (inputs, exits) {
    let users = await User.find({
      userRole: "USER_ROLE_SUPER_ADMIN",
    });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "user",
      subSection: "user-list",
      mainName: 'User',
      mainSubName: 'User List',
      users: users,
    });
  },
};
