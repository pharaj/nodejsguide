const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

//creating Schema
const UserProfileSchema = new Schema({
  user_id: String,
  dob: {type: Date},
  mobile_no: {type: Number}
});

//exporting collections
module.exports = mongoose.model('userProfile', UserProfileSchema);
