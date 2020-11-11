module.exports = {
  friendlyName: "Logout",

  description: "Logout user from panel.",

  inputs: {},

  exits: {
    succes: {
      description: "Logout from panel.",
    },
  },

  fn: async function (inputs) {
    let req = this.req;
    let res = this.res;

    req.logout();
    res.redirect("/auth/login");
  },
};
