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
    let titles = await Title.find();

    return exits.success({
      layout: "layouts/layout-admin",
      section: "title",
      subSection: "title-list",
      titles: titles,
    });
  },
};
