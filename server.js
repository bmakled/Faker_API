const { response, request } = require("express");
const express = require("express");
const app = express();
const port = 8000;

//two lines for middleware that will allow for POST, UPDATE, DELETE
app.use(express.json());
app.use(express.urlencoded({extended:true}))

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
let newUser = newFakeUser;
console.log(newUser);


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

let userCompany = [newUser,newCompanyObject]

app.get('/api/users/new', (request, response) => {
    response.json(newUser)
})

app.get('/api/companies/new', (request, response) => {
    response.json(newCompanyObject)
})

app.get('/api/user/company', (request, response) => {
    response.json(userCompany)

})
















app.listen( port, () => console.log(`Listening on port: ${port}`) );