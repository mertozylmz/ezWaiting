module.exports = {
  friendlyName: "Create Title View",

  description: "Render create form for title",

  inputs: {

  },

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/title/create",
    },
  },

  fn: async function (inputs, exits) {
    //Render view as return with layout.
    let req = this.req;

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    let publishers = null;

    let userId = req.session.passport.user

    let loggedInUser = await User.findOne({
      id: userId,
    });

    const countries = await Country.find({ isDeleted: false }).sort('name ASC');
    const categories = await Category.find({ isDeleted: false }).sort('name ASC');

    if (loggedInUser.userRole == 'USER_ROLE_PUBLISHER') {
      publishers = [loggedInUser];
    } else {
      publishers = await User.find({ userRole: "USER_ROLE_PUBLISHER", isDeleted: false });
    }

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'title',
      subSection: 'title-create',
      mainName: 'Title',
      mainSubName: 'Title Create',
      publishers,
      countries,
      categories,
      errors:errors
    });
  },
};
