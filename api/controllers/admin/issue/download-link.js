module.exports = {
  friendlyName: "Download link",

  description: "Download link file (returning a stream).",

  inputs: {
    success: {
      description: "File downloaded",
    },
  },

  exits: {},

  fn: async function (inputs) {
    let req = this.req;
    let res = this.res;

    const downloadLink = req.param("link");
    const pdf = (await axios.get(downloadLink, { responseType: "arraybuffer" }))
      .data;
    if (!downloadLink || !pdf) {
      throw "not found";
    }
    res.attachment("magazine.pdf").send(pdf);
    return exits.success();
  },
};
