module.exports = {


  friendlyName: 'List',


  description: 'List title.',


  inputs: {

  },


  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/title/list"
    }
  },


  fn: async function (inputs, exits) {

    const titles = await Title.find();

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'title',
      subSection: 'title-list',
      titles: titles
    });

  }


};
