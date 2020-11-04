var yup = require('yup');

// Schemas

exports.schemaTitle = yup.object().shape({
  name: yup.string().required(),
  rating: yup.string().required(),
});
