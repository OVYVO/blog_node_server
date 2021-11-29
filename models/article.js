'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const articleSchema = new Schema({
  title: { type: String, trim:true, required: [true,'标题为必填字段'] },
  type: { type: String, required: [true,'类型为必填字段'] },
  tag: { type: String, required: [true,'标签为必填字段'] },
  poster: { type: String },
  mdText: { type: String, default: '' }
})

articleSchema.index({ id: 1 });

const Article = mongoose.model('Article', articleSchema);

export default Article