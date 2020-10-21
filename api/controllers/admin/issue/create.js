module.exports = {


  friendlyName: 'Create',


  description: 'Create issue.',


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
      type: 'string'
    }
  },

  exits: {
    invalidRequest: {
      statusCode: 500,
    },
  },

  fn: async function (inputs, exits) {
    try {
      let res = this.res;

      let issue = await Issue.create({
        name: inputs.name,
        issueLiveDate: inputs.issueLiveDate,
        description: inputs.description,
        status: inputs.status,
        title: inputs.title
      }).fetch();

      return res.redirect('/issue/update/' + issue.id);
    } catch (error) {
      console.log("Create issue error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  }


};
