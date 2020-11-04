module.exports = {
  friendlyName: "Update view",

  description: "Render update form for title",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/title/update",
    },
  },

  fn: async function (inputs, exits) {
    let req = this.req;

    let userId = req.session.passport.user;

    var errors = req.session.yup_errors ? req.session.yup_errors : [];
    req.session.yup_errors = null;

    let loggedInUser = await User.findOne({
      id: userId,
    });

    let reqParams;
    let publishers;

    if(loggedInUser.userRole == 'USER_ROLE_PUBLISHER'){
      publishers = [loggedInUser];
      reqParams = {
        id: req.param('id'),
        publisher: userId
      }
    }else{
      publishers = await User.find({ userRole: "USER_ROLE_PUBLISHER" });
      reqParams = {
        id: req.param('id'),
      }
    }

    const title = await Title.findOne(reqParams).populate('categories').populate('countries');

    const countries = await Country.find();
    const categories = await Category.find();
    const issues = await Issue.find();

    return exits.success({
      layout: "layouts/layout-admin",
      section: "title",
      subSection: "title-list",
      mainName: 'Title',
      mainSubName: 'Title Update',
      title,
      publishers,
      countries,
      categories,
      issues,
      errors: errors
    });
  },
};
