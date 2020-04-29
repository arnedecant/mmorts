'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class World extends Model {

    race() {
        return this.belongsTo('App/Models/Race')
    }

}

module.exports = World
