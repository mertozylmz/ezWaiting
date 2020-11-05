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
    let req = this.req;
    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    //TODO: SORT NAME
    let countries = await Country.find().sort('name ASC');

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

