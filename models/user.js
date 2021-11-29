'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const userSchema = new Schema({
  user_name: { type: String, require: true },
  user_psd: { type: String, require: true },
  create_date: { type: Date, default: Date.now }
})

userSchema.index({ id: 1 });

const User = mongoose.model('User', userSchema);

export default User