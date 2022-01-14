import { GraphQLObjectType } from 'graphql'
import { addSong } from './mutations/song'

const mutations = new GraphQLObjectType({
   name: 'mutations',
   fields: {
      addSong
   }
})

export default mutations
