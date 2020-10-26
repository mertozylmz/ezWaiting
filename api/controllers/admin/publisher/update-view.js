module.exports = {
  friendlyName: "Update Publisher View",

  description: "Render update form for publisher",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/publisher/update",
    },
  },

  fn: async function (inputs,exits) {

    let req = this.req;

    let publisher = await User.findOne({
      userRole: "USER_ROLE_PUBLISHER",
      id: req.param('id'),
    });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "publisher",
      subSection: "publisher-list",
      mainName: 'Publisher',
      mainSubName: 'Publisher Update',
      publisher: publisher
    });
  },
};
