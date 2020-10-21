/**
 * Title.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: "string",
      description: "Name of the magazine/title",
    },

    rating: {
      type: "string",
      description: "Rating of the magazine/title",
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    // one-to-many relations

    publisher: {
      model: "user",
    },

    // many-to-many relations

    locations: {
      collection: "location",
      via: "titles",
    },

    categories: {
      collection: "category",
      via: "titles",
    },

    countries: {
      collection: "country",
      via: 'titles'
    },

    //one-to-one relations
    issue:{
      model:'issue',
      unique: true
    }
  },
};
