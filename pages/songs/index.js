import { getSongs } from '../../lib/redis/operations/song'

export default function Songs({ songs }) {
   return (
      <div className=''>
         {songs.map((song, i) =>
            <div className='' key={i}>
               {song.entityId},
               {song.singer},
               {song.lyrics}
            </div>
         )}
      </div>
   )
}

export async function getStaticProps() {
   let songs = await getSongs()
   songs = songs.map(song => song.toJSON())
   return {
      props: {
         songs,
      }
   }
}
