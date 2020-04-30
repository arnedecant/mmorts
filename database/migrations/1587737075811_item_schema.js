'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {

	up() {
		this.create('items', (table) => {
			table.increments()
			table.string('label')
			table.integer('resource_id').unsigned()
			table.foreign('resource_id').references('Resource.id').onDelete('cascade')
			// table.timestamps()
		})
	}

	down() {
		this.drop('items')
	}

}

module.exports = ItemSchema
