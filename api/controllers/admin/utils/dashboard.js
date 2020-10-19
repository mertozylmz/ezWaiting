module.exports = {
  friendlyName: "Dashboard view",

  description: "Render dashboard view for admin ",

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/utils/dashboard",
    },
  },

  fn: async function (inputs, exits) {
    //Render view as return with layout.
    return exits.success({
      layout: "layouts/layout-admin",
      section: "",
      subSection: "",
    });
  },
};
