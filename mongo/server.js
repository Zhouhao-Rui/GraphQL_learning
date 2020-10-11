const express = require("express")
const mongoose = require("mongoose")
const Cors = require('cors')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./query')

const app = express()
app.use(Cors())
// 连接mongo
mongoose.connect("mongodb://localhost:27017/graphql_learn", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

// graphql
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => console.log("Server start on 4000"))