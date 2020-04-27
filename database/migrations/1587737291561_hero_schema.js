'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HeroSchema extends Schema {
  up () {
    this.create('heroes', (table) => {
      table.increments()
      table.string('label')
      // table.timestamps()
    })
  }

  down () {
    this.drop('heroes')
  }
}

module.exports = HeroSchema
