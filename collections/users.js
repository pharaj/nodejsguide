const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

//creating Schema
const UserSchema = new Schema({
  first_name: {type: String},
  email: {type: mongoose.SchemaTypes.Email},
  last_name: {type: String},
  password: {type: String}
});

//exporting collections
module.exports = mongoose.model('User', UserSchema);
