var yup = require('yup');

// Schemas

exports.schemaLocation = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  radius: yup.number().required(),
  city: yup.string().required(),
  state: yup.string().required()
});
