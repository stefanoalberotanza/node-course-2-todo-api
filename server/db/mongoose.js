var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var connectPath, options;
//Check if we are on Heroku
if(process.env.PORT){
 connectPath = process.env.MONGODB_URI;
 options= {
     auth: {
         user: '<dbuser>',
         password: '<dbpassword>'
     }
 }
}else{
 connectPath = "mongodb://localhost:27017/TodoApp";
 options = {}
}
mongoose.connect(connectPath, options);
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};