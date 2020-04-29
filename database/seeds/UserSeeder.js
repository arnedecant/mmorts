'use strict'

const User = use('App/Models/User')

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

class UserSeeder {

	async run() {

		// Create main testing user

		// await User.create({ username: 'artharos', email: 'hello@arnedecant.be', password: 'pwd4arne', race: 'orc' })

		// Create some randoms

		const users = await Factory.model('App/Models/User').createMany(5)
		console.log(users)
		// const races = ['human', 'orc']

		// for (let u of users) {

		// 	const race = races[Math.floor(Math.random() * races.length)]
		// 	const user = await User.create({ ...u, password: 'pwd4test', race })

		// }

	}

}

module.exports = UserSeeder
