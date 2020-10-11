const Article = require('./schema')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLID } = require('graphql')
const mongoose = require('mongoose')

const ArticleType = new GraphQLObjectType({
  name: 'articles',
  fields: () => ({
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  })
})

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addArticle: {
      type: ArticleType,
      args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString }
      },
      async resolve(parents, args) {
        const article = await Article.create(args)
        return article
      }
    },
    updateArticle: {
      type: ArticleType,
      args: {
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: {type: GraphQLString}
      },
      async resolve(parents, args) {
        const article = await Article.findByIdAndUpdate(args._id, {$set: {title: args.title, body: args.body}}).exec()
        return article
      }
    },
    removeArticle: {
      type: ArticleType,
      args: {
        _id: {type:GraphQLID}
      },
      async resolve(parents, args) {
        const article = Article.findByIdAndDelete(args._id)
        return article
      }
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parent, args) {
        return Article.find().then(res => res)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})