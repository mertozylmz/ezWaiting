module.exports = {
  friendlyName: "Register update device info",

  description: "Register device info and generate JWT token",

  inputs: {
    osVersion: {
      type: "string",
      required: true,
      description: "The OS version of the phone.",
    },
    deviceName: {
      type: "string",
      required: true,
      description: "Device name.",
    },
    platform: {
      type: "string",
      required: true,
      description: "The platform of the device.",
    },
    deviceModel: {
      required: true,
      type: "string",
      description: "The model of the device.",
    },
    deviceOSVersion: {
      required: true,
      type: "string",
      description: "Version of the OS of device.",
    },
    appVersion: {
      required: true,
      type: "string",
      description: "The version of the App.",
    },
    pushToken: {
      required: true,
      type: "string",
      description: "Push token for device.",
    },
    deviceId: {
      required: true,
      unique: true,
      type: "string",
      description: "Unique device Id.",
    },
  },

  exits: {
    success: {
      description: "New device registered.",
      statusCode: 200,
    },
    badRequest: {
      responseType: "badRequest",
      description: "The provided values are invalid.",
      statusCode: 400,
    },
    errorRequest: {
      statusCode: 500,
    },
  },

  fn: async function (inputs, exits) {
    try {
      //Get post values for registering new device.
      let requestParams = {
        osVersion: inputs.osVersion,
        deviceName: inputs.deviceName,
        platform: inputs.platform,
        deviceModel: inputs.deviceModel,
        deviceOSVersion: inputs.deviceOSVersion,
        appVersion: inputs.appVersion,
        pushToken: inputs.pushToken,
        deviceId: inputs.deviceId,
      };

      let device = await Device.create(requestParams).fetch();

      var tokenDetails = await sails.helpers.jwtEncryption(device.deviceId);

      return exits.success({ devideId: device.deviceId , accessToken: tokenDetails.token });
    } catch (error) {
      sails.log.error("Register device error: ", error);
      return exits.errorRequest();
    }
  },
};
