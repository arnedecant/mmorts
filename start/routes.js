'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/register', 'UserController.register')
Route.post('/login', 'UserController.login')

Route.put('/posts/:id', 'PostController.update').middleware('auth')
Route.delete('posts/id', 'PostController.delete').middleware('auth')
Route.post('/posts', 'PostController.store').middleware('auth')
Route.get('/posts', 'PostController.getPosts')

Route.get('/api/buildings', 'BuildingController.index')
Route.get('/api/units', 'UnitController.index')
Route.get('/api/items', 'ItemController.index')
Route.get('/api/heroes', 'HeroController.index')
Route.get('/api/villages', 'VillageController.index')

Route.get('/api/buildings/:id', 'BuildingController.show')
Route.get('/api/units/:id', 'UnitController.show')
Route.get('/api/items/:id', 'ItemController.show')
Route.get('/api/heroes/:id', 'HeroController.show')
Route.get('/api/villages/:id', 'VillageController.show')