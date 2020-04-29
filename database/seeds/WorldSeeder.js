'use strict'

const World = use('App/Models/World')

/*
|--------------------------------------------------------------------------
| WorldSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class WorldSeeder {

	async run() {

		await World.create({ number: 1, race_id: 0 })
		await World.create({ number: 1, race_id: 1 })

	}

}

module.exports = WorldSeeder
