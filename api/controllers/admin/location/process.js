let axios = require('axios');
module.exports = {
  friendlyName: "Process Pdf",

  description: "Render list form for location",

  inputs: {},

  exits: {
    success: {
      description: 'Response done succesfully.'
    },
  },

  fn: async function (inputs, exits) {

    const response = await axios.get('https://ezazurehttpapp.azurewebsites.net/api/ezhttptrigger?code=07eoKipADc6f9MugL6HbLVkE9E2bofrKu3ejb/JtLK2IJbkYkF040Q==&path='+req.param('path'));

    console.log(response);

    return exits.success({
      status :true
    });
  },
};
