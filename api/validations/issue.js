var yup = require('yup');

// Schemas

exports.schemaIssue = yup.object().shape({
  name: yup.string().required(),
  issueLiveDate: yup.string().required(),
  description: yup.string(),
  status: yup.string(),
});
