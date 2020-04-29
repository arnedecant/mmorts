'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildingLevelSchema extends Schema {
  up () {
    this.create('building_levels', (table) => {
      table.increments()
      table.integer('level').defaultsTo(0)
      table.integer('building_id').unsigned()
			table.foreign('building_id').references('Building.id').onDelete('cascade')
      table.integer('cost_resource_id').unsigned()
			table.foreign('cost_resource_id').references('Resource.id').onDelete('cascade')
      table.integer('yield_resource_id').unsigned()
			table.foreign('yield_resource_id').references('Resource.id').onDelete('cascade')
      // table.timestamps()
    })
  }

  down () {
    this.drop('building_levels')
  }
}

module.exports = BuildingLevelSchema
