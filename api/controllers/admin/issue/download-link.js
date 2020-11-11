let axios = require("axios");
module.exports = {
  friendlyName: "Download link",

  description: "Download link file (returning a stream).",

  inputs: {},

  exits: {
    success: {
      description: "File downloaded",
    },
  },

  fn: async function (inputs) {
    try {
      let req = this.req;
      let res = this.res;

      const reqDownloadLink = req.param("link");

      const downloadLink = reqDownloadLink.split("//");

      console.log(downloadLink);

      const pdf = (
        await axios.get(downloadLink[1], { responseType: "arraybuffer" })
      ).data;
      if (!downloadLink || !pdf) {
        throw "not found";
      }
      res.attachment("magazine.pdf").send(pdf);
      return exits.success();
    } catch (error) {
      console.log(error);
    }
  },
};
