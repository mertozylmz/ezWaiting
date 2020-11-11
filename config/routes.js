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

  "/": { view: "pages/homepage" },

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

  "GET /auth/login": { action: "admin/login/login-view" },
  "POST /auth/login": { action: "admin/login/login" },
  "GET /auth/logout": { action: "admin/login/logout" },

  //Admin Routes

  "GET /admin/dashboard": { action: "admin/utils/dashboard" },

  //Admin-User Routes
  "GET /admin/user/create": { action: "admin/user/create-view" },
  "POST /admin/user/create": { action: "admin/user/create" },
  "GET /admin/user/list": { action: "admin/user/list" },
  "GET /admin/user/update/:id": { action: "admin/user/update-view" },
  "POST /admin/user/update/:id": { action: "admin/user/update" },
  "GET /admin/user/delete/:id": { action: "admin/user/delete" },

  //Admin-Issue Routes
  "GET /admin/issue/create": { action: "admin/issue/create-view" },
  "POST /admin/issue/create": { action: "admin/issue/create" },
  "GET /admin/issue/list": { action: "admin/issue/list" },
  "GET /admin/issue/update/:id": { action: "admin/issue/update-view" },
  "POST /admin/issue/update/:id": { action: "admin/issue/update" },
  "GET /admin/issue/delete/:id": { action: "admin/issue/delete" },
  "GET /admin/issue/download/:id": {action: "admin/issue/download"},

  //Admin-Location Routes
  "GET /admin/location/create": { action: "admin/location/create-view" },
  "POST /admin/location/create": { action: "admin/location/create" },
  "GET /admin/location/list": { action: "admin/location/list" },
  "GET /admin/location/update/:id": { action: "admin/location/update-view" },
  "POST /admin/location/update/:id": { action: "admin/location/update" },
  "GET /admin/location/delete/:id": { action: "admin/location/delete" },

  //Admin-Publisher Routes
  "GET /admin/publisher/create": { action: "admin/publisher/create-view" },
  "POST /admin/publisher/create": { action: "admin/publisher/create" },
  "GET /admin/publisher/list": { action: "admin/publisher/list" },
  "GET /admin/publisher/update/:id": { action: "admin/publisher/update-view" },
  "POST /admin/publisher/update/:id": { action: "admin/publisher/update" },
  "GET /admin/publisher/delete/:id": { action: "admin/publisher/delete" },

  //Admin-Title Routes
  "GET /admin/title/create": { action: "admin/title/create-view" },
  "POST /admin/title/create": { action: "admin/title/create" },
  "GET /admin/title/list": { action: "admin/title/list" },
  "GET /admin/title/update/:id": { action: "admin/title/update-view" },
  "POST /admin/title/update/:id": { action: "admin/title/update" },
  "GET /admin/title/delete/:id": { action: "admin/title/delete" },

  //Admin-Category Routes
  "GET /admin/category/create": { action: "admin/category/create-view" },
  "POST /admin/category/create": { action: "admin/category/create" },
  "GET /admin/category/list": { action: "admin/category/list" },
  "GET /admin/category/update/:id": { action: "admin/category/update-view" },
  "POST /admin/category/update/:id": { action: "admin/category/update" },
  "GET /admin/category/delete/:id": { action: "admin/category/delete" },
  "POST /admin/category/upload/:id": { action: "admin/category/upload-picture" },
  "GET /admin/category/delete/picture/:id": {action: "admin/category/delete-picture"},
  

  //Admin-Upload-PDF Routes
  "POST /admin/pdf/upload/:pid/:tid/:iid": { action: "admin/issue/pdf-upload" },
  "GET /admin/pdf/delete/:id": { action: "admin/issue/delete-pdf" },

  //Mobil App API Routes
  "POST /api/v1/device": { action: "app/security/register-update-device-info" },
  "GET /api/v1/magazines/all/page/:page": {
    action: "app/get-magazines-latest-issues",
  },
  "GET /api/v1/magazines/carousel/page/:page": {
    action: "app/get-carousel-magazines-issues",
  },
  "GET /api/v1/magazines/category": { action: "app/get-categories-list" },
  "GET /api/v1/magazines/category/:catId/page/:page": {
    action: "app/get-magazine-latest-issue-category",
  },
  "POST /api/v1/ezwaiting/session": { action: "app/check-free-session" },
  "GET /api/v1/magazine/:issueId/download": {
    action: "app/get-magazine-issue-download",
  },
};
