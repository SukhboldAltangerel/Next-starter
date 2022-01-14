import { GraphQLString } from 'graphql'
import { createSong } from '../../redis/operations/song'
import { songType } from '../types/song'

export const addSong = {
   type: songType,
   args: {
      singer: { type: GraphQLString },
      lyrics: { type: GraphQLString }
   },
   resolve: async (source, args) => {
      const song = await createSong(args)
      return song
   }
}
