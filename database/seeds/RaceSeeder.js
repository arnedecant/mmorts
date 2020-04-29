'use strict'

const Race = use('App/Models/Race')

/*
|--------------------------------------------------------------------------
| RaceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RaceSeeder {
	async run() {

		await Race.create({ label: 'human' })
		await Race.create({ label: 'orc' })
		
	}
}

module.exports = RaceSeeder
