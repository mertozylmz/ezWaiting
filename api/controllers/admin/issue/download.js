let axios = require("axios");

module.exports = {
  friendlyName: "Download",

  description: "Download  file (returning a stream).",

  inputs: {},

  exits: {
    success: {
      description: "TEST",
    },
  },

  fn: async function (inputs, exits) {
    let pdfToDownload = await Pdf.findOne({
      id: this.req.param("id"),
    });

    let issue = await Issue.findOne({
      id: pdfToDownload.issue,
    });

    let downloadLink = pdfToDownload.link;

    const pdf = (await axios.get(downloadLink, { responseType: "arraybuffer" }))
      .data;
    if (!downloadLink || !pdf) {
      throw "not found";
    }
    this.res.attachment(issue.name + ".pdf").send(pdf);
    return exits.success();
  },
};
