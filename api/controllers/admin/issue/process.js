const axios = require("axios");
module.exports = {
  friendlyName: "Process Pdf",

  description: "Render list form for location",

  inputs: {},

  exits: {
    success: {
      description: "Response done succesfully.",
    },
  },

  fn: async function (inputs, exits) {
    try {
      let req = this.req;

      let issue = await Issue.findOne({
        id: req.param("id"),
      });

      let title =  await Title.findOne({
        id: issue.title
      });

      let publisher = await User.findOne({
        id: title.publisher
      });

      let pdf = await Pdf.findOne({
        issue: issue.id,
        isDeleted: false,
        isActive: true,
      });


      let link = pdf.link.split(
        "https://ezwaitingstorage.blob.core.windows.net/"
      )[1];

      let finalLink = `https://ezazurehttpapp.azurewebsites.net/api/ezhttptrigger?path=${link}&name=${issue.id}&code=07eoKipADc6f9MugL6HbLVkE9E2bofrKu3ejb/JtLK2IJbkYkF040Q==&`;

      const response = await axios.get(finalLink);

      let thumbImgs = [];

      for (var i = 0; i < Number(response.data.pages); i++) {
        thumbImgs.push(`${i}.jpg`);
      }

      let zipLink = `https://ezwaitingstorage.blob.core.windows.net/ezmagazinefiles/issues/${publisher.id}/${title.id}/${issue.id}/${issue.id}.zip`

      await Pdf.update({ id: pdf.id }).set({
        thumbImages: thumbImgs,
        zipLink: zipLink
      });

      return exits.success({
        status: true,
      });
    } catch (error) {
      console.log(error.response);
    }
  },
};
