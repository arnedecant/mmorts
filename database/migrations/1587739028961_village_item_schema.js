'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VillageItemSchema extends Schema {
  up () {
    this.create('village_items', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('village_items')
  }
}

module.exports = VillageItemSchema
