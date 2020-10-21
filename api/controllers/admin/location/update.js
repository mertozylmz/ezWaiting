module.exports = {
  friendlyName: "Update location",

  description: "Update location for system.",

  inputs: {
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

    country: {
      type: "string",
      description: "Country value of location.",
    },
  },

  exits: {
    invalidRequest: {
      statusCode: 500,
    },
  },

  fn: async function (inputs, exits) {
    try {
      let res = this.res;
      let req = this.req;

      await Location.updateOne({ id: req.param('id') }).set({
        name: inputs.name,
        address: inputs.address,
        latitude: inputs.latitude,
        longitude: inputs.longitude,
        radius: inputs.radius,
        city: inputs.city,
        state: inputs.state,
        country: inputs.country
      });

      return res.redirect("/admin/location/update/" + req.param('id'));

    } catch (error) {
      console.log("Create location error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
