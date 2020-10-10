const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const Cors = require('cors')
const schema = require('./schema')

const app = express()

// Allow cross-origin
app.use(Cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("SERVER START");
})