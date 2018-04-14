var env = process.env.NODE_ENV || 'development';



if(env === 'development' || env === 'test') {
  //E' già pronto all'uso
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key)=>{
    process.env[key] = envConfig[key];
  });
};