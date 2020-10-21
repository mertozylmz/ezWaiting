module.exports = {
  friendlyName: "List Publisher",

  description: "Render list form for publisher",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/publisher/list",
    },
  },

  fn: async function (inputs, exits) {
    let publishers = await User.find({
      userRole: "USER_ROLE_PUBLISHER",
      isDeleted: false
    });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "publisher",
      subSection: "publisher-list",
      publishers: publishers,
    });
  },
};
