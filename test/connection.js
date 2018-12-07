const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true)

before(function(done){
  mongoose.connection.once('open', function(){
    console.log('connection has been made');
    done();
  }).on('error', function(error){
    console.log('connection error:', error);
  });
});
