'use strict'

const Building = use('App/Models/Building')

/*
|--------------------------------------------------------------------------
| BuildingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BuildingSeeder {

	async run() {

		const buildings = ['castle', 'house', 'smith', 'farm', 'lumbermill', 'stables']

		for (let label of buildings) {
			await Building.create({ label })
		}

	}

}

module.exports = BuildingSeeder
