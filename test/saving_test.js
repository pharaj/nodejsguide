const User = require('../collections/users');
const UserProfile = require('../collections/userprofile');
const mongoose = require('mongoose');


var userRecord = [{
  first_name: "Abc",
  email: 'abc@gmail.com',
  last_name: 'cba',
  password: 'abcd',
  dob: '05-08-1980',
  mobile_no: 74556548
}, {
  first_name: "Def",
  email: 'def@gmail.com',
  last_name: 'fed',
  password: 'efgh',
  dob: '01-01-1993',
  mobile_no: 1233456
}, {
  first_name: "Ghi",
  email: 'ghi@gmail.com',
  last_name: 'ihg',
  password: 'ijkl',
  dob: '02-02-1990',
  mobile_no: 2564488
}, {
  first_name: "Jkl",
  email: 'jkl@gmail.com',
  last_name: 'lkj',
  password: 'mnop',
  dob: '03-03-2000',
  mobile_no: 3254896
}, {
  first_name: "Mno",
  email: 'mno@gmail.com',
  last_name: 'onm',
  password: 'qrst',
  dob: '04-04-1998',
  mobile_no: 41224453
}];



function savingData(callback){
    userRecord.forEach((data)=>{
      User.findOne({email: data.email}).then(function(result){
        if(result){
          console.log("user Already saved********");
        } else {
          var new_user={
            first_name: data.first_name,
            email: data.email,
            last_name: data.last_name,
            password: data.password
          }
          var user_data = new User(new_user)
           .save(new_user).then((response)=>{
              var new_userProfile = {
                user_id: response._id,
                dob: data.dob,
                mobile_no: data.mobile_no
              }
              var profile = new UserProfile(new_userProfile)
              profile.save(new_userProfile);
          })
        }
      })
    })

    callback();
  }

savingData(deleteAge);


var ageArr = [];
async function deleteAge(){
  var allData =  await UserProfile.find({});
  allData.forEach((data)=>{
   age = Math.floor((Date.now() - new Date(data.dob))/1000/60/60/24/365);
   ageArr.push(age);
   if(age>25){
     User.findOneAndDelete({_id: data.user_id}).then(function(){
       console.log('deleted');
     })
   }else{
     console.log('age is less than 25')
   }
  })
  console.log(ageArr);

  var total_age = 0;
  ageArr.forEach(function(a){
    total_age += a;
  })
  console.log(Math.floor(total_age/allData.length));
}
