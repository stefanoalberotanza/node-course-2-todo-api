// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name: 'Stefano', age: 25};
var {name} = user;
console.log(name);

MongoClient.connect(('mongodb://localhost:27017/TodoApp'), (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a996cee110710764c42d47b")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a96eaea2fdaad2b28b44104")
    },{
        $inc: {
            age: -1
        }
    }, {
        returnOrginal: true
    }).then((result) => {
        console.log(result);
    })

    // db.close();
});