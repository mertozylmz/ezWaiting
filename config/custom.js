/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // sendgridSecret: 'SG.fake.3e0Bn0qSQVnwb1E4qNPz9JZP5vLZYqjh7sn8S93oSHU',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  privateKey: "HKv4PZ1QZqOm0524eJkZ38qtsbWPGUIYkfc6GB",
  jwtEncryptionOptions: { expiresIn:'365d'},

  errorCodes: {
    invalidAppName: { code: '401', message: 'Application key is invalid.'},
    noAppName: {code: '027', message: 'No app_name header found' },
  },
};
