const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const jokeSchema = new Schema({
    body:String,
    rate:Number,
    user:{
        type: Schema.Types.ObjectId,
        ref:'users'
      }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;