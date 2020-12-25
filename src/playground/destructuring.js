//destructuring of Object

const person = {
	name: "abhishek",
	age: 25,
	location: {
		city: "pandhurna",
		temp: 44,
	},
};

//normal destructuring;
//and we can set default value while destructuring
const { name: firstName = "anonymous", location } = person;
console.log(`hello ${firstName} and you're from `);

//destructuring with name change of the local variable;
const { city: cityName, temp: temperature } = person.location;

console.log(
	`hello im from ${cityName} and the temperature is very hot ${temperature} degree celsius`
);

//array destructuring

const item = ["coffee (hot)", "$2.00", "$2.50", "$.2.75"];

const [coffeeHot, smallPrice, mediumPrice, largePrice] = item;

console.log(`hello a ${coffeeHot} at price of ${mediumPrice}`);
