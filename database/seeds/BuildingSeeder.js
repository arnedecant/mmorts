'use strict'

const Building = use('App/Models/Building')
const BuildingLevel = use('App/Models/BuildingLevel')
const Resource = use('App/Models/Resource')

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

		// Resources: 
		// Cost per level, which increase by some percentage each level
		// Yield per level, which increase by some percentage each level
		
		const buildings = [
			{
				label: 'castle',
				cost: {	
					stone: 500,
					wood: 500
				}
			}, {
				label: 'house',
				cost: {
					stone: 50,
					wood: 50
				}
			}, {
				label: 'smith',
				cost: {
					stone: 150,
					wood: 150,
					iron: 150
				}
			}, {
				label: 'stables',
				cost: {
					stone: 200,
					wood: 200,
					leather: 100
				}
			}, {
				label: 'mine',
				cost: {
					stone: 200,
					wood: 200
				},
				yield: {
					iron: 10,
					stone: 10
				}
			}, {
				label: 'lumbermill',
				cost: {
					stone: 200,
					wood: 200
				},
				yield: {
					wood: 10
				}
			}, {
				label: 'farm',
				cost: {
					stone: 100,
					wood: 200,
					leather: 50,
					food: 50
				},
				yield: {
					leather: 5,
					food: 5
				}
			}
		]

		const levels = 20
		const standardMultiplier = 1.2

		for (let building of buildings) {

			const b = await Building.create({ label: building.label })

			for (let level = 0; level <= levels; level++) {

				let multiplier = standardMultiplier

				if (level == 0) multiplier = 5
				else if (level == 1) multiplier = 1
				else multiplier = Math.pow(multiplier, (level - 1))

				const blvl = await BuildingLevel.create({ level })
				await blvl.building().associate(b)

				if (building.cost) {
					let rc = await Resource.create(this.multiply(building.cost, multiplier))
					if (rc) await blvl.cost().associate(rc)
				}

				if (building.yield) {
					let ry = await Resource.create(this.multiply(building.yield, multiplier))
					if (ry) await blvl.yield().associate(ry)
				}

				console.log(`Seeded ${ building.label }, lvl: ${ level }`)

			}



		}

	}

	multiply({ ...object }, multiplier) {

		const threshold = 1500

		for (let key in object) {

			// Multiply by given multiplier

			let value = object[key] * multiplier

			// Round to nearest 10 if value is smaller than threshold
			// Round to nearest 100 if value is greater than threshold

			let round = (value < threshold) ? 10 : 100
			object[key] = Math.ceil(value / round) * round

		}

		return object

	}

}

module.exports = BuildingSeeder
