/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/

  // '*': true,
  "admin/login/login-view": true,
  "admin/login/login": true,
  "admin/login/logout": ['isAllGranted'],

  //Publisher Routes
  "admin/category/*": ["isAuthenticated", "isRoleAdmin", "isAllGranted"],
  "admin/issue/*": ["isAuthenticated", "isRoleAdmin", "isAllGranted"],
  "admin/location/*": ["isAuthenticated", "isRoleAdmin", "isAllGranted"],
  "admin/publisher/*": ["isAuthenticated", "isRoleAdmin", "isAllGranted"],
  "admin/title/*": [
    "isAuthenticated",
    "isRoleAdmin",
    "isRolePublisher",
    "isAllGranted",
  ],
  "admin/user/*": ["isAuthenticated", "isRoleAdmin", "isAllGranted"],
  "admin/utils/*": [
    "isAuthenticated",
    "isRoleAdmin",
    "isRolePublisher",
    "isAllGranted",
  ],

  //API Route Policies
  "app/security/*": ["isAppNameValid"],
  "app/*": ["isAppNameValid", "isTokenAuthenticated"],
};
