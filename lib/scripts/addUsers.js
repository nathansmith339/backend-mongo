// Run this file to add fake users
const Chance = require('chance');

const mongoDriver = require('../mongo/mongo-driver');

const NUM_USERS = 10;

let chance = new Chance();

async function addUser(user) {
    return mongoDriver.create(user);
}

function addUsers() {
    let promises = [];

    for (let i = 0; i < NUM_USERS; ++i) {
        let firstName = chance.first();
        let lastName = chance.last();
        let email = firstName[0] + lastName + '@test.com';

        let user = {
            firstName: firstName,
            lastName: lastName,
            email: email.toLowerCase()
        };

        promises.push(addUser(user));
    }

    Promise.all(promises)
        .then(result => {
            mongoDriver.close();
            return 1;
        }).catch(error => {
            console.error('Error occurred when adding users:\n', error);
        });
}

addUsers();
