'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Building extends Model {

    static get createdAtColumn () {
        // return 'created_at'
        return null
    }

    static get updatedAtColumn () {
        // return 'updated_at'
        return null
    }
    
}

module.exports = Building
