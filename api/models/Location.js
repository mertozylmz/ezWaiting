/**
 * Location.js
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
      description: "Name value of the location.",
    },

    address: {
      type: "string",
      description: "Adress value of location.",
    },

    latitude: {
      type: "number",
      description: "Latitude value of location.",
    },

    longitude: {
      type: "number",
      description: "Longitude valeu of location.",
    },

    radius: {
      type: "number",
      description: "Radius value of location",
    },

    city: {
      type: "string",
      description: "City value of location.",
    },

    state: {
      type: "string",
      description: "State value of location.",
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    // many-to-one relations

    country: {
      model: "country",
    },

    // many-to-many relations

    titles: {
      collection: "title",
      via: "locations",
    },
  },
};
