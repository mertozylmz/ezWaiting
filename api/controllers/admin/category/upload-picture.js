module.exports = {
  friendlyName: "Image upload",

  description: "Image upload function for categories.",

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

      let category = req.param("pid");

      let folderName = `categories/${category}`;

      const directoryName = `${folderName}`;

      await req.file("file").upload(
        {
          adapter: require("skipper-azure"),
          key: "ezwaitingroomv2",
          secret: "",
          container: "magazinefiles",
          dirname: directoryName,
          maxBytes: 10000000000,
        },
        async function whenDone(err, uploadedFiles) {
          await Category.update({
            id: category
          }).set({
            thumbImg: `https://ezwaitingroomv2.blob.core.windows.net/magazinefiles/${uploadedFiles[0].fd}`
          });
        }
      );

      return res.send('OK');

    } catch (error) {
      console.log("Upload pdf issue error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};