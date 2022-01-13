import { Client, Entity, Repository, Schema } from 'redis-om'

const client = new Client()

async function connect() {
   if (!client.isOpen()) {
      await client.open(process.env.REDIS_URL)
   }
}

class Song extends Entity { }

const songSchema = new Schema(Song, {
   singer: { type: 'string' },
   lyrics: { type: 'string' }
}, {
   dataStructure: 'JSON'
})

export async function createSong(data) {
   await connect()
   const repository = new Repository(songSchema, client)
   const song = await repository.createAndSave(data)
   return song
}

export async function getSongs() {
   await connect()
   const repository = new Repository(songSchema, client)
   const songs = await repository.search().returnAll()
   return songs
}
