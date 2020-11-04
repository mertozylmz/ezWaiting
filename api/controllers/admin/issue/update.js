var { schemaIssue } = require("../../../validations/issue");

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


      let requestParamsIssue = {
        name: inputs.name,
        issueLiveDate: inputs.issueLiveDate,
        description: inputs.description,
        status: inputs.status,
        title: inputs.title,
        modifiedBy: req.user.id
      }

      schemaCategory
      .validate(requestParamsIssue)
      .then(async function () {
        await Issue.updateOne({ id: req.param('id') }).set(requestParamsIssue);

        return res.redirect("/admin/issue/update/" + req.param('id'));
      })
      .catch(function (err) {
        req.session.yup_errors = err.errors;
        return res.redirect("/admin/issue/update/" + req.param('id'));
      });

    } catch (error) {
      console.log("Create issue error: ", error);
      return exits.invalidRequest({
        message: "Oops a problem occured.",
      });
    }
  }


};
