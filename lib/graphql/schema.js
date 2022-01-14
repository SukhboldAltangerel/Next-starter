import { GraphQLSchema } from 'graphql'
import mutations from './mutations'
import queries from './queries'

const schema = new GraphQLSchema({
   query: queries,
   mutation: mutations
})

export default schema
