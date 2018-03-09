const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/user');

var id = '5aa1c3456dad3b403594ee0b';
var id2 = '5a9ddb1c6548c47405bb57f5';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });


// Todo.findById(id).then((todoId) => {
//     console.log('Todo by Id', todoId);
// }).catch((e) => console.log(e));

User.findById(id2).then((user) => {
    if(!user){
        return console.log("Unable");
    }
    console.log('User', user);
}, (e) => console.log(e));