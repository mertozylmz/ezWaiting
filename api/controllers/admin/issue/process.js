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

    let req = this.req;

    let issue = await Issue.findOne({
      id: req.param('id')
    });

    let title = await Title.findOne({
      id: issue.title
    });

    let publisher = await User.findOne({
      id: title.publisher
    })

    const response = await axios.get('https://ezazurehttpapp.azurewebsites.net/api/ezhttptrigger?code=07eoKipADc6f9MugL6HbLVkE9E2bofrKu3ejb/JtLK2IJbkYkF040Q==&path=magazinefiles/issues/'+publisher.id+ '/' + title.id+ '/'+issue.id);

    console.log(response);

    return exits.success({
      status :true
    });
  },
};
