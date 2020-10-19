module.exports = {
  friendlyName: "Blank view",

  description: "Render blank view for admin ",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/user/blank",
    },
  },

  fn: async function (inputs, exits) {
    //Render view as return with layout.

    return exits.success({layout: 'layouts/layout-admin'});
  },
};
