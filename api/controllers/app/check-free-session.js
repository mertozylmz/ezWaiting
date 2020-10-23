const sortByDistance = require("sort-by-distance");
const FreeSession = require("../../models/FreeSession");
module.exports = {
  friendlyName: "Get categories",

  description: "Get categories which has issues",

  inputs: {
    latitude: {
      type: "number",
      description: "Latitude of user",
    },
    longitude: {
      type: "number",
      description: "Longitude of user",
    },
  },

  exits: {
    success: {
      description: "List elements of categories",
      statusCode: 204,
    },
    invalidUser: {
      statusCode: 401,
      description: "The provided user does not exists",
    },
    invalidRequest: {
      statusCode: 400,
      description: "Invalid request",
    },
  },

  fn: async function (inputs, exits) {
    try {
      let req = this.req;

      let locations = await Location.find({
        isDeleted: false,
        isActive: true,
      });

      let points = locations.map((location) => {
        return {
          location: location.id,
          latitude: location.latitude,
          longitude: location.longitude,
          radius: location.radius,
        };
      });

      const opts = {
        yName: "latitude",
        xName: "longitude",
      };

      const origin = { longitude: inputs.longitude, latitude: inputs.latitude };

      const mainSortedPoints = sortByDistance(origin, points, opts);

      let nearestPoint = mainSortedPoints[0];

      if (nearestPoint.distance <= nearestPoint.radius) {
        let freeSession = await FreeSession.create({
          isEzWaitingRoom: true,
          locationId: nearestPoint.location,
          startTimeInSec: new Date().getTime() + 15 * 60 * 1000,
          endTimeInSec: new Date().getTime() + 240 * 60 * 1000,
          currentTimeInSec: new Date().getTime() + 15 * 60 * 1000,
        }).fetch();

        return exits.success({
          isEzWaitingRoom: freeSession.isEzWaitingRoom,
          locationId: freeSession.locationId,
          freeSession: {
            startTimeInSec: freeSession.startTimeInSec,
            endTimeInSec: freeSession.endTimeInSec,
          },
          currentTimeInSec: freeSession.currentTimeInSec,
        });
      } else {
        return exits.invalidRequest({ mesage: "No location found near." });
      }
    } catch (error) {
      sails.log.error("Get post error:", error);
      return exits.invalidUser({ message: "Application key is invalid." });
    }
  },
};
