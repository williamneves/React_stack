const { faker } = require('@faker-js/faker');
const express = require('express');
const port = 8000;
const app = express();

app.get('/api', (req, res) => {
	res.send('Our express api server is now sending this over to the browser');
});

// load the API server
const server = app.listen(port, () =>
	console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// const randomName = faker.name.findName(); // Rowan Nikolaus

// // create a class for a fake product with name, price and department
// class Product {
//   constructor ( name, price, department ) {
//     this.name = name;
//     this.price = price;
//     this.department = department;
//   }
// }

// create a class for a fake user with first name, last name, username, email and phone number
class User {
	constructor(firstName, lastName, username, email, phoneNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}
}

// create a class for a fake company with name, city, state, and country
class Company {
	constructor(name, city, state, country) {
		this.name = name;
		this.city = city;
		this.state = state;
		this.country = country;
	}
}

// create a function to create a fake user
const createUser = () => {
	const newUser = new User(
		(this.firstName = faker.name.firstName()),
		(this.lastName = faker.name.lastName()),
		(this.username = faker.internet.userName()),
		(this.email = faker.internet.email()),
		(this.phoneNumber = faker.phone.phoneNumber())
	);
	return newUser;
};

app.get('/api/fakeuser', (req, res) => {
	const fakeUser = createUser();
	res.json(fakeUser);
});

// create a function to create a fake company
const createCompany = () => {
	const newCompany = new Company(
		(this.name = faker.company.companyName()),
		(this.city = faker.address.city()),
		(this.state = faker.address.state()),
		(this.country = faker.address.country())
	);
	return newCompany;
};
app.get('/api/company', (req, res) => {
	const fakeCompany = createCompany();
	res.json(fakeCompany);
});

// const fakeUser1 = createUser();
// const fakeUser2 = createUser();
// const fakeCompany1 = createCompany();
// const fakeCompany2 = createCompany();

// console.log(fakeUser1);
// console.log(fakeUser2);
// console.log(fakeCompany1);
// console.log(fakeCompany2);
