module.exports = {
  friendlyName: "Login view",

  description: "Render login view for admin ",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "admin/utils/login",
    },
  },

  fn: async function (inputs, exits) {
    //Render view as return with layout.

    let res = this.res;
    let req= this.req;

    if(req.user){
      res.redirect('/admin/dashboard');
    }

    return exits.success({layout: 'layouts/layout-login'});
  },
};
