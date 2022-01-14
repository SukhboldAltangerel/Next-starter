import { GraphQLList } from 'graphql'
import { getSongs } from '../../redis/operations/song'
import { songType } from '../types/song'

export const songs = {
   type: new GraphQLList(songType),
   resolve: async () => {
      const songs = await getSongs()
      return songs
   }
}
