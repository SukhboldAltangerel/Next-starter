import { songRepository } from './operations/song'
import { connect } from './redis'

const repositories = {
   songRepository
}

export default async function createIndex() {
   await connect()
   songRepository.createIndex()
   // await Promise.allSettled(
   //    Object.values(repositories)
   //       .map(repository => repository.createIndex())
   // )
}
