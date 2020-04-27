'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HeroSchema extends Schema {
  up () {
    this.create('heroes', (table) => {
      table.increments()
      table.string('name')
			table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('heroes')
  }
}

module.exports = HeroSchema
