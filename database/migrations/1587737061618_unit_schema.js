'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitSchema extends Schema {
  up () {
    this.create('units', (table) => {
      table.increments()
      table.string('label')
      table.integer('resource_id').unsigned()
			table.foreign('resource_id').references('Resource.id').onDelete('cascade')
      // table.timestamps()
    })
  }

  down () {
    this.drop('units')
  }
}

module.exports = UnitSchema
