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

    let publishers = null;

    let userId = req.session.passport.user

    let loggedInUser = await User.findOne({
      id: userId,
    });

    const countries = await Country.find();
    const categories = await Category.find();

    if(loggedInUser.userRole == 'USER_ROLE_PUBLISHER'){
      publishers = loggedInUser;
    }else{
      publishers = await User.find({ userRole: "USER_ROLE_PUBLISHER" });
    }

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'title',
      subSection :'title-create',
      mainName: 'Title',
      mainSubName: 'Title Create',
      publishers,
      countries,
      categories
    });
  },
};
