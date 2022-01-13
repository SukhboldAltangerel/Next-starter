import { graphql, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import initMiddleware from '../../utilities/initMiddleware'
import Cors from 'cors'

const cors = initMiddleware(Cors({
   methods: ['POST']
}))

const schema = new GraphQLSchema({
   query: new GraphQLObjectType({
      name: 'queries',
      fields: {
         hello: {
            type: GraphQLString,
            resolve: () => 'Hello, graphql'
         }
      }
   })
})

export default async function handler(req, res) {
   await cors(req, res)
   const query = req.body.query
   const response = await graphql(schema, query)
   return res.json(response)
}
