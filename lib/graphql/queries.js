import { GraphQLObjectType } from 'graphql'
import { songs } from './queries/song'

const queries = new GraphQLObjectType({
   name: 'queries',
   fields: {
      songs
   }
})

export default queries
