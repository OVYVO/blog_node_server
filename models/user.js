'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const userSchema = new Schema({
  user_name: { type: String, default: true },
  user_psd: { type: String, default: true },
  create_date: { type: Date, default: Date.now }
})

userSchema.index({ id: 1 });

const User = mongoose.model('User', userSchema, 'user');

export default User