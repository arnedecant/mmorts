'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorldSchema extends Schema {
  up () {
    this.create('worlds', (table) => {
      table.increments()
      table.integer('number')
      table.integer('race_id').unsigned()
			table.foreign('race_id').references('Races.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('worlds')
  }
}

module.exports = WorldSchema
