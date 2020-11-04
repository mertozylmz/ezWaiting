var yup = require('yup');

// Schemas

exports.schemaCategory = yup.object().shape({
  name: yup.string().required(),
});
