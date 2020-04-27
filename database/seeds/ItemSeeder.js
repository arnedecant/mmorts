'use strict'

const Item = use('App/Models/Item')
const Resource = use('App/Models/Resource')

/*
|--------------------------------------------------------------------------
| ItemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ItemSeeder {

	async run() {

		const items = [{
			label: 'mount',
			food: 100,
			leather: 10
		}, {
			label: 'sword',
			iron: 10,
			leather: 1
		}, {
			label: 'axe',
			iron: 5,
			wood: 5,
			leather: 1
		}, {
			label: 'bow',
			wood: 20
		}, {
			label: 'staff',
			wood: 10,
			leather: 2
		}, {
			label: 'shield',
			iron: 20,
			leather: 4
		}, {
			label: 'heavy_armor',
			iron: 50,
			leather: 10
		}, {
			label: 'medium_armor',
			leather: 50
		}]

		for (let obj of items) {

			let { label, ...cost } = obj
			
			const resource = await Resource.create(cost)
			const item = await Item.create({ label })

			await item.cost().associate(resource)

		}

	}

}

module.exports = ItemSeeder
