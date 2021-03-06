module.exports = {
  friendlyName: "Pdf upload",

  description: "Pdf upload function for issues.",

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

      let publisher = req.param("pid");
      let title = req.param("tid");
      let issue = req.param("iid");

      let folderName = `issues/${publisher}/${title}/${issue}`;

      var supportedFileFormat = ["application/pdf"];
      var fileType = req.file("file")._files[0].stream.headers["content-type"];

      if (!supportedFileFormat.includes(fileType)) {
        return exits.invalidRequest({
          errors: [
            {
              message: "File format must be PDF only.",
            },
          ],
        });
      }

      const directoryName = `${folderName}`;

      await req.file("file").upload(
        {
          adapter: require("skipper-azure"),
          key: "ezwaitingstorage",
          secret:
            "",
          container: "ezmagazinefiles",
          dirname: directoryName,
          maxBytes: 10000000000,
        },
        async function whenDone(err, uploadedFiles) {
          console.log(err);
          await Pdf.create({
            link: `https://ezwaitingstorage.blob.core.windows.net/ezmagazinefiles/${uploadedFiles[0].fd}`,
            issue: issue,
            thumbImages: {},
            isProcessed: false
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
