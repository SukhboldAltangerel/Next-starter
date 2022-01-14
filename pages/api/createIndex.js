import createIndex from '../../lib/redis/createIndex'

export default async function handler(req, res) {
   await createIndex()
   res.send('Created redis indexes.')
}
