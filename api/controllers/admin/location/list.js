module.exports = {
  friendlyName: "List Location",

  description: "Render list form for location",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/location/list",
    },
  },

  fn: async function (inputs, exits) {
    let locations = await Location.find().populate('country');

    return exits.success({
      layout: "layouts/layout-admin",
      section: "location",
      subSection: "location-list",
      mainName: 'Location',
      mainSubName: 'Location List',
      locations: locations,
    });
  },
};
