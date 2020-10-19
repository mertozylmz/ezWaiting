module.exports = {
  friendlyName: "Create Location View",

  description: "Render create form for location",

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/location/create",
    },
  },

  fn: async function (exits) {
    //Render view as return with layout.

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'location',
      subSection :'location-create'
    });
  },
};
