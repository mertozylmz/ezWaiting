module.exports = {


  friendlyName: 'Hotspots',


  description: 'Hotspots app.',


  inputs: {
    latitude: {
      type: "number",
      description: "Latitude value of location.",
    },

    longitude: {
      type: "number",
      description: "Longitude valeu of location.",
    },
  },


  exits: {
    success: {
      description: 'List elements of the around location'
    }
  },


  fn: async function (inputs, exits) {
    try {
      let req = this.req;
      let res = this.res;

      var conditions = {
        lng: parseFloat(req.body.longitude) || 0,
        lat: parseFloat(req.body.latitude) || 0,
        maxDistance: Number(req.body.maxDistance) || 10000,
        limit: Number(req.body.limit) || 100,
      };

      Location.findNear(conditions, function (err, locations) {
        if (err) return res.negotiate(err);

        return exits.success({
          status: true,
          locations: locations
        });
      });

    } catch (error) {
      sails.log.error("Get post error:", error);
      return exits.invalidUser({ message: "Application key is invalid." });
    }
  }


};
