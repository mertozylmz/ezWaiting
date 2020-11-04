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

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    let countries = await Country.find();

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'location',
      subSection :'location-create',
      mainName: 'Location',
      mainSubName: 'Location Create',
      countries:countries,
      errors:errors
    });
  },
};

