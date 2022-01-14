import { Entity, Repository, Schema } from 'redis-om'
import { client, connect } from '../redis'

class Song extends Entity { }

const songSchema = new Schema(Song, {
   singer: { type: 'string' },
   lyrics: { type: 'string' }
}, {
   dataStructure: 'JSON'
})

export const songRepository = new Repository(songSchema, client)

export async function createSong(data) {
   await connect()
   const song = await songRepository.createAndSave(data)
   return song
}

export async function getSongs() {
   await connect()
   const songs = await songRepository.search().return.all()
   return songs
}
