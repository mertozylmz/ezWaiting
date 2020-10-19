/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    email: {
      type: "string",
      required: true,
      description: "Email value of user for logging in to admin panel.",
    },

    password: {
      type: "string",
      required: true,
      description: "Password value of the user for loggin in to admin panel.",
    },

    userRole: {
      type: "string",
      required: true,
      description:
        "User role string for checking policies and letting use the methods. USER_SUPER_ADMIN | USER_PUBLISHER | USER_MOBILE_USER",
    },

    companyName: {
      type: "string",
      description: "Company name of the Publisher role.",
    },

    firstName: {
      type: "string",
      description: "Publisher role first name value.",
    },

    lastName: {
      type: "string",
      description: "Publisher last name value.",
    },

    webSite: {
      type: "string",
      description: "Website URL of the Publisher role.",
    },

    address: {
      type: "string",
      description: "Address value of the Publisher role.",
    },

    phone: {
      type: "string",
      description: "Phone value of the Publisher role.",
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    //one-to-many relations

    titles: {
      collection: "title",
      via: "publisher",
    },
  },
  customToJSON: function () {
    return _.omit(this, ["password"]);
  },

  beforeCreate: function (user, cb) {
    const hash = bcrypt.hashSync(user.password, saltRounds);
    user.password = hash;
    return cb();
  },

  beforeUpdate: function (user, cb) {
    const hash = bcrypt.hashSync(user.password, saltRounds);
    user.password = hash;
    return cb();
  },
};
