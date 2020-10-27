module.exports = {
  friendlyName: "Pdf upload",

  description: "Pdf upload function for issues.",

  inputs: {},

  exits: {
    invalid: {
      description: 'The provided type is invalid',
      extendedDescription: 'If this request was sent from a graphical user interface, the request ' +
          'parameters should have been validated/coerced _before_ they were sent.',
      statusCode: 400
  },
    errorRequest: {
      statusCode: 500,
    },
  },

  fn: async function (inputs) {
    try {
      let res = this.res;
      let req = this.req;

      let publisher = req.param('pid');

      let title = req.param('tid');

      let issue = req.param('iid');

      let folderName =  `issues/${publisher}/${title}/${issue}`;

      var supportedFileFormat = ['application/pdf'];

      var fileType = this.req.file('file')._files[0].stream.headers['content-type'];
      if (!supportedFileFormat.includes(fileType)) {
          return exits.invalid({
              errors: [{
                  message: 'File format must be PDF only.'
              }]
          })
      }

      const directoryName = `${folderName}`;

      req.file('file')
      .upload({
        adapter: require('skipper-azure'),
        key: 'ezwaitingroomv2',
        secret: '',
        container: 'magazinefiles',
        dirname: directoryName,
        maxBytes: 1000000000
      }, async function whenDone(err, uploadedFiles) {
        if (err) return res.negotiate(err);

        await Pdf.create({
          link: `https://ezwaitingroomv2.blob.core.windows.net/magazinefiles/issues/${directoryName}`,
          issue: `issue`
        });

       return res.redirect('/admin/issue/update/issue');

      });

    } catch (error) {
      console.log("Upload pdf issue error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
