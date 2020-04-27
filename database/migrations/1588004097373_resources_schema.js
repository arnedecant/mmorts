'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResourceSchema extends Schema {
  up () {
    this.create('resources', (table) => {
      table.increments()
      table.integer('stone').defaultTo(0)
      table.integer('iron').defaultTo(0)
      table.integer('wood').defaultTo(0)
      table.integer('food').defaultTo(0)
      table.integer('leather').defaultTo(0)
      // table.timestamps()
    })
  }

  down () {
    this.drop('resources')
  }
}

module.exports = ResourceSchema
