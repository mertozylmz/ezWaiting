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
  "admin/login": true,

  //Publisher Routes
  "admin/category/*": ["isAuthenticated", "isRoleAdmin", "isAllGranted"],
  "admin/issue/*": [
    "isAuthenticated",
    "isRoleAdmin",
    "isRolePublisher",
    "isAllGranted",
  ],
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
