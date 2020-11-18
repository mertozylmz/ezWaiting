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
    zip: {
      type: 'string',
      description: "Zip value of the location."
    },

    normalized: {
      type: 'string',
      description: 'Normalized address of the location.'
    },

    coordinates: {
      type: 'json',
      description: "Long, Lat value of location.",
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

  findNear: async function (conditions, callback) {
    var db = Location.getDatastore().manager;
    var collection = db.collection(Location.tableName);

    console.log(conditions);

    collection.aggregate([{
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [conditions.lng, conditions.lat]
        },
        distanceField: "dist.calculated",
        distanceMultiplier: 0.001,
        maxDistance: conditions.maxDistance * 1000.0,
        spherical: true
      }
    }, {
      $limit: conditions.limit
    }]).toArray((err, result) => {
      // if (err) return console.log(err)
      callback(err, result);
    });

    /* collection.geoNear({
      type: "Point",
      coordinates: [conditions.lng, conditions.lat]
    }, {
      limit: conditions.limit,
      maxDistance: conditions.maxDistance * 1000.0,
      distanceMultiplier: 0.001,
      spherical: true
    }, function (err, stations) {
      if (err) return callback(err);
      return callback(null, stations.results);
    }); */
  }
};
