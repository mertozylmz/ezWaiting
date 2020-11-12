module.exports = {
  friendlyName: "CSV upload",

  description: "CSV upload function for locations.",

  inputs: {},

  exits: {
    invalidRequest: {
      description: "The provided type is invalid",
      extendedDescription:
        "If this request was sent from a graphical user interface, the request " +
        "parameters should have been validated/coerced _before_ they were sent.",
      statusCode: 400,
    },
    errorRequest: {
      statusCode: 500,
    },
  },

  fn: async function (inputs, exits) {
    try {
      let res = this.res;
      let req = this.req;

      let file = await LocationFile.create({
        link: "",
        isProcessed: false
      }).fetch();

      let folderName = `csv/${file.id}`;

      console.log(folderName);


      const directoryName = `${folderName}`;

      await req.file("file").upload(
        {
          adapter: require("skipper-azure"),
          key: "ezwaitingroomv2",
          secret: "M9pwOy08NL0dMdlHUiqy569n2ffp0JAuSVIVpMbC577dEFGESZaQbuWr45TpyhTPkK+dxVr0fofhqXR9HKjxZA==",
          container: "magazinefiles",
          dirname: directoryName,
          maxBytes: 10000000000,
        },
        async function whenDone(err, uploadedFiles) {
          await LocationFile.update({ id: file.id }).set({
            link: `https://ezwaitingroomv2.blob.core.windows.net/magazinefiles/${uploadedFiles[0].fd}`
          });
        }
      );

      return res.send("OK");
    } catch (error) {
      console.log("Upload pdf issue error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
