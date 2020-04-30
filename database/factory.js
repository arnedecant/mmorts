'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {

	return {
		username: faker.username(),
		email: faker.email({ domain: 'example.com' }),
		password: 'pwd4test',
		race: faker.pickone(['human', 'orc'])
	}
})

Factory.blueprint('App/Models/Village', (faker) => {

	return {
		// name: faker.capitalize(faker.word()),
		name: faker.city(),
		x: faker.integer({ min: -30, max: 30 }),
		y: faker.integer({ min: -30, max: 30 })
	}
})
