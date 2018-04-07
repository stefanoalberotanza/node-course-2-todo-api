var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');
  
    User.findByToken(token).then((user) => {
      if(!user) {
        return Promise.reject(); //app si stopperà con un errore
      }
  
      req.user = user;
      req.token = token;
      next(); //passa alla funzione successiva
    }).catch((e) => {
      res.status(401).send();
    });
  };

module.exports = {authenticate};