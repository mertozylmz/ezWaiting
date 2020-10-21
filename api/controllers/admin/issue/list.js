module.exports = {


  friendlyName: 'List',


  description: 'List issue.',


  inputs: {

  },


  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/issue/list"
    }
  },


  fn: async function (_, exits) {
    const issues = await Issue.find();

    return exits.success({
      layout: 'layouts/layout-admin',
      section: 'issue',
      subSection: 'issue-list',
      issues: issues
    });
  }


};
