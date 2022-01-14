import Cors from 'cors'
import { graphql } from 'graphql'
import schema from '../../lib/graphql/schema'
import initMiddleware from '../../lib/utilities/initMiddleware'

const cors = initMiddleware(Cors({
   methods: ['POST']
}))

export default async function handler(req, res) {
   await cors(req, res)
   const query = req.body.query
   const response = await graphql(schema, query)
   return res.json(response)
}
