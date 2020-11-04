module.exports = {
  friendlyName: "Update Location View",

  description: "Render update form for location",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/location/update",
    },
  },

  fn: async function (inputs, exits) {
    let req = this.req;

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    let location = await Location.findOne({ id: req.param("id") }).populate(
      "country"
    );

    let countries = await Country.find();

    return exits.success({
      layout: "layouts/layout-admin",
      section: "location",
      subSection: "location-list",
      mainName: "Location",
      mainSubName: "Location Update",
      location: location,
      countries: countries,
      errors: errors
    });
  },
};
