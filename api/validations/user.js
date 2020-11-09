var yup = require("yup");

// Schemas

exports.schemaUser = yup.object().shape({
  email: yup.string().required(),
  password: yup.string(),
  userRole: yup.string().required(),
  companyName: yup.string(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  webSite: yup.string(),
  address: yup.string(),
  phone: yup.string(),
});
