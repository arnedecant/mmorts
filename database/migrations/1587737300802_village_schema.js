'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VillageSchema extends Schema {

	up() {
		this.create('villages', (table) => {
			table.increments()
			table.string('name')
			table.integer('stone').defaultTo(200)
			table.integer('iron').defaultTo(200)
			table.integer('wood').defaultTo(200)
			table.integer('food').defaultTo(400)
			table.integer('leather').defaultTo(0)
			table.integer('x')
			table.integer('y')
			table.integer('user_id').unsigned()
			table.foreign('user_id').references('Users.id').onDelete('cascade')
			// table.integer('world_id').unsigned()
			// table.foreign('world_id').references('Worlds.id').onDelete('cascade')
			table.timestamps()
		})
	}

	down() {
		this.drop('villages')
	}
}

module.exports = VillageSchema
