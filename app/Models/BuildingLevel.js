'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BuildingLevel extends Model {

    static get createdAtColumn () {
        return null
    }

    static get updatedAtColumn () {
        return null
    }
    
    building() {
        return this.belongsTo('App/Models/Building', 'building_id')
    }

    cost() {
        return this.belongsTo('App/Models/Resource', 'cost_resource_id')
    }

    yield() {
        return this.belongsTo('App/Models/Resource', 'yield_resource_id')
    }

}

module.exports = BuildingLevel
