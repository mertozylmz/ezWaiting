/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {
  if (sails.config.models.migrate == 'safe' && sails.config.environment == 'development') {
    for (let identity in sails.models) {
      await sails.models[identity].destroy({});
    }//∞

    await sails.helpers.seedData(sails.config.environment);}

  var db = Location.getDatastore().manager;

  var rawMongoCollection = db.collection(Location.tableName);
  rawMongoCollection.ensureIndex({
    coordinates: '2dsphere'
  }, function () {
    return done();
  });
};
