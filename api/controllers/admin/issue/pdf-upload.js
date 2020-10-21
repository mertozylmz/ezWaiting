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

      let publisher = await User.findOne({
        id: req.param('pid'),
        userRole: 'USER_ROLE_PUBLISHER'
      });

      let title = await Title.findOne({
        id: req.param('tid'),
      });

      let issue = await Issue.findOne({
        id: req.param('iid'),
      });

      let folderName =  `issues/${publisher.id}/${title.id}/${issue.id}`;


      var uploadDir = process.cwd() + '/assets/uploads/' + folderName;
      var tempDir = process.cwd() + '/.tmp/public/uploads/' + folderName;

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

      await this.req.file('file').upload({
        dirname: uploadDir,
        maxBytes: 100000000
      },async function (err, uploadedFile) {
          if (err) {
              sails.log.error("Upload Image error:", err)
              return exits.errorRequest();
          }
          var localFileDir = uploadedFile[0].fd;




      });



    } catch (error) {
      console.log("Upload pdf issue error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  },
};
