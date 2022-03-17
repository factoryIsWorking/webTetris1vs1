const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const NAME = 'User';

const UserSchema = new mongoose.Schema({  
    username: { // pass in config object. and put in validation rules 
      type: String,
      required: true,
      unique: true 
    },
    password: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      required: true,
      default: 0
    },
    win: {
      type: Number,
      required: true,
      default: 0
    },
    lose: {
      type: Number,
      required: true,
      default: 0
    },
    rate: {
      type: Number,
      required: true,
      default: 0
    }
  });


// note: no lambda func! (not work!)
UserSchema.pre('save', function(next){
    const user = this      
    bcrypt.hash(user.password, 10,  (error, hash) => {        
      user.password = hash 
      next() 
    }); 
});
export default [NAME,mongoose.model(NAME, UserSchema)];