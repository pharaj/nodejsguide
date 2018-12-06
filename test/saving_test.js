const assert = require('assert');
const User = require('../collections/users');
const UserProfile = require('../collections/userprofile');

//describing tests
describe('saving records', function(){

  //creating test
  it('saving records to db', function(done){

    //creating records for both collections
    var userRecord = [{
      first_name: "Abc",
      email: 'abc@gmail.com',
      last_name: 'cba',
      password: 'abcd',
      dob: 05-08-1999,
      mobile_no: 74556548
    }, {
      first_name: "Def",
      email: 'def@gmail.com',
      last_name: 'fed',
      password: 'efgh',
      dob: 01-01-1800,
      mobile_no: 1233456
    }, {
      first_name: "Ghi",
      email: 'ghi@gmail.com',
      last_name: 'ihg',
      password: 'ijkl',
      dob: 02-02-1200,
      mobile_no: 2564488
    }, {
      first_name: "Jkl",
      email: 'jkl@gmail.com',
      last_name: 'lkj',
      password: 'mnop',
      dob: 03-03-1300,
      mobile_no: 3254896
    }, {
      first_name: "Mno",
      email: 'mno@gmail.com',
      last_name: 'onm',
      password: 'qrst',
      dob: 04-04-1400,
      mobile_no: 41224453
    }];

    var userArr = [];
    var userProfileArr = [];

    for(var i=0; i<userRecord.length; i++){
      //user collection saving
      var new_user={
        first_name: userRecord[i].first_name,
        email: userRecord[i].email,
        last_name: userRecord[i].last_name,
        password: userRecord[i].password
      }
      userArr[i] = new User(new_user);
      userArr[i].save().then(function(data){
        assert(userArr[i].isNew === false);
      });

      //userProfile collection saving
      var new_userProfile = {
        user_id: userArr[i].id,
        dob: userRecord[i].dob,
        mobile_no: userRecord[i].mobile_no
      }
      userProfileArr[i] = new UserProfile(new_userProfile);
      userProfileArr[i].save();
    }
    done();

  });

});
