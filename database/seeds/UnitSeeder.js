'use strict'

const Unit = use('App/Models/Unit')
const Resource = use('App/Models/Resource')

/*
|--------------------------------------------------------------------------
| UnitSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UnitSeeder {
	
	async run() {

		const resources = {
			low: await Resource.create({ food: 2 }),
			medium: await Resource.create({ food: 4 }),
			high: await Resource.create({ food: 8 }),
		}

		const units = {
			low: ['peasant', 'transport'],
			medium: ['footman', 'archer', 'scout', 'cavalry', 'siege'],
			high: ['sorceress', 'knight', 'priest']
		}

		for (let key in units) {
			for (let label in units[key]) {
				let unit = await Unit.create({ label })
				await unit.upkeep().associate(resources[key])
			}
		}

	}

}

module.exports = UnitSeeder
