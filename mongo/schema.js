const mongoose = require('mongoose')
const article_schema = new mongoose.Schema({
  title: { type: String },
  body: { type: String }
})

const ArticleModel = mongoose.model('Article', article_schema)

module.exports = ArticleModel