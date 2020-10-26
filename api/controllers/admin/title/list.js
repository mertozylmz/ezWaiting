module.exports = {
  friendlyName: "List titles",

  description: "Render title list.",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/title/list"
    }
  },

  fn: async function (inputs, exits) {

    let req= this.req;

    let userId = req.session.passport.user

    let loggedInUser = await User.findOne({
      id: userId,
    });

    let titles;

    if(loggedInUser.userRole == 'USER_ROLE_PUBLISHER'){
      titles = await Title.find({ isDeleted: false, publisher :userId});

    }else{
      titles = await Title.find({ isDeleted: false });
    }


    return exits.success({
      layout: "layouts/layout-admin",
      section: "title",
      subSection: "title-list",
      mainName: 'Title',
      mainSubName: 'Title List',
      titles: titles,
    });
  },
};
