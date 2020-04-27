'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VillageBuildingSchema extends Schema {
  up () {
    this.create('village_buildings', (table) => {
      table.increments()
      table.integer('village_id').unsigned()
      table.foreign('village_id').references('Villages.id').onDelete('cascade') 
      table.integer('building_id').unsigned()
			table.foreign('building_id').references('Buildings.id').onDelete('cascade')
      table.integer('level').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('village_buildings')
  }
}

module.exports = VillageBuildingSchema
