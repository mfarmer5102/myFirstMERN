//DEFINE DB================================================================

var mongo = require('mongodb');
let entriesCollection = 'entries';
var MongoClient = require('mongodb').MongoClient;

var databaseName;
var url;

if (process.env.DATABASE_NAME) {
    databaseName = process.env.DATABASE_NAME
    url = process.env.MONGODB_URI;
} else {
    databaseName = 'mernTasks'
    url = `mongodb://localhost:27017/${databaseName}`
};

module.exports = {mongo, databaseName, entriesCollection, MongoClient, url}