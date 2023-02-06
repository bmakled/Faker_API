//import express from 'express';
//import { faker } from '@faker-js/faker';

// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');
const createUser = () => {
    const newFake = {
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        phonenumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        id: faker.datatype.number(10)
    };
    return newFake;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);


const createCompany = () => {
    const newFakeCompany = {
        name: faker.company.companyName(),
        addressStreet: faker.address.streetAddress(),
        addressCity: faker.address.cityName(),
        addressState: faker.address.state(),
        addressZip: faker.address.zipCode(),
        addressCountry: faker.address.country(),
        id: faker.datatype.number(10)
    };
    return newFakeCompany;
};
    
const newCompanyObject = createCompany();
console.log(newCompanyObject);