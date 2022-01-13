import { graphql, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import initMiddleware from '../../utilities/initMiddleware'
import Cors from 'cors'
import { createSong, getSongs } from '../../utilities/initRedis'

const cors = initMiddleware(Cors({
   methods: ['POST']
}))

const songType = new GraphQLObjectType({
   name: 'songType',
   fields: () => ({
      singer: { type: GraphQLString },
      lyrics: { type: GraphQLString }
   })
})

const schema = new GraphQLSchema({
   query: new GraphQLObjectType({
      name: 'queries',
      fields: {
         songs: {
            type: new GraphQLList(songType),
            resolve: async () => {
               const songs = await getSongs()
               return songs
            }
         }
      }
   }),
   mutation: new GraphQLObjectType({
      name: 'mutations',
      fields: {
         addSong: {
            type: songType,
            args: {
               singer: { type: GraphQLString },
               lyrics: { type: GraphQLString }
            },
            resolve: async (source, args) => {
               const song = await createSong(args)
               console.log(song)
               return song
            }
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
