/**
 * Device.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
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

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },
};
