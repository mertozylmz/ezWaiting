var { schemaIssue } = require("../../../validations/issue");

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
      type: 'ref'
    }
  },

  exits: {
    invalidRequest: {
      statusCode: 500,
    },
  },

  fn: async function (inputs, exits) {
    try {
      let req = this.req;
      let res = this.res;

      let requestParamsIssue = {
        name: inputs.name,
        issueLiveDate: inputs.issueLiveDate,
        description: inputs.description,
        status: 'pending',
        title: inputs.title
      }

      schemaIssue
      .validate(requestParamsIssue)
      .then(async function () {
        let issue = await Issue.create(requestParamsIssue).fetch();

        return res.redirect('/admin/issue/update/' + issue.id);
      })
      .catch(function (err) {
        req.session.yup_errors = err.errors;
        res.redirect("/admin/issue/create");
      });

    } catch (error) {
      console.log("Create issue error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  }


};
