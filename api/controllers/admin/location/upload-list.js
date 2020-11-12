module.exports = {
  friendlyName: "List Location",

  description: "Render list form for location csv files",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/location/upload-list",
    },
  },

  fn: async function (inputs, exits) {
    let files = await LocationFile.find({ isDeleted: false });

    return exits.success({
      layout: "layouts/layout-admin",
      section: "location",
      subSection: "location-upload-list",
      mainName: 'Location',
      mainSubName: 'Location Upload List',
      files: files,
    });
  },
};
