const monk = require('monk');

const db = monk('mongo:27017/UsersDB');
const COLLECTION_NAME = 'users';

let usersCollection = db.get(COLLECTION_NAME);

async function list(query = {}, options = {}) {
    return usersCollection.find(query, options);
}

async function create(query = {}) {
    return usersCollection.insert(query);
}

async function getEntity(query = {}, options = {}) {
    return usersCollection.findOne(query, options);
}

module.exports = {
    close: async function() {
        await db.close();
    },
    list,
    create,
    getEntity
};
