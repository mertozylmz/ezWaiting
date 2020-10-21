module.exports = {


  friendlyName: 'Update',


  description: 'Update issue.',


  inputs: {
    name: {
      type: "string",
      required: true
    },
    issueLiveDate: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    status: {
      type: "boolean"
    },
    title: {
      type: "ref"
    }
  },


  exits: {
    invalidRequest: {
      statusCode: 500
    }
  },


  fn: async function (inputs, exits) {
    try {
      let res = this.res;
      let req = this.req;

      await Issue.updateOne({ id: req.param('id') }).set({
        name: inputs.name,
        issueLiveDate: inputs.issueLiveDate,
        description: inputs.description,
        status: inputs.status,
        title: inputs.title
      });

      return res.redirect("/admin/issue/update/" + req.param('id'));

    } catch (error) {
      console.log("Create issue error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  }


};
