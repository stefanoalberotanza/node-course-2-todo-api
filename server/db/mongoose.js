var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var connectPath, options;
//Check if we are on Heroku
if(process.env.PORT){
 connectPath = process.env.MONGODB_URI;
}else{
 connectPath = "mongodb://localhost:27017/TodoApp";
}
mongoose.createConnection(connectPath);


module.exports = {mongoose};