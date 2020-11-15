const Papa = require("papaparse");
var request = require("request");

module.exports = {
  friendlyName: "Process CSV",

  description: "Process CSV File",

  inputs: {},

  exits: {
    success: {
      description: "Response done succesfully.",
    },
  },

  fn: async function (inputs, exits) {
    let req = this.req;

    let locationFile = await LocationFile.findOne({
      id: req.param("id"),
    });

    const options = {
      /* options */
    };

    const parseStream = Papa.parse(Papa.NODE_STREAM_INPUT, options);

    const dataStream = request.get(locationFile.link).pipe(parseStream);

    let data = [];

    parseStream.on("data", (chunk) => {
      data.push(chunk);
    });

    let country = await Country.findOne({
      name: "India",
    });

    dataStream.on("finish", async () => {
      for (let i = 0; i < data.length; i++) {
        if (i == 0) {
          continue;
        }

        let location = data[i];

        await Location.create({
          name: location[0],
          address: location[1],
          city: location[2],
          state: location[3],
          zip: location[4],
          normalized: location[5],
          latitude: location[7],
          longitude: location[6],
          country: country.id,
          radius: 50,
          createdBy: req.user.id,
        });
      }
    });

    await LocationFile.updateOne({ id: req.param('id') }).set({
      isProcessed: true,
      modifiedBy: req.user.id
    });

    return exits.success({
      status: true,
    });
  },
};
