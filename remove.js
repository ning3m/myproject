const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    removeDocuments(db, function() {
        client.close();
    });
});


const removeDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('todos');
    // Delete document where a is 3
    collection.deleteMany({ a : 1 }, { justOne : 0 } ,function(err, result) {

        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
}