import { GraphQLObjectType, GraphQLString } from 'graphql'

export const songType = new GraphQLObjectType({
   name: 'songType',
   fields: () => ({
      singer: { type: GraphQLString },
      lyrics: { type: GraphQLString }
   })
})
