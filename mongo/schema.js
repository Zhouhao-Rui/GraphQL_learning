const mongoose = require('mongoose')
const article_schema = new mongoose.Schema({
  _id: {type: mongoose.Types.ObjectId},
  title: { type: String },
  body: { type: String }
})

const ArticleModel = mongoose.model('Article', article_schema)

module.exports = ArticleModel