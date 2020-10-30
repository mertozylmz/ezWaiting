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

module.exports.bootstrap = async function () {
  // Whether or not to continue doing the stuff in this file (i.e. wiping and regenerating data)
  // depends on some factors:
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // If the hard-coded data version has been incremented, or we're being forced
  // (i.e. `--drop` or `--environment=test` was set), then run the meat of this
  // bootstrap script to wipe all existing data and rebuild hard-coded data.
  if (
    sails.config.models.migrate !== "drop" &&
    sails.config.environment !== "test"
  ) {
    // If this is _actually_ a production environment (real or simulated), or we have
    // `migrate: safe` enabled, then prevent accidentally removing all data!
    if (
      process.env.NODE_ENV === "production" ||
      sails.config.models.migrate === "safe"
    ) {
      sails.log(
        "Since we are running with migrate: 'safe' and/or NODE_ENV=production (in the \"" +
          sails.config.environment +
          '" Sails environment, to be precise), skipping the rest of the bootstrap to avoid data loss...'
      );
      return;
    } //•

  } else {
    sails.log(
      "Running bootstrap script because it was forced...  (either `--drop` or `--environment=test` was used)"
    );
  }

  // Since the hard-coded data version has been incremented, and we're running in
  // a "throwaway data" environment, delete all records from all models.
  for (let identity in sails.models) {
    await sails.models[identity].destroy({});
  } //∞

  await sails.helpers.data.seedData(sails.config.environment);
};
