class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	introduce() {
		console.log(
			`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
		);
	}

	static introducePeople(people) {
		if (!Array.isArray(people)) {
			console.log('introducePeople only takes an array as an argument.');
		} else {
			let allInstanceTest = people.reduce((accum, person) => {
				return person instanceof Person ? accum : false;
			}, true);

			if (!allInstanceTest) {
				console.log(
					'All items in array must be Person class instances.'
				);
			} else {
				people.forEach(person => person.introduce());
			}
		}
	}
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
	module.exports = Person;
} catch {
	module.exports = null;
}
