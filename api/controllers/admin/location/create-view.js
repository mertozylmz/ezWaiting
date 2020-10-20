module.exports = {
  friendlyName: "Create Location View",

  description: "Render create form for location",

  inputs: {

  },

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/location/create",
    },
  },

  fn: async function (inputs, exits) {
    let countries = await Country.find();

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'location',
      subSection :'location-create',
      countries:countries
    });
  },
};

