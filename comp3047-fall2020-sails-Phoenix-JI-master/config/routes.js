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

  '/': 'QponController.Home',
  'GET /': 'QponController.Home',
  'GET /qpon': 'QponController.Home',

  'GET /qpon/create': 'QponController.create',
  'POST /qpon/create': 'QponController.create',

  'GET /qpon/json': 'QponController.json',
  'GET /qpon/list': 'QponController.list',

  'GET /qpon/detail/:id': 'QponController.detail',

  'GET /qpon/update/:id': 'QponController.update',
  'POST /qpon/update/:id': 'QponController.update',

  'POST /qpon/delete/:id': 'QponController.delete',

  'GET /qpon/search': 'QponController.search',

  'GET /qpon/getRest/:mall': 'QponController.getRest',

 

  'GET /user': 'UserController.login',
  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'POST /user/logout': 'UserController.logout',

  'GET /qpon/:id/masters': 'QponController.populate',
 // 'GET /user/:id/qponOwns': 'UserController.populate',

 'GET /user/qponOwns': 'UserController.populate',

  //'POST /user/:id/qponOwns/add/:fk': 'UserController.add',
  //'POST /user/:id/qponOwns/:fk': 'UserController.add', //restful API

  'POST /user/qponOwns/:fk': 'UserController.add', //restful API

 




  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
