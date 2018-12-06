const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true});

before(function(done){
  mongoose.connection.once('open', function(){
    console.log('connection has been made');
    done();
  }).on('error', function(error){
    console.log('connection error:', error);
  });
});

//droping collections before each tests
beforeEach(function(done){
  mongoose.connection.collections.users.drop();
  mongoose.connection.collections.userprofiles.drop(function(){
    done();
  });
});
