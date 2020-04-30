'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VillageItemSchema extends Schema {

	up() {
		this.create('village_items', (table) => {
			table.increments()
			table.integer('village_id').unsigned()
			table.foreign('village_id').references('Villages.id').onDelete('cascade')
			table.integer('unit_id').unsigned()
			table.foreign('unit_id').references('Units.id').onDelete('cascade')
			table.timestamps()
		})
	}

	down() {
		this.drop('village_items')
	}
	
}

module.exports = VillageItemSchema
