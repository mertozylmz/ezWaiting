/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': { view: 'pages/homepage' },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against 'shadow routes' (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/

   //Auth Routes

  'GET /auth/login': { action: 'admin/login/login-view' },
  'POST /auth/login': { action: 'admin/login/login' },

  //Admin Routes

  'GET /admin/dashboard': { action: 'admin/utils/dashboard' },

  //Admin-User Routes

  'GET /admin/user/create': {action: 'admin/user/create-view'},
  'POST /admin/user/create': {action: 'admin/user/create'},
  'GET /admin/user/list': {action: 'admin/user/list'},
  'GET /admin/user/update': {action: 'admin/user/update-view'},
  'POST /admin/user/update': {action: 'admin/user/update'},
  'GET /admin/user/create': {action: 'admin/user/delete'},

  //Admin-Issue Routes
  'GET /admin/issue/create': {action: 'admin/issue/create-view'},
  'POST /admin/issue/create': {action: 'admin/issue/create'},
  'GET /admin/issue/list': {action: 'admin/issue/list'},
  'GET /admin/issue/update': {action: 'admin/issue/update-view'},
  'POST /admin/issue/update': {action: 'admin/issue/update'},
  'GET /admin/issue/create': {action: 'admin/issue/delete'},

  //Admin-Location Routes
  'GET /admin/location/create': {action: 'admin/location/create-view'},
  'POST /admin/location/create': {action: 'admin/location/create'},
  'GET /admin/location/list': {action: 'admin/location/list'},
  'GET /admin/location/update/:id': {action: 'admin/location/update-view'},
  'POST /admin/location/update/:id': {action: 'admin/location/update'},
  'GET /admin/location/delete/:id': {action: 'admin/location/delete'},

  //Admin-Publisher Routes
  'GET /admin/publisher/create': {action: 'admin/publisher/create-view'},
  'POST /admin/publisher/create': {action: 'admin/publisher/create'},
  'GET /admin/publisher/list': {action: 'admin/publisher/list'},
  'GET /admin/publisher/update/:id': {action: 'admin/publisher/update-view'},
  'POST /admin/publisher/update/:id': {action: 'admin/publisher/update'},
  'GET /admin/publisher/delete/:id': {action: 'admin/publisher/delete'},

  //Admin-Title Routes
  'GET /admin/title/create': {action: 'admin/title/create-view'},
  'POST /admin/title/create': {action: 'admin/title/create'},
  'GET /admin/title/list': {action: 'admin/title/list'},
  'GET /admin/title/update/:id': {action: 'admin/title/update-view'},
  'POST /admin/title/update/:id': {action: 'admin/title/update'},
  'GET /admin/title/delete/:id': {action: 'admin/title/delete'},
};
