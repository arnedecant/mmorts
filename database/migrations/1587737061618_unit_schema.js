'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitSchema extends Schema {
  up () {
    this.create('units', (table) => {
      table.increments()
      table.string('name')
			table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('units')
  }
}

module.exports = UnitSchema
