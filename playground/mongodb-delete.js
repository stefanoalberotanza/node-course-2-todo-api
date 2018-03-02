// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(('mongodb://localhost:27017/TodoApp'), (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    db.collection('Users')
        .deleteMany({
            "name" : "Stefano"
        })
    //deleteOne
    // db.collection('Users').deleteOne({
    //     "text" : "Eat lunch",
    //     "completed" : false}).then((result) => {
    //         console.log(result);
    //     })

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({
        "_id": ObjectID("5a97059f021dec2790925602")
    });

    // db.close();
});