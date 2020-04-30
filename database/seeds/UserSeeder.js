'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')
const Village = use('App/Models/Village')

class UserSeeder {

	async run() {

		const amount = 15
		let user, village

		// Create main testing user

		user = await User.create({ username: 'artharos', email: 'hello@arnedecant.be', password: 'pwd4arne', race: 'orc' })
		village = await Village.create({ name: 'Asgard', x: 0, y: 0 })

		village.user().associate(user)

		console.log(`Seeded user: ${ user.username }`)
		
		// Create some randoms

		for (let i = 0; i < amount; i++) {

			user = await Factory.model('App/Models/User').create()
			village = await Factory.model('App/Models/Village').create()

			village.user().associate(user)

			console.log(`Seeded user: ${ user.username }`)

		}

	}

}

module.exports = UserSeeder
